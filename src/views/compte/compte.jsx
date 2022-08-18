import React from 'react'
import {
  CCol,
  CRow,
  CContainer,

} from '@coreui/react'

import CardInfoUserActivite from '../../components/details/cardInfoUserActivite/CardInfoUserActivite';
import './Compte.css'

import ProfilCard from '../../components/ProfilCard/ProfilCard';
const styles = {
  fontFamily: "sans-serif",
 
};

const Compte = () => {

  

  return (

   <CContainer>
     
  
      

    <div style={styles}>
      <ProfilCard />
    </div>
    
    <div className="container ">
   
    <CRow>
        <CCol xs={15} className="mt-5 container">
        
          <div className=" p-2 border-top border-bottom">
            
            <CardInfoUserActivite />

          </div>

        </CCol>
      </CRow>
      </div>
      
      
     
    </CContainer>
  )
}

export default Compte
