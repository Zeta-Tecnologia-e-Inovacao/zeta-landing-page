import React from 'react';
import type { NextPage } from 'next';
import {
  Card, Grid, Row, Text,
} from '@nextui-org/react';

const Services: NextPage = () => {
  const list = [
    {
      title: 'Desenvolvimento de Softwares',
      img: '/images/fruit-1.jpeg',
    },
    {
      title: 'Cloud Computing',
      img: '/images/fruit-2.jpeg',
    },
    {
      title: 'IoT',
      img: '/images/fruit-3.jpeg',
    },
    {
      title: 'Análise de Dados',
      img: '/images/fruit-4.jpeg',
    },
    {
      title: 'Impressora 3D',
      img: '/images/fruit-5.jpeg',
    },
  ];

  return (
    <Grid.Container gap={2} justify='center'>
      {list.map((item) => (
        <Grid xs={6} sm={3} key={item.title}>
          <Card isHoverable variant='shadow'>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={`https://nextui.org${item.img}`}
                objectFit='cover'
                width='100%'
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify='center' align='center'>
                <Text css={{ color: '$accents7', fontWeight: '$semibold', fontSize: '$sm' }}>
                  {item.title}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Services;
