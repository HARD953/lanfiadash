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
import { Button } from 'primereact/button';

import './CardUsers.css'



const UserCardInfos=()=>{
    return(
        <CRow>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Nom
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                    Kone
                </p>
            </CCol>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                    Prenom
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                    Vakaramoko
                </p>
            </CCol>
        </CRow>
    )
}



const CardUsers = () => {

  

  return (
     <div className="container">
        <h5 style={{fontWeight:'bold'}} >Informations sur Acteur</h5>
        <div className="card-user p-3">
            <CRow>
                <UserCardInfos/>
            </CRow>
            <CRow>
                <CCol xs={12} className="text-end pt-5" >
                    <Button className="px-3 p-button-sm p-button-rounded " aria-label="Pencil">
                        <i className="pi pi-pencil px-2"></i>
                        <span className="px-5">Modifier</span>
                    </Button>
                </CCol>
            </CRow>

        </div>
     </div>

  )
}

export default CardUsers
