import { AwsClient } from 'aws4fetch';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styles';

const Form = () => {
  const [output, setOutput] = useState('');
  const { register, handleSubmit } = useForm();
  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }
  const dados = output;
  function FormRequisicao() {
    async function fetchData() {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: dados,
      };
      const aws = new AwsClient({
        accessKeyId: 'AKIA36OS22WVCS3CK5GZ',
        secretAccessKey: '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',
        service: 'execute-api',
        region: 'sa-east-1',
      });
      const url = 'https://5728p2qs9c.execute-api.sa-east-1.amazonaws.com/dev/leads';
      await aws.fetch(url, options);
    }
    fetchData();
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
                <form onSubmit={handleSubmit(createUser)} action='#teste' name='contact-form' className='form-style-one' method='post'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='name'
                          className='form-control'
                          placeholder='Nome completo'
                          {...register('name')}
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
                          {...register('whatsapp')}
                          required
                        />
                      </div>
                    </div>

                    <div className='col-xl-12'>
                      <div className='form-group mb-0'>
                        <button type='submit' onClick={FormRequisicao} className='theme-btn style-two-mt-15 w-100'>Enviar</button>
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
    </S.Form>
  );
};

export default Form;
