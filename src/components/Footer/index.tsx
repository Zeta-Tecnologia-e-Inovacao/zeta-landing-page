import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import * as S from './styles';

const Footer: NextPage = () => (

  <S.Footer>
    <footer className='main-footer bgc-gray footer-white rel z-1'>
      <div className='footer-cta-comp'>
        <div className='container'>
          <div className='footer-banner-inner bgs-cover image'>
            <div className='section-title wow fadeInLeft delay-0-2s'>
              <span className='title-footer'>O que você está esperando?</span>
              <h3 className='sub-title-footer'>Entre em contato conosco!</h3>
            </div>
            <a href='#contact' className='button-footer'>
              Saiba mais
            </a>
            <div className='hotline'>
              <div className='content'>
                <i className='bi bi-check2-circle'><a className='text-phone-two' href='callto:+55(12)99606-2530'>+55(12) 99606-2530</a></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row medium-gap '>
          <div className='col-xl-3 col-sm-6'>
            <div className='footer-widget widget_about'>
              <div className='footer-logo mb-30'>
                <a href='index'><Image src='/images/Zeta-Logo.png' alt='Logo' width={140} height={40} /></a>
              </div>
              <p>
                Estamos comprometidos em oferecer soluções que possam fazer a diferença na sua
                vida pessoal ou profissional.
              </p>
            </div>
          </div>
          <div className='col-xl-3 col-sm-6 order-xl-2'>
            <div className='footer-widget widget_newsletter'>
              <h4 className='footer-title'>Nossa localização</h4>
              <p>
                <i className='bi bi-geo-alt-fill' />
                Brazil - São Paulo
              </p>
              <p>
                <i className='bi bi-geo-alt-fill' />
                Parque Tecnológico - Nexus
              </p>
              <h5>Redes Sociais</h5>
              <div className='social-style-one'>
                <a href='https://www.facebook.com/'>
                  <i className='bi bi-facebook' />
                </a>
                <a href='https://www.instagram.com/'>
                  <i className='bi bi-instagram' />
                </a>
                <a href='https://www.linkedin.com/'>
                  <i className='bi bi-linkedin' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='row'>
              <div className='col-md-6 col-6 col-small'>
                <div className='footer-widget widget_nav_menu'>
                  <h4 className='footer-title'>Links</h4>
                  <ul className='list-style-two'>
                    <li>
                      <i className='bi bi-arrow-right-circle' />
                      <Link href='/'> Home</Link>
                    </li>
                    <li>
                      <i className='bi bi-arrow-right-circle' />
                      <a href='#about'> Sobre nós</a>
                    </li>

                    <li>
                      <i className='bi bi-arrow-right-circle' />
                      <a href='#services'> Serviços</a>
                    </li>
                    <li>
                      <i className='bi bi-arrow-right-circle' />
                      <a href='#parceiros'> Parcerias</a>
                    </li>
                    <li>
                      <i className='bi bi-arrow-right-circle' />
                      <a href='#contact'> Nosso contato</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-6 col-6 col-small'>
                <div className='footer-widget widget_nav_menu wow fadeInUp delay-0-4s'>
                  <h4 className='footer-title'>Serviços</h4>
                  <ul className='list-style-two'>

                    <li>
                      <i className='bi bi-arrow-right-circle' />
                      <a href='#services'> Relé Bimanual</a>
                    </li>
                    <li>
                      <i className='bi bi-arrow-right-circle' />
                      <a href='#services'> Desenvolvimento Web</a>
                    </li>
                    <li>
                      <i className='bi bi-arrow-right-circle' />
                      <a href='#services'> Sistemas embarcados e IOT</a>
                    </li>
                    <li>
                      <i className='bi bi-arrow-right-circle' />
                      <a href='#services'> Cloud Computing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom bgc-black mt-20 pt-20'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <div className='copyright-text text-lg-center'>
                <p>©2023 Zeta | Tecnologia e Informação.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-shapes'>
        <Image className='shape two' src='/images/footer/footer-bg-shape.png' alt='Shape' width={530} height={433} />
      </div>
    </footer>
  </S.Footer>

);

export default Footer;
