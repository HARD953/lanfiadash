import React from "react"
import CIcon from '@coreui/icons-react'
import {
    CCol,
    CRow,
    CContainer,
  
  } from '@coreui/react'

import {cilHome} from '@coreui/icons'

import './CardChartBar.css'
import BarChart from "./BarChart"

const CardChartBar = ()=>{

    return(
        <div className="card-chart-line" >
        
              
            <CRow className="card-chart-line-container-main">
                <CCol md={2} className="m-auto">
                    <div className=" d-flex " >
                        <CIcon icon={cilHome} customClassName="" className="card-chart-line--icon" />
                       <h2 className="card-chart-line--titre" >
                        Repartition
                        </h2> 
                    </div>
                   
                </CCol>
                <CCol md={10} className="m-auto" >
                    <BarChart/>
                </CCol>
            </CRow>

        </div>

    )
}

export default CardChartBar