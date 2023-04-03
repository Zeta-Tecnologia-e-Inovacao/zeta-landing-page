import React from 'react';
import type { NextPage } from 'next';
import {
  Button, Col, Grid, Text,
} from '@nextui-org/react';

const Jumbotron: NextPage = () => (
  <Grid.Container justify='flex-start' css={{ height: '500px', backgroundImage: 'url(/images/sunset.jpg)' }}>
    <Grid xs={12} sm={6} alignItems='center'>
      <Col css={{ width: '100%' }}>
        <Text h1 weight='extrabold' color='white'>
          Soluções de Tecnologia e Inovação
        </Text>
        <Button light bordered auto css={{ width: '30%', marginTop: '20px' }}>Saiba mais</Button>
      </Col>
    </Grid>
  </Grid.Container>
);

export default Jumbotron;
