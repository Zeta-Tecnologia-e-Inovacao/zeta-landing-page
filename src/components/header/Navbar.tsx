import React from 'react';
import { Navbar, Text, Dropdown } from '@nextui-org/react';
import type { NextPage } from 'next';

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
      <Dropdown>
        <Dropdown.Button flat>Sobre nós</Dropdown.Button>
        <Dropdown.Menu aria-label='Static Actions'>
          <Navbar.Link href='/missao-valores'>Missão Valores</Navbar.Link>
          <Navbar.Link href='/quem-somos'>Quem Somos</Navbar.Link>
          <Dropdown.Item key='delete' color='error'>
            Voltar
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </Navbar.Content>
  </Navbar>
);

export default Header;
