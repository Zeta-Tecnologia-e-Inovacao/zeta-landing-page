import type { NextPage } from 'next'
import { Button, Container, Link, Navbar, Text } from '@nextui-org/react'

const Header: NextPage = () => {
  return (
    <Container>
      <Navbar isCompact isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Zeta
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link isActive href="#">Nossas soluções</Navbar.Link>
          <Navbar.Link href="#">Sobre nós</Navbar.Link>
          <Navbar.Link href="#">Contato</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Criar uma conta
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Container>
  )
}

export default Header
