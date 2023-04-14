import React from 'react';
import { Grid, Container } from '@nextui-org/react';
import type { NextPage } from 'next';
import InfoCard from './infoCard';
import CardDev from './CardDev';

const CardPage: NextPage = () => (

  <Container>
    <Grid.Container
      gap={2}
    >
      <Grid
        xs={12}
        sm={4}
      >
        <InfoCard
          title='Iot'
          imageURL='https://littlevisuals.co/images/red_dawn.jpg'
        />
      </Grid>

      <Grid
        xs={12}
        sm={4}
      >
        <InfoCard
          title='Sistemas'
          imageURL='https://littlevisuals.co/images/sunset.jpg'
        />
      </Grid>

      <Grid
        xs={12}
        sm={4}
      >
        <InfoCard
          title='Compressor Inteligente'
          imageURL='https://littlevisuals.co/images/tail.jpg'
        />
      </Grid>
    </Grid.Container>

    <Grid.Container gap={2} justify='center'>
      <Grid xs={12} sm={4}>
        <CardDev />
      </Grid>
    </Grid.Container>
  </Container>
);

export default CardPage;
