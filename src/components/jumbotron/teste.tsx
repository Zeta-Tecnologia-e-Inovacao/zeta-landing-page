import React from 'react';
import type { NextPage } from 'next';
import { Tooltip, Button } from '@nextui-org/react';
import * as S from './styles';

const JumbotronTeste: NextPage = () => (
  <S.JumbotronConfig>
    <div className='container mt-3'>
      <div className='mt-4 p-5 ground text-white rounded'>
        <h1>Impulsione o potencial do seu negócio com nossas soluções TI de última geração.</h1>
        <p>
          Nós fornecemos soluções personalizadas que ajudam sua startup a crescer
          e se destacar no mercado digital.
        </p>

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
      </div>
    </div>
  </S.JumbotronConfig>
);

export default JumbotronTeste;
