import React from 'react'
import {
  CCol,
  CRow,
  CContainer,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilHome} from '@coreui/icons'

import CardChartCicle from '../../components/home/card-chart-circle/CardChartCicle'
import CardChartLine from '../../components/home/card-chart-line/CardChartLine'
import CardChartBar from '../../components/home/card-chart-bar/CardChartBar'



const Accueil = () => {
  return (
    <CContainer >
      <div className="">
        <h2 className="mb-4  " style={{fontWeight:"bold",color:"blue"}} >
        <CIcon icon={cilHome} height={30} customClassName="" className="me-3" />
        Accueil
        </h2>
      </div>
      <CRow>
        
        <CCol  className='mt-3 mt-md-0' md={6}>
          <CardChartCicle/>
        </CCol>
        
        <CCol className='mt-3 mt-md-0'  md={6}>
          <CardChartCicle/>
        </CCol>
      
      </CRow>
      <CRow className="mt-3">
        <CCol>
          <CardChartLine/>
        </CCol>
      </CRow>

      <CRow className="mt-3">
        <CCol>
          <CardChartBar/>
        </CCol>
      </CRow>

    </CContainer>
  
  )
}

export default Accueil
