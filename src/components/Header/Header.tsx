import React from "react";
import { Navbar, Button, Container, Text } from "@nextui-org/react";
import SectionImage from "./styles/home";

import { ZetaLogo } from "./ZetaLogo";

export default function App() {
 
  return (
    <SectionImage>
        <Container>
          <Navbar isCompact variant={"static"} css={{
            marginTop: "5px",
            
          }}>
            <Navbar.Brand>
              <ZetaLogo />
              <Text b color="inherit" hideIn="xs">
                Zeta
              </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="md">
              <Navbar.Link isActive href="#">Home</Navbar.Link>
              <Navbar.Link href="#">Sobre nós</Navbar.Link>
              <Navbar.Link href="#">Pricing</Navbar.Link>
              <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
              <Navbar.Link color="inherit" href="#">
                Login
              </Navbar.Link>
              <Navbar.Item>
                <Button auto flat href="#">
                  Sign Up
                </Button>
              </Navbar.Item>
            </Navbar.Content>
          </Navbar>

        </Container>
    </SectionImage>
      
  
  )
}
