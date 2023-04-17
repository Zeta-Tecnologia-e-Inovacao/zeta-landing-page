import React from 'react';
import { Grid, Container } from '@nextui-org/react';
import type { NextPage } from 'next';
import CardIot from './CardControll/CardIot';
import CardEmbarcados from './CardControll/CardEmbarcados';
import CardWeb from './CardControll/CardWeb';

const CardPage: NextPage = () => (
  <Container>
    <Grid.Container gap={2}>
      <Grid xs={12} sm={4}>
        <CardEmbarcados />
      </Grid>
      <Grid xs={12} sm={4}>
        <CardIot />
      </Grid>
      <Grid xs={12} sm={4}>
        <CardWeb />
      </Grid>
    </Grid.Container>
  </Container>
);

export default CardPage;
