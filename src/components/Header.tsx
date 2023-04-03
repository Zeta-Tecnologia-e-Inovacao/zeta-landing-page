import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Button, Container, Link, Navbar,
} from '@nextui-org/react';
import Logo from '../../public/images/logo.svg';

const Header: NextPage = () => (
  <Container fluid>
    <Navbar isCompact isBordered variant='sticky'>
      <Navbar.Brand>
        <Button auto light href='/'>
          <Image
            src={Logo}
            alt='logo'
            width={30}
            height={30}
          />
        </Button>
      </Navbar.Brand>
      <Navbar.Content hideIn='xs' variant='underline'>
        <Navbar.Link isActive href='/'>Home</Navbar.Link>
        <Navbar.Link href='solutions'>Nossas soluções</Navbar.Link>
        <Navbar.Link href='about'>Sobre nós</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto flat as={Link} href='contact'>
            Fale conosco
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  </Container>
);

export default Header;
