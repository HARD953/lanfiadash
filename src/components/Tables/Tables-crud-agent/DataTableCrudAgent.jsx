
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';

import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../../views/dons/service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './DataTableCrud.css';
import { TextArea } from 'semantic-ui-react';

const DataTableCrudAgent = (props) => {
    const navigate = useNavigate()

    let emptyProduct = {
    email: "",
    user_name: "",
    first_name: "",
    password: "",
    adresse: "",
    about_me: "",
    is_active: "",
    is_staff: "",
    is_superuser: "",
    district: null,
    region: null,
    departement: "",
    sous_prefecture: "",
    commune: "",
    milieu_r: "",
    quartier: ""

};

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const productService = new ProductService();


    const [cities, setCities] = useState([]);

const onCityChangeStaff = (e) => {
    let selectedCities = [...cities];
    let _product = {...product};
    if(e.checked){
        selectedCities.push(e.value);
  
     
        _product[`${'is_staff'}`] = e.value;

        setProduct(_product);
    }
        
    else
        selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
}

const onCityChangeActive = (e) => {
    let selectedCities = [...cities];
    let _product = {...product};
    if(e.checked){
        selectedCities.push(e.value);
    
        _product[`${'is_active'}`] = e.value;

        setProduct(_product);
    }
    else
        selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
}

const onCityChangeSuperU = (e) => {
    let selectedCities = [...cities];
    let _product = {...product};
    if(e.checked){
        selectedCities.push(e.value);
     
     
        _product[`${'is_superuser'}`] = e.value;

        setProduct(_product);
    }
    else
        selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
}



    useEffect(() => {
        
        productService.getAgents().then(data =>  setProducts(data));

    }, []); 


    const voirDetailsActeurs=()=>{
        navigate(props.detailUrl,{
            state:{
                idActeur:55,
                typeActeur:props.acteursTitle
        }})
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }

    const saveProduct = () => {
        setSubmitted(true);

        if (product.email.trim() && product.first_name.trim()&& product.adresse.trim()&& product.commune.trim()&& product.user_name.trim()&& product.password.trim()) {
            let _products = [...products];
            let _product = {...product};
            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
        

    }

    const editProduct = (product) => {
        setProduct({...product});
        setProductDialog(true);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }


    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            const importedData = data.map(d => {
                d = d.split(',');
                const processedData = cols.reduce((obj, c, i) => {
                    c = c === 'Status' ? 'inventoryStatus' : (c === 'Reviews' ? 'rating' : c.toLowerCase());
                    obj[c] = d[i].replace(/['"]+/g, '');
                    (c === 'price' || c === 'rating') && (obj[c] = parseFloat(obj[c]));
                    return obj;
                }, {});

                processedData['id'] = createId();
                return processedData;
            });

            const _products = [...products, ...importedData];

            setProducts(_products);
        };

        reader.readAsText(file, 'UTF-8');
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        let _products = products.filter(val => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let _product = {...product};
        _product['category'] = e.value;
        setProduct(_product);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = {...product};
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = {...product};
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div  className="d-flex" style={{justifyContent:"space-between"}} >

                    <Button onClick={openNew} className="px-3 p-button-sm p-button-rounded me-5" aria-label="Plus">
                        <i className="pi pi-plus px-2"></i>
                        <span className="px-5">Ajouter</span>
                    </Button>
                    <Button className="px-3 p-button-sm p-button-danger p-button-rounded" aria-label="Plus" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length}>
                        <i className="pi pi-trash px-2"></i>
                        <span className="px-5">Supprimer</span>
                    </Button>
                   
                </div>
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div  className="d-flex" style={{justifyContent:"space-between",justifyItems:"center"}} >
                    <Button  onClick={exportCSV} className="px-3 p-button-sm p-button-rounded p-button-outlined p-button-raised p-button-help me-5" aria-label="Plus">
                        <i className="pi pi-upload px-2"></i>
                        <span className="px-5">Exporter</span>
                    </Button>
                    <div className=" font-weight-bold" style={{fontWeight:"bold"}} >
                        <p>
                            <span className="me-3" >
                            {products ==null ?'0':products.length }
                            </span>
                            {props.acteursTitle}
                        </p>
                    </div>
                </div>

            </React.Fragment>
        )
    }

    const imageBodyTemplate = (rowData) => {
        return 
    }

    const emailBodyTemplate = (rowData) => {
        return (rowData.email);
    }
    const user_nameBodyTemplate = (rowData) => {
        return rowData.user_name;
    }

    const communeBodyTemplate = (rowData) => {
        return rowData.commune;
    }
    const first_nameTemplate = (rowData) => {
        return rowData.first_name
  
    }
    const passwordTemplate = (rowData) => {
        return rowData.password;
  
    }
    const adresseTemplate = (rowData) => {
        return rowData.adresse;
  
    }
    const about_meTemplate = (rowData) => {
        return rowData.about_me
  
    }
    const is_activeTemplate = (rowData) => {
        return(
            <span
            className={`badge badge-success bg-success`}
          >
    {rowData.is_active == true ? 'Oui': ''}
    </span>
        )
  
     
  
    }
    const is_staff = (rowData) => {
        return(
            <span
            className={`badge badge-success bg-success`}
          >
    {rowData.is_staff == true ? 'Oui': ''}
    </span>
        )
  
    }
    const is_superuserTemplate = (rowData) => {
        return(
            <span
            className={`badge badge-success bg-success`}
          >
    {rowData.is_superuser == true ? 'Oui': ''}
    </span>
        )
  
    }
  

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-eye" className="p-button-rounded p-button-outlined " onClick={() => voirDetailsActeurs()} />
            </React.Fragment>
        );
    }



    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="Non" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Oui" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

       

    return (
        <div className="datatable-crud-demo mt-5">
           <Toast ref={toast} />
                <Toolbar className="mb-4 bg-white border-0" left={leftToolbarTemplate}  right={rightToolbarTemplate}></Toolbar>
            <div className="data-table-container">

                <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Afficher de {first} à {last} de {totalRecords} Acteurs"
                    globalFilter={globalFilter}  responsiveLayout="scroll">
                    <Column selectionMode="multiple" headerStyle={{ width: '2rem' }} exportable={false}></Column>
                    <Column field="email" header="Email" body={emailBodyTemplate}   style={{ minWidth: '5rem' }}></Column>
                    <Column field="user_name" header="Nom d'utilisateur" body={user_nameBodyTemplate}   style={{ minWidth: '16rem' }}></Column>
                    <Column field="commune" header="Commune" body={communeBodyTemplate}  style={{ minWidth: '16rem' }}></Column>
                    <Column field="first_name" header="Nom" body={first_nameTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column field="adresse" header="Adresse" body={adresseTemplate}  style={{ minWidth: '15rem' }}></Column>
                
                    <Column field="password" header="Mot de Passe" body={passwordTemplate}  style={{ minWidth: '10rem' }}></Column>
                    <Column field="about_me" header="À propos de moi" body={about_meTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column field="is_active" header="Actif " body={is_activeTemplate}  style={{ minWidth: '10rem' }}></Column>
                    <Column field="is_staff" header="Personnel " body={is_staff}  style={{ minWidth: '15rem' }}></Column>
                    <Column field="is_superuser" header="Super-utilisateur" body={is_superuserTemplate}  style={{ minWidth: '10rem' }}></Column>
                    
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '1rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '450px' }} header="Ajout" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {product.image && <img src={`images/product/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.image} className="product-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <InputText id="email" value={product.email} onChange={(e) => onInputChange(e, 'email')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.email })} />
                    {submitted && !product.email && <small className="p-error">E-mail is required.</small>}
                </div>

                <div className="field">
                    <label htmlFor="user_name">Nom d'utilisateur</label>
                    <InputText id="user_name" value={product.user_name} onChange={(e) => onInputChange(e, 'user_name')} required  className={classNames({ 'p-invalid': submitted && !product.user_name })} />
                    {submitted && !product.user_name && <small className="p-error">Nom utilisateur is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="first_name">Nom</label>
                    <InputText id="first_name" value={product.first_name} onChange={(e) => onInputChange(e, 'first_name')} required  className={classNames({ 'p-invalid': submitted && !product.first_name })} />
                    {submitted && !product.first_name && <small className="p-error">Nom is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="password">Mot de passe</label>
                    <InputText id="password" value={product.password} onChange={(e) => onInputChange(e, 'password')} required  className={classNames({ 'p-invalid': submitted && !product.password })} />
                    {submitted && !product.password && <small className="p-error">Mot de passe is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="adresse">Adresse</label>
                    <InputText id="adresse" value={product.adresse} onChange={(e) => onInputChange(e, 'adresse')} required className={classNames({ 'p-invalid': submitted && !product.adresse })} />
                    {submitted && !product.adresse && <small className="p-error">Adresse is required.</small>}
                </div>
           
                <div className="field">
                    <label htmlFor="district">District</label>
                    <InputText id="district" value={product.district} onChange={(e) => onInputChange(e, 'district')} required className={classNames({ 'p-invalid': submitted && !product.district})} />
                    {submitted && !product.district && <small className="p-error">Adresse is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="region">Region</label>
                    <InputText id="region" value={product.region} onChange={(e) => onInputChange(e, 'region')} required className={classNames({ 'p-invalid': submitted && !product.region })} />
                    {submitted && !product.region && <small className="p-error">Adresse is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="departement">Departement</label>
                    <InputText id="departement" value={product.departement} onChange={(e) => onInputChange(e, 'departement')} required className={classNames({ 'p-invalid': submitted && !product.departement })} />
                    {submitted && !product.departement && <small className="p-error">Adresse is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="sous_prefecture">Sous Prefecture</label>
                    <InputText id="sous_prefecture" value={product.sous_prefecture} onChange={(e) => onInputChange(e, 'sous_prefecture')} required className={classNames({ 'p-invalid': submitted && !product.sous_prefecture})} />
                    {submitted && !product.sous_prefecture && <small className="p-error">Adresse is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="commune">Commune</label>
                    <InputText id="commune" value={product.commune} onChange={(e) => onInputChange(e, 'commune')} required  className={classNames({ 'p-invalid': submitted && !product.commune })} />
                    {submitted && !product.commune && <small className="p-error">Commune is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="milieu_r">Milieu_r</label>
                    <InputText id="milieu_r" value={product.milieu_r} onChange={(e) => onInputChange(e, 'milieu_r')} required className={classNames({ 'p-invalid': submitted && !product.milieu_r })} />
                    {submitted && !product.milieu_r && <small className="p-error">Adresse is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="quartier">Quartier</label>
                    <InputText id="quartier" value={product.quartier} onChange={(e) => onInputChange(e, 'quartier')} required className={classNames({ 'p-invalid': submitted && !product.quartier })} />
                    {submitted && !product.quartier && <small className="p-error">Adresse is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="about_me">A propos de moi</label>
                    <InputTextarea id="about_me" value={product.about_me} onChange={(e) => onInputChange(e, 'about_me')} required rows={3} cols={20} />
                </div>
                <div className="field-checkbox">
                    <div className="field-checkbox">
                        <Checkbox inputId="is_active" name="is_active" value="is_active" onChange={onCityChangeActive} checked={cities.indexOf('is_active') !== -1} />
                        <label htmlFor="is_active">Actif</label>
                    </div>
                    <div className="field-checkbox">
                        <Checkbox inputId="is_staff" name="is_staff" value="is_staff" onChange={onCityChangeStaff} checked={cities.indexOf('is_staff') !== -1} />
                        <label htmlFor="is_staff">Personnel</label>
                    </div>
                    <div className="field-checkbox">
                        <Checkbox inputId="is_superuser" name="is_superuser" value="is_superuser" onChange={onCityChangeSuperU} checked={cities.indexOf('is_superuser') !== -1} />
                        <label htmlFor="is_superuser">Super-utilisateur</label>
                    </div>
                </div>

              
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Are you sure you want to delete <b>{product.name}</b>?</span>}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
}

export default DataTableCrudAgent