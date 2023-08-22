/* eslint-disable no-console */
import axios from 'axios';
import * as S from '@/components/compressor/styles';
import Script from 'next/script';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface AwsJsonData {
  timer: number;
  status: boolean;
}

interface AwsJsonProps {
  timer: string;
  status: string;
  timerExt: string;
}

const formatTime = (timer: number): string => {
  const date = new Date(timer * 1000);
  return date.toISOString().substr(11, 8); // Formato HH:mm:ss
};

const formatTimeVerbose = (timer: number): string => {
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const remainingSeconds = timer % 60;

  const hoursText = hours.toString().padStart(2, '0');
  const minutesText = minutes.toString().padStart(2, '0');
  const secondsText = remainingSeconds.toString().padStart(2, '0');

  return `${hoursText} hora(s), ${minutesText} minuto(s) e ${secondsText} segundo(s)`;
};

const formatStatus = (status: boolean): string => (status ? 'Ligado' : 'Desligado');

export async function getStaticProps() {
  const url = process.env.NEXT_PUBLIC_AWS_URL_COMPRESSOR || '';
  try {
    const response = await axios.get<AwsJsonData>(url);
    const { timer, status } = response.data;

    const dataformatted = formatTime(timer);
    const TimerExtenso = formatTimeVerbose(timer);
    const ResultStatus = formatStatus(status);

    return {
      props: { timer: dataformatted, status: ResultStatus, timerExt: TimerExtenso },
      revalidate: 25,
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API AWS:', error);
    return {
      props: { timer: '', status: '', timerExt: '' },
    };
  }
}

// eslint-disable-next-line react/prop-types
const CompressorPage: React.FC<AwsJsonProps> = ({ timer, status, timerExt }) => {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.reload(); // Recarrega a página
    }, 10000); // 10000 milissegundos = 10 segundos

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    };
  }, [router]);
  return (
    <S.Compressor>
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
                <Image src='/images/compressor/analise.svg' className='img-fluid' alt='logo' width={400} height={300} />
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
                  <h4>{timer}</h4>
                  <h5>{timerExt}</h5>
                </div>
                <div className='resp'>
                  <h3>Último status:</h3>
                  <h4>{status}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </S.Compressor>
  );
};

export default CompressorPage;
