import React, { useContext } from 'react'
import { BookStoreContext } from '../../context/BookStoreContext'
import SideMenu from '../SideMenu'

const DropdownMenu = ({ ...rootDOMAttributes }) => {
    const { openDropdownMenu } = useContext(BookStoreContext)
    const onClickNavIcon = rootDOMAttributes.onClick
    return (
        openDropdownMenu &&
        <div className="dropdown-menu animation-slide-in" onClick={onClickNavIcon}>
            <SideMenu />
        </div>

    )
}

export default DropdownMenu
