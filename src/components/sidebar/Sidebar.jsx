import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler,CImage,
  CAvatar, } from '@coreui/react'


import { SidebarNav } from './SidebarNav'

import logo from '../../assets/images/logo.png'


import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from './_nav'

import './Sidebar.css'

import avatar8 from './../../assets/images/avatars/8.jpg'



const Sidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      className="sidebar"
    >
      <CSidebarBrand className="d-none bg-white d-md-flex" to="/dashboard">
      <CImage className="sidebar-brand-full" src={logo} height={65} />
        <CImage className="sidebar-brand-narrow" src={logo} height={65} />
      </CSidebarBrand>
      
      <CSidebarBrand className="info-user-brand" to="/dashboard">
        <div className='row'>
          <div className='col-2 m-auto'>
            <CAvatar src={avatar8} size="md" />
          </div>
          <div className='col-10 text-center'>
            
            <div className=''>
                <h4>Ouedraogo Issa</h4>
            </div>
            <div className=''>
                <p>Administrateur</p>
            </div>
          </div>
        </div>
      </CSidebarBrand>

      <CSidebarNav>
        <SimpleBar>
          <SidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(Sidebar)
