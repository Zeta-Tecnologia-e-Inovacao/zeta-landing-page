import React from 'react';
import type { NextPage } from 'next';
import { Image, Link } from '@nextui-org/react';
import * as S from './styles';

const Header: NextPage = () => (

  <S.MenuHeader>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark menu'>
      <div className='container text-transition-slider-navbar'>
        <Image src='/images/Zeta-Logo.png' className='navbar-brand logo' />
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#collapsibleNavbar'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='collapsibleNavbar'>
          <ul className='navbar-nav ms-auto '>

            <li className='nav-item'>
              <Link className='nav-link' href='#solucoes'>Soluções</Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' href='#services'>Serviços</Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' href='#contact'>Contato</Link>
            </li>
            
            <li className='nav-item dropdown'>
              <span className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown'>Sobre nós</span>
              <ul className='dropdown-menu'>
                <li><Link href='/quem-somos' className='dropdown-item'>Quem Somos</Link></li>
                <li><Link href='/missao-valores' className='dropdown-item'>Missão e Valores</Link></li>
                <li><Link href='#teste' className='dropdown-item'>A third link</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </S.MenuHeader>
);

export default Header;
