import React from 'react';
import { Grid, Container } from '@nextui-org/react';
import type { NextPage } from 'next';
<<<<<<< Updated upstream
import InfoCard from './infoCard';
=======
import CardWeb from './CardControll/CardWeb';
import CardIot from './CardControll/CardIot';
import CardTeste from './CardControll/CardEmbarcados';
>>>>>>> Stashed changes

const CardPage: NextPage = () => (

  <Container>
    <Grid.Container
      gap={2}
    >

      <Grid
        xs={12}
        sm={4}
      >
        <CardIot />
      </Grid>

      <Grid
        xs={12}
        sm={4}
      >
        <CardTeste />
      </Grid>

      <Grid
        xs={12}
        sm={4}
      >
<<<<<<< Updated upstream
        <InfoCard
          title='Compressor Inteligente'
          imageURL='https://littlevisuals.co/images/tail.jpg'
        />
=======
        <CardWeb />
>>>>>>> Stashed changes
      </Grid>
    </Grid.Container>
  </Container>
);

export default CardPage;
