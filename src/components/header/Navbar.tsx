import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Image } from '@nextui-org/react';
import Script from 'next/script';
import * as S from './styles';

const Header: NextPage = () => (

  <S.MenuHeader>
    <Script
      src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js'
      integrity='sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r'
      crossOrigin='anonymous'
    />
    <Script
      src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js'
      integrity='sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS'
      crossOrigin='anonymous'
    />

    {/* menu-absolute  navbar fixed-top */}
    <nav className='navbar navbar-expand-lg bg-nav fixed-top' id='header'>
      <div className='container'>
        <a className='navbar-brand' href='##'>
          <Image src='/images/Zeta-Logo.png' className='logo' alt='logo' width={200} height={200} />
        </a>
        <button aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' className='navbar-toggler' data-bs-target='#navbarSupportedContent' data-bs-toggle='collapse' type='button'><i className='bi bi-grid-3x3-gap-fill' /></button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' href='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#services'>Serviços</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>Sobre nós</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#parcerias'>Parcerias</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section className='slider-area bgs-cover pt-185 pb-160 sliderT animated fadeInUp'>
      <div className='container'>
        <div className='main-slider-active'>
          <div className='slider-item'>
            <div className='slide-content text-white'>
              <span className='sub-title'>Aproveite o poder da tecnologia! </span>
              <span className='h2'>Explore o </span>
              <h1>futuro!</h1>
              <a href='#services' className='theme-btn2'>
                Vamos começar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </S.MenuHeader>

);

export default Header;
