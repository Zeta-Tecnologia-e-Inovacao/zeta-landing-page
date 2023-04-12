import React from 'react';
import type { NextPage } from 'next';
import {
  Button, Container, Text, Tooltip, Grid, Col,
} from '@nextui-org/react';

const Jumbotron: NextPage = () => (
  <Container>
    <Grid.Container
      css={{
        height: '500px',
        backgroundImage: 'url(https://littlevisuals.co/images/747.jpg)',
      }}
    >
      <Grid
        xs={12}
        sm={6}
        alignItems='center'
      >
        <Col
          css={{
            width: '100%',
            padding: '60px',
          }}
        >
          <Text
            className='text-transition-slider'
            weight='extrabold'
            size={40}
            css={{
              textAlign: 'left',
            }}
          >
            Impulsione o potencial do seu negócio com nossas soluções TI de última geração.
          </Text>

          <Text size={24}>
            Nós fornecemos soluções personalizadas que ajudam sua startup
            a crescer e se destacar no mercado digital.
          </Text>

          <Tooltip content='Temos uma especialista à sua disposição!' rounded placement='bottomStart' color='primary'>
            <Button
              size='md'
              color='gradient'
              css={{
                width: '100%',
                marginTop: '10px',
              }}
            >
              Saiba mais
            </Button>
          </Tooltip>
        </Col>
      </Grid>
    </Grid.Container>
  </Container>
);

export default Jumbotron;
