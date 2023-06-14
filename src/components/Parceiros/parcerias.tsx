import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import * as S from './styles';

const Parcerias: NextPage = () => (
  <S.CssParceria>
    <section className='container py-5' id='parcerias'>
      <div className='section-title text-center mb-40 rmb-50'>
        <span className='sub-title mb-15 Bord'>Parcerias</span>
        <h2>Apoiadores</h2>
      </div>
      <div className='feature-area-two rel z-1'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item'>
                <div className='icon'>
                  <Image src='/images/parceiros/Fapesp.png' className='img-fluid card-img-top' alt='' width={450} height={320} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item'>
                <div className='icon'>
                  <Image src='/images/parceiros/finep.png' className='img-fluid card-img-top' alt='' width={450} height={320} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item'>
                <div className='icon'>
                  <Image src='/images/parceiros/centelha.png' className='img-fluid card-img-top' alt='' width={450} height={320} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item'>
                <div className='icon'>
                  <Image src='/images/parceiros/sebrae.png' className='img-fluid  card-img-top' alt='' width={450} height={320} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item'>
                <div className='icon'>
                  <Image src='/images/parceiros/PqTec.png' className='img-fluid  card-img-top' alt='' width={450} height={320} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item'>
                <div className='icon'>
                  <Image src='/images/parceiros/nexus.png' className='img-fluid  card-img-top' alt='' width={450} height={320} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item'>
                <div className='icon'>
                  <Image src='/images/parceiros/MCTI.png' className='img-fluid card-img-top' alt='' width={450} height={320} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item'>
                <div className='icon'>
                  <Image src='/images/parceiros/Atomica.png' className='img-fluid card-img-top' alt='' width={450} height={320} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item wow fadeInUp delay-002s animated animated'>
                <div className='icon'>
                  <Image src='/images/parceiros/Unesp.png' className='img-fluid card-img-top' alt='' width={450} height={320} />
                </div>
              </div>
            </div>

            <div className='col-xl-2 col-lg-3 col-md-4 col-6 col-small'>
              <div className='feature-item wow fadeInUp delay-002s animated animated'>
                <div className='icon'>
                  <Image src='/images/parceiros/IdeiaZ.png' className='img-fluid card-img-top' alt='' width={450} height={320} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </S.CssParceria>
);

export default Parcerias;
