import React, { useState } from "react";
import iconNavbar from "./../../../assets/iconNavbar.svg";
import logo from "./../../../assets/images/nav-logo.png";
import "./NavbarMobile.scss";

const NavBarMobile = () => {
    const [menuView, setMenuView] = useState(false);

    const showMenu = () => setMenuView(!menuView);

    return (
        <header className='navbarMobile'>
            {menuView && (
                <navbar className='navbarMobile__menu mobile'>
                    <ul>
                        <li>
                            <a href='#Benefits'>Início</a>
                        </li>
                        <div className='line'></div>
                        <li>
                            <a href='#Courses'>Cursos</a>
                        </li>
                        <div className='line'></div>
                        <li>
                            <a href='#About'>Sobre</a>
                        </li>
                        <div className='line'></div>
                        <li>
                            <a href='#Contact'>Contato</a>
                        </li>
                        <div className='line'></div>
                    </ul>
                    <button className="button-cta">Inscreva-se</button>
                </navbar>
            )}

            <div className='navbarMobile__logo'>
                <img src={logo} alt='ErroLogo-WeFashion2' />
            </div>

            <img
                className='navbarMobile__icon'
                onClick={showMenu}
                src={iconNavbar}
                alt='ErrorIcon-Menu'
            />
        </header>
    );
};

export default NavBarMobile;
