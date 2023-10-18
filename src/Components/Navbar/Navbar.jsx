import React from "react";
import weLogo from '../../assets/images/nav-logo.png'
import "./Navbar.scss";
import CTAButton from "../CTAButton/CTAButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='navbarDesk'>
      <div className='navbarDesk__logo'>
        <img className='logo' src={weLogo} alt='ErroLogo-WeFashion2' />
      </div>

      <div className='navbarDesk__menu desktop'>
        <ul>
          <li>
            <a href='#Home'>Início</a>
          </li>
          <li>
            <a href='#Courses'>Cursos</a>
          </li>
          <li>
            <a href='#About'>Sobre nós</a>
          </li>
          <li>
            <a href='#Contact'>Contato</a>
          </li>
        </ul>
        <Link to="https://api.whatsapp.com/send?phone=5512988880301&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20me%20inscrever%20em%20um%20dos%20cursos.%20%F0%9F%98%8A" target='_blank' className='whats-link'><CTAButton>
          Inscreva-se agora</CTAButton></Link>
      </div>
    </header>
  );
};

export default Navbar;
