import React from 'react'
import { Link } from 'react-router-dom'
import MobileNavMenu from './MobileNavMenu'
import MenuBar from './MenuBar'

const Header = () => {
    return (
        <>
            <header>
                <MenuBar />
                <div className="header">
                    <Link to="/" id="logo-link"><img id="logo" src="https://raw.githubusercontent.com/einav15/HackerU/master/img/logo.png" alt="logo" /></Link>
                    <form>
                        <div className="search-bar">
                            <input placeholder="Search By Author or Title" />
                            <button><img alt="search" src="https://raw.githubusercontent.com/einav15/HackerU/master/img/zoom.png" /></button>
                        </div>

                    </form>
                    <MobileNavMenu />
                </div>
            </header>
        </>
    )
}


export default Header