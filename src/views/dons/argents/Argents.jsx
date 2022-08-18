import React,{useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilPeople} from '@coreui/icons'

import { InputText } from 'primereact/inputtext';



import './Argents.css'
import DataTableCrudArgent from '../../../components/Tables/Tables-crud-Dons/DataTableCrudArgent';


const Argents = () => {

  
  const [value3, setValue3] = useState('');


  return (

    <CContainer>
      <div  className="d-flex" style={{justifyContent:"space-between"}}>
        <div className="">
          <h2  style={{fontWeight:"bold",color:"blue"}} >
          <CIcon icon={cilPeople} height={30} customClassName="" className="me-3" />
            Dons
          </h2>
          <div className="mb-4 mx-5" >
            <CSpinner color="primary" size="sm" variant="grow"/>
            Argents
          </div>
        </div>
        <div className="">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText className="input-navbar-search" value={value3} onChange={(e) => setValue3(e.target.value)}placeholder="Rechercher..." />
            </span>
        </div>
      </div>
      <CRow>
      
        <CCol xs={12}>
          <DataTableCrudArgent acteursTitle="Dons" detailUrl="/dashboard/details/dons" />
        </CCol>
      
      </CRow>
    </CContainer>
  )
}

export default Argents