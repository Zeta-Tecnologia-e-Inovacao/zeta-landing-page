import React from 'react';
import type { NextPage } from 'next';
import { Image } from '@nextui-org/react';
import * as S from './styles';

const Header: NextPage = () => (

  <S.MenuHeader>
    <div className='container-fluid '>
      <header className='row' id='header'>
        <div className='text-transition-slider-logo'>
          <div id='logo-container'>
            <Image src='images/Zeta-Logo.png' alt='' id='logo' />
          </div>
          <h4><i>Tecnologia e Inovação</i></h4>
        </div>
      </header>
      <nav className='navbar navbar-expand-lg text-transition-slider-navbar'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <i className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#home'>Home</a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#soluction'>Soluções</a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#parcerias'>Parcerias</a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#contact'>Contato</a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#about'>Sobre nós</a>
            </li>

          </ul>
        </div>
      </nav>
    </div>

  </S.MenuHeader>

);

export default Header;
