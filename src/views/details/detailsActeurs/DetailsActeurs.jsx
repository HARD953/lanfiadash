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

import './DetailsActeurs.css'
import CardUsers from '../../../components/details/cardUsers/CardUsers';
import CardResponsabilite from '../../../components/details/cardResponsabilite/CardResponsabilite';
import CardInfoUserActivite from '../../../components/details/cardInfoUserActivite/CardInfoUserActivite';


const DetailsActeurs = () => {

  

  return (

    <CContainer>
        <div  className="d-flex" style={{justifyContent:"space-between"}}>
        <div className="">
          <h2  style={{fontWeight:"bold",color:"blue"}} >
          <CIcon icon={cilPeople} height={30} customClassName="" className="me-3" />
            Acteurs
          </h2>
          <div className="mb-4 mx-5" >
            <CSpinner color="primary" size="sm" variant="grow"/>
            Administrateurs/details
          </div>
        </div>
        <div className="">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText className="input-navbar-search" value=''  placeholder="Rechercher..." />
            </span>
        </div>
      </div>
     
      <CRow>
        <CCol xs={12}>
          <CardUsers/>
        </CCol>
      </CRow>
      
      <CRow>
        <CCol xs={12} className="mt-5">
          <CardResponsabilite/>
        </CCol>
      </CRow>
      
      <CRow>
        <CCol xs={12} className="mt-5">
          <CardInfoUserActivite />
        </CCol>
      </CRow>

    </CContainer>
  )
}

export default DetailsActeurs
