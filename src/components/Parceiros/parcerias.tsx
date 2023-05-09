import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import * as S from './styles';

const Parcerias: NextPage = () => (
  <S.CssParceria>
    <div className='container py-5' id='parcerias'>
      <div className='section-title text-center mb-40 rmb-50'>
        <span className='sub-title mb-15'>Parcerias</span>
        <h2>Companhias </h2>
      </div>
      <section className='feature-area-two rel z-1'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item wow fadeInUp delay-002s animated animated'>
                <div className='icon'>
                  <Image src='/images/parceiros/fapesp.jpg' className='img-fluid card-img-top' alt='' width={500} height={500} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item delay-002s'>
                <div className='icon'>
                  <Image src='/images/parceiros/finep.png' className='img-fluid card-img-top' alt='' id='logo' width={500} height={500} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item delay-002s'>
                <div className='icon'>
                  <Image src='/images/parceiros/centelha.png' className='img-fluid card-img-top' alt='' width={500} height={500} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item delay-002s'>
                <div className='icon'>
                  <Image src='/images/parceiros/sebrae.png' className='img-fluid' alt='' width={500} height={500} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item delay-002s'>
                <div className='icon'>
                  <Image src='/images/parceiros/pqtec2.png' className='img-fluid  card-img-top' alt='' width={500} height={500} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item delay-002s'>
                <div className='icon'>
                  <Image src='/images/parceiros/nexus.png' className='img-fluid  card-img-top' alt='' width={500} height={500} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item wow fadeInUp delay-002s animated animated'>
                <div className='icon'>
                  <Image src='/images/parceiros/mcti.jpg' className='img-fluid card-img-top' alt='' width={500} height={500} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item wow fadeInUp delay-002s animated animated'>
                <div className='icon'>
                  <Image src='/images/parceiros/unesp.jpg' className='img-fluid card-img-top' alt='' width={500} height={500} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </S.CssParceria>
);

export default Parcerias;
