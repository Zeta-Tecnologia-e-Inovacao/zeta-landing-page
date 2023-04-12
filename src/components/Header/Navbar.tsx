import React from "react";
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { ZetaLogo } from "./ZetaLogo.jsx";

export default function App() {

  return (
  
      <Navbar className='text-transition-slider-navbar' isBordered variant="sticky" >
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <ZetaLogo />
          <Text b color="inherit" hideIn="xs" size={25}>
            Zeta
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link isActive href="#">Home</Navbar.Link>
          <Navbar.Link href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Soluções</Navbar.Link>
          <Navbar.Link href="#">Sobre nós</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
        </Navbar.Content>
      </Navbar>
  
  );
};

