import { AwsClient } from 'aws4fetch';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as S from './styles';

const Form = () => {
  const [outputName, setOutputName] = useState('');
  const [outputNumber, setOutputNumber] = useState('');

  const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY ?? '';
  const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_KEY ?? '';
  const url = process.env.NEXT_PUBLIC_AWS_URL ?? '';
  const region = process.env.NEXT_PUBLIC_AWS_REGION ?? '';
  const Origin = process.env.NEXT_PUBLIC_AWS_ORIGIN;

  // -----------------------

  function FormRequisicao() {
    async function fetchData() {
      const options = {
        method: 'POST',
        Origin,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: outputName,
          whatsapp: outputNumber,
        }),
      };
      const aws = new AwsClient({
        accessKeyId,
        secretAccessKey,
        service: 'execute-api',
        region,
      });
      await aws.fetch(url, options);
    }
    fetchData();
    toast.success('Formulário enviado com sucesso!');
  }

  // ==============================

  return (
    <S.Form>
      <section className='contact-form-area-three py-100 rpy-100 bgs-cover' id='contact'>
        <div className='container'>
          <div className='row gap-100 align-items-center'>
            <div className='col-md-6 mt-30 mb-30 '>
              <div className='contact-form bg-white p-80 rmb-55 wow fadeInRight delay-0-2s animated'>
                <div className='section-title mb-30'>
                  <h3>Entre em contato conosco</h3>
                </div>
                <form name='contact-form' className='form-style-one' method='POST'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='name'
                          className='form-control'
                          placeholder='Nome completo'
                          onChange={(e) => setOutputName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='whatsapp'
                          className='form-control'
                          placeholder='Telefone celular'
                          maxLength={11}
                          onChange={(e) => setOutputNumber(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className='col-xl-12'>
                      <div className='form-group mb-0'>
                        <button type='button' onClick={FormRequisicao} className='theme-btn style-two-mt-15 w-100'>Enviar</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='contact-info-wrap'>
                <div className='section-title mb-40'>
                  <span className='sub-title mb-10'>Gostaria de entrar em contato? </span>
                  <h2>Venha revolucionar seus projetos com a Zeta!</h2>
                </div>
                <div className='contact-info-part'>
                  <div className='contact-info-item'>
                    <div className='icon'>
                      <i className='bi bi-map' />
                    </div>
                    <div className='content'>
                      <span>Localização</span>
                      <h5>Parque Tecnológico, São José dos Campos - SP Brasil</h5>
                    </div>
                  </div>
                  <div className='contact-info-item'>
                    <div className='icon'>
                      <i className='bi bi-envelope-at' />
                    </div>
                    <div className='content'>
                      <span>Email</span>
                      <h5><a href='mailto.com'>zeta.technologia@gmail.com</a></h5>
                    </div>
                  </div>
                  <div className='contact-info-item'>
                    <div className='icon'>
                      <i className='bi bi-telephone' />
                    </div>
                    <div className='content'>
                      <span>Contato</span>
                      <h5>+55(12) 99606-2530</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </S.Form>
  );
};

export default Form;
