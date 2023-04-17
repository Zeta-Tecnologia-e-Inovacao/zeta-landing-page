import React from 'react';
import { Navbar, Text } from '@nextui-org/react';
import type { NextPage } from 'next';
<<<<<<< Updated upstream

const Header: NextPage = () => (
  <Navbar className='text-transition-slider-navbar' isBordered variant='sticky'>
    <Navbar.Toggle showIn='xs' />
    <Navbar.Brand
      css={{
        '@xs': {
          w: '12%',
        },
      }}
    >
      <Text b color='inherit' hideIn='xs' size={25}>
        Zeta
      </Text>
    </Navbar.Brand>
    <Navbar.Content>
      <Navbar.Link isActive href='#'>Home</Navbar.Link>
      <Navbar.Link href='#'>Customers</Navbar.Link>
      <Navbar.Link href='#'>Soluções</Navbar.Link>
      <Navbar.Link href='#'>Sobre nós</Navbar.Link>
    </Navbar.Content>
  </Navbar>
=======
import * as S from './styles';

const Header: NextPage = () => (

  <S.MenuHeader>
    <Navbar className='text-transition-slider-navbar' isBordered variant='sticky'>
      <Navbar.Toggle showIn='xs' />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
        <Image
          src='/images/ZetaLogo.png'
          alt='Default image'
          width={150}
          height={150}
        />

      </Navbar.Brand>
      <Navbar.Content className='ul'>
        <Navbar.Link href='#' className='nav-link li'>Home</Navbar.Link>
        <Navbar.Link href='#services' className='nav-link li'>Serviços</Navbar.Link>
        <Navbar.Link href='#' className='nav-link li'>Testes</Navbar.Link>
        <Navbar.Link href='#solucoes' className='nav-link li'>Soluções</Navbar.Link>
        <Dropdown>
          <Dropdown.Button flat>Sobre nós</Dropdown.Button>
          <Dropdown.Menu aria-label='Static Actions'>
            <Dropdown.Item><Navbar.Link href='/missao-valores'>Missão Valores</Navbar.Link></Dropdown.Item>
            <Dropdown.Item><Navbar.Link href='/quem-somos'>Quem Somos</Navbar.Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
    </Navbar>
  </S.MenuHeader>
>>>>>>> Stashed changes
);

export default Header;
