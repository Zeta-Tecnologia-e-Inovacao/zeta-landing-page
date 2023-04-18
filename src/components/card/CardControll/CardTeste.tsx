import React from 'react';
import {
  Card, Col, Row, Button, Text, Tooltip,
} from '@nextui-org/react';
import { NextPage } from 'next';

const CardTeste: NextPage = () => (

  <Card css={{ w: '100%', h: '400px' }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight='bold' transform='uppercase' color='#ffffffAA'>
          Inovadores
        </Text>
        <Text h3 color='black'>
          Sistemas Embarcados
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src='https://nextui.org/images/card-example-6.jpeg'
        width='100%'
        height='100%'
        objectFit='cover'
        alt='Card example background'
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: 'absolute',
        bgBlur: '#ffffff66',
        borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color='#000' size={12}>
            Available soon.
          </Text>
          <Text color='#000' size={12}>
            Get notified.
          </Text>
        </Col>
        <Col>
          <Row justify='flex-end'>
            <Tooltip content='Sistemas inovadores ao seu dispor!' rounded placement='bottomStart' color='primary'>
              <Button flat auto rounded shadow color='secondary'>
                <Text
                  css={{ color: 'inherit' }}
                  size={12}
                  weight='bold'
                  transform='uppercase'
                >
                  Saber mais
                </Text>
              </Button>
            </Tooltip>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default CardTeste;
