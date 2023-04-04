import React from 'react';
import type { NextPage } from 'next';
import {
  Button, Container, Text, Tooltip,
} from '@nextui-org/react';

const Jumbotron: NextPage = () => (
  <Container
    fluid
    css={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '400px',
    }}
  >
    <Text h1 weight='extrabold'>
      Impulsione o potencial do seu negócio com nossas soluções de TI de última geração
    </Text>
    <Text size={24}>
      Nós fornecemos soluções personalizadas que ajudam sua startup
      a crescer e se destacar no mercado digital.
    </Text>
    <Tooltip content='Temos uma especialista à sua disposição!' rounded placement='bottomStart' color='primary'>
      <Button light bordered auto css={{ width: '20%', marginTop: '20px' }}>Saiba mais</Button>
    </Tooltip>
  </Container>
);

export default Jumbotron;
