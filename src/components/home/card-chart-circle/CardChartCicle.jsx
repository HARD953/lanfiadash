import React from "react"
import CIcon from '@coreui/icons-react'
import {
    CCol,
    CRow,
    CContainer,
  
  } from '@coreui/react'

import {cilHome} from '@coreui/icons'

import './CardChartCicle.css'
import DoughnutChart from "./DoughnutChart"

const CardChartCicle = ()=>{

    return(
        <div className="card-chart-cicle" >
        
              
            <CRow className="card-chart-cicle-container-main">
                <CCol md={6} className="">
                <p className="">
                        <CIcon icon={cilHome} customClassName="" className="card-chart-cicle--icon" />
                       <span className="card-chart-cicle--titre" >
                        Menage
                        </span> 
                    </p>
                    <div className="d-flex" style={{justifyContent:"space-between"}} >
                        <div className="">
                            <p>VulnerabilitéPhysique</p>
                        </div>
                        <div className="">
                            <p>45%</p>
                        </div>

                    </div>
                    <div className="d-flex" style={{justifyContent:"space-between"}} >
                        <div className="">
                            <p>ConditionDeVie</p>
                        </div>
                        <div className="">
                            <p>45%</p>
                        </div>
                    </div>
                    <div className="d-flex" style={{justifyContent:"space-between"}} >
                        <div className="">
                            <p>VulnerabilitéMonétaire</p>
                        </div>
                        <div className="">
                            <p>45%</p>
                        </div>

                    </div>
                </CCol>
                <CCol md={6} className="m-auto" >
                    <DoughnutChart/>
                </CCol>
            </CRow>

        </div>

    )
}

export default CardChartCicle