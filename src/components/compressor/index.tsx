/* eslint-disable no-console */
import axios from 'axios';
import Script from 'next/script';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Função para converter o timer no formato HH:mm:ss
const formatTime = (timer: number): string => {
  const date = new Date(timer * 1000);
  return date.toISOString().substr(11, 8); // Formato HH:mm:ss
};

// Função para converter o timer em uma frase por extenso
const formatTimeVerbose = (timer: number): string => {
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const remainingSeconds = timer % 60;

  const hoursText = hours.toString().padStart(2, '0');
  const minutesText = minutes.toString().padStart(2, '0');
  const secondsText = remainingSeconds.toString().padStart(2, '0');

  return `${hoursText} hora(s), ${minutesText} minuto(s) e ${secondsText} segundo(s)`;
};

// Breve teste para verificar se o compressor está ligado ou desligado
const formatStatus = (status: boolean): string => (status ? 'Ligado' : 'Desligado');

const CompressorPage = () => {
  const [TimerAtual, setTimer] = useState('');
  const [timerExtenso, setTimerExt] = useState('');
  const [statusAtual, setStatus] = useState('');

  useEffect(() => {
    // Define um intervalo para recarregar a página a cada 30 segundos
    const interval = setInterval(() => {
      window.location.reload();
    }, 31000); // 31 segundos em milissegundos

    // Limpa o intervalo quando o componente é desmontado
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.NEXT_PUBLIC_AWS_URL_COMPRESSOR || 'https://7glsnn66sa.execute-api.sa-east-1.amazonaws.com/dev/compressores';

      try {
        const response = await axios.get(url);
        const { timer, status } = response.data;

        const dataformatted = formatTime(timer);
        const TimerExtenso = formatTimeVerbose(timer);
        const ResultStatus = formatStatus(status);

        // Envio de dados
        setTimer(dataformatted);
        setTimerExt(TimerExtenso);
        setStatus(ResultStatus);
      } catch (error) {
        console.error('Erro ao buscar dados da API AWS:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Atualiza a cada 30 segundos

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Script
        src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js'
        integrity='sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r'
        crossOrigin='anonymous'
      />
      <Script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js'
        integrity='sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS'
        crossOrigin='anonymous'
      />
      <section className='sliderT pt-100 pb-50 wow'>
        <div className='container'>
          <div className='col-12'>
            <div className='row gap-100'>
              <div className='col-lg-6 align-items-center text-center'>
                <Image src='/images/Zeta-Logo.png' className='img-fluid' alt='logo' width={350} height={300} />
              </div>
              <div className='col-lg-6 align-items-center text-center'>
                <Image src='/images/analise.svg' className='img-fluid' alt='logo' width={400} height={300} />
              </div>
            </div>
          </div>
          <div className='row gap-100 align-items-center'>
            <div className='col-lg-6'>
              <div className='services-content-three'>
                <div className='section-title mb-20'>
                  <span className='sub-title BordComp mb-25 text-white'>Zeta - Tecnologia e Inovação</span>
                  <h1 className='text-white'>
                    Os melhores serviços de TI para o crescimento de seus negócios.
                  </h1>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='coix text-center'>
                <div className='wow bounceInLeft resp' data-wow-duration='1s'>
                  <h3>O compressor está ligado por:</h3>
                  <h4>{TimerAtual}</h4>
                  <h5>{timerExtenso}</h5>
                </div>
                <div className='resp'>
                  <h3>Último status:</h3>
                  <h4>{statusAtual}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompressorPage;
