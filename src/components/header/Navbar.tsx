import React from 'react';
import type { NextPage } from 'next';
import { Image, Link } from '@nextui-org/react';
import Script from 'next/script';
import * as S from './styles';

const Header: NextPage = () => (

  <S.MenuHeader>
    <Script
      src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js'
      integrity='sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe'
      crossOrigin='anonymous'
    />
    <div className='container-fluid'>
      <header className='row' id='header'>
        <div id='logo-container'>
          <Image src='images/Zeta-Logo.png' alt='' id='logo' />
        </div>
        <h4><i>Tecnologia e Inovação</i></h4>
      </header>
      <nav className='navbar navbar-expand-lg'>
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
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='#d' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Sobre nós
              </a>
              <ul className='dropdown-menu'>
                <li><Link className='dropdown-item' href='/quem-somos'>Quem somos</Link></li>
                <li><Link className='dropdown-item' href='/missao-valores'>Missão Valores</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  </S.MenuHeader>

);

export default Header;
