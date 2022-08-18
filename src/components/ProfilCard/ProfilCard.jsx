import React from "react";

import { Card } from 'primereact/card';

import { Image } from 'primereact/image';
 

import {CRow,CCol } from "@coreui/react";

class ProfilCard extends React.Component {
  render() {
    return (
      
      <div className="container">
      
         <div className='card  border p-4 m-2' >
          <CRow>
       
                <div className="col-12 md:col-12 text-center">
                    <div className="">
                      
                    <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="200" shape='circle' preview />
                        <h5>User 1</h5>
                    </div>
                </div>

 
          
          
                    <h5 as="h5" className="text-primary">
                    
                      CONTACT
                    </h5>
        
          <CCol  xs={12} md={6} className="mt-1"  >      
             
                 
                    <h5 as="h5" style={{ fontStyle: "italic", fontSize:"18px" }}>
                    
                      Name:
                    </h5>
          </CCol>

          <CCol  xs={12} md={6} className="mt-1" >   
                    <b>Syed Mushran</b>
          </CCol>
          <br></br>
          <CCol  xs={12} md={3} className="mt-3" >   
                
                    <h5 as="h5" style={{ fontStyle: "italic", fontSize:"18px" }}>
                      {" "}
                      Email:
                    </h5>
          </CCol>

          <CCol  xs={12} md={3} className="mt-3" >    
             
                    <b>test@gmail.com</b>
          </CCol>

          <CCol  xs={12} md={3} className="mt-3" >

                    <h5 as="h5" style={{ fontStyle: "italic", fontSize:"18px" }}>
                      {" "}
                      Phone:
                    </h5>
          </CCol>

          <CCol xs={12} md={3} className="mt-3" >
                    <b>(541) 754-3010</b>           
          </CCol>
          <br></br>
          <CCol  xs={12} md={3} className="mt-3" >   
                
                <h5 as="h5" style={{ fontStyle: "italic", fontSize:"18px" }}>
                  {" "}
                  Email:
                </h5>
      </CCol>

      <CCol  xs={12} md={3} className="mt-3" >    
         
                <b>test@gmail.com</b>
      </CCol>

      <CCol  xs={12} md={3} className="mt-3" >

                <h5 as="h5" style={{ fontStyle: "italic", fontSize:"18px" }}>
                  {" "}
                  Phone:
                </h5>
      </CCol>

      <CCol xs={12} md={3} className="mt-3" >
                <b>(541) 754-3010</b>           
      </CCol>
      <br></br>
          <CCol  xs={12} md={3} className="mt-3" >

                <h5 className="text-primary">
                  {" "}
                  CLIENT ID
                </h5>
          </CCol>
          <CCol  xs={12} md={3} className="mt-3" >
              ***********************
          </CCol>
          <CCol  xs={12} md={3} className="mt-3" >
                <h5
                  className="text-primary"
                  width={1}
                  style={{ textAlign: "right" }}
                >
                  {" "}
                  CLIENT SECRET
                </h5>
          </CCol>
          <CCol  xs={12} md={3} className="mt-3" >
           
        
                ***********************
          </CCol>    
          
          </CRow>
        </div>
      </div>
    
    );
  }
}
export default ProfilCard;
