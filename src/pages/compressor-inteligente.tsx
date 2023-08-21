import axios from 'axios';
import * as S from '@/components/compressor/styles';
import { NextPage, GetStaticProps } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import {
  AwsJsonProps, AwsJsonData,
  formatTime, formatTimeVerbose,
  formatStatus,
} from '@/components/compressor/formats';

export const getStaticProps: GetStaticProps<AwsJsonProps> = async () => {
  const url = process.env.NEXT_PUBLIC_AWS_URL_COMPRESSOR ?? '';
  // Fazer uma chamada à API da AWS
  const response = await axios.get<AwsJsonData>(url);

  // Extrair os dados JSON da resposta
  const { timer, status } = response.data;

  const dataformatted = formatTime(timer);
  const TimerExtenso = formatTimeVerbose(timer);
  const ResultStatus = formatStatus(status);

  return {
    // Retornando o timer, o status e o texto por extenso do timer
    props: { timer: dataformatted, status: ResultStatus, timerExt: TimerExtenso },
  };
};

// eslint-disable-next-line react/prop-types
const PageCompressor: NextPage<AwsJsonProps> = ({ timer, status, timerExt }) => (

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

export default PageCompressor;
