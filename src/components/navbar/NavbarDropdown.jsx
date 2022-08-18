import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilLockLocked,
  cilSettings,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'

const NavbarDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Mon profil</CDropdownHeader>
        <CDropdownItem href="/dashboard/compte">
          <CIcon icon={cilUser} className="me-2" />
          Mon compte
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Notifications
          <CBadge color="info" className="ms-2">
            0
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Paramètres
        </CDropdownItem>
       
        <CDropdownDivider />
        <CDropdownItem href="#">
          <CIcon icon={cilLockLocked} className="me-2" />
          Deconnexion
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default NavbarDropdown
