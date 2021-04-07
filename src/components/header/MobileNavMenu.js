import React, { useContext } from 'react'
import { BookStoreContext } from '../../context/BookStoreContext'
import DropdownMenu from './DropdownMenu'

const MobileNavMenu = () => {
    const { openDropdownMenu, setOpenDropdownMenu } = useContext(BookStoreContext)

     const onClickNavIcon = () => {
        setOpenDropdownMenu(!openDropdownMenu)
        const top = document.getElementById('nav-icon__top')
        const middle = document.getElementById('nav-icon__middle')
        const bottom = document.getElementById('nav-icon__bottom')
        const menu = document.querySelector('.dropdown-menu')
        if (!openDropdownMenu) {
            top.classList.remove('animation-nav-icon-flipback1')
            middle.classList.remove('animation-nav-icon-flipback2')
            bottom.classList.remove('animation-nav-icon-flipback3')
            top.classList.add('animation-nav-icon-flip1')
            middle.classList.add('animation-nav-icon-flip2')
            bottom.classList.add('animation-nav-icon-flip3')
        } else {
            top.classList.remove('animation-nav-icon-flip1')
            middle.classList.remove('animation-nav-icon-flip2')
            bottom.classList.remove('animation-nav-icon-flip3')
            menu.classList.remove('animation-slide-in')
            top.classList.add('animation-nav-icon-flipback1')
            middle.classList.add('animation-nav-icon-flipback2')
            bottom.classList.add('animation-nav-icon-flipback3')
        }

    }

    return (
        <>
            <div id="mobile-nav" className="mobile-nav">
                <button onClick={onClickNavIcon} className="nav-icon">
                    <div className="nav-icon__line" id="nav-icon__top"></div>
                    <div className="nav-icon__line" id="nav-icon__middle"></div>
                    <div className="nav-icon__line" id="nav-icon__bottom"></div>
                </button>
            </div>
            <DropdownMenu onClick={onClickNavIcon}/>
            {openDropdownMenu && <div className="dropdown-menu__darken" onClick={onClickNavIcon}></div>}
        </>
    )
}


export default MobileNavMenu