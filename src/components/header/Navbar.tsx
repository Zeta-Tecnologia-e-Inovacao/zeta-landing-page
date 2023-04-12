import React from 'react';
import { Navbar, Text } from '@nextui-org/react';
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
      <Navbar.Link href='#'>Sobre nós</Navbar.Link>
    </Navbar.Content>
  </Navbar>
);

export default Header;
