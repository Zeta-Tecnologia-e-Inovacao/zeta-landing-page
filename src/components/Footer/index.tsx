import { NextPage } from 'next';
import Image from 'next/image';
import * as S from './styles';

const Footer: NextPage = () => (

  <S.Footer>
    <section id='footer'>
      <footer className='container-fluid bg-blue-color'>
        <div className='container'>
          <div className='row'>
            {/* <!-- FOOTER TOP --> */}
            <div className='col-12' id='footer-top'>
              <div className='row justify-content-between'>
                <div className='col-4'>
                  <Image src='/images/Zeta-Logo.png' alt='logo' className='img-fluid' width={150} height={100} />
                </div>
              </div>
            </div>
            {/* <!-- FOOTER DETAILS --> */}
            <div className='col-12' id='footer-details'>
              <div className='row'>
                <div className='col-12 col-md-4' id='news-container'>
                  <h4>Fique por dentro das novidades</h4>
                  <p className='secondary-color'>
                    Estamos comprometidos em oferecer soluções que possam fazer a
                    diferença na sua vida pessoal ou profissional. Nossos produtos/serviços
                    desenvolvidos com qualidade e tecnologia de ponta, para que você possa
                    do melhor que o mercado tem a oferecer.
                  </p>
                </div>
                <div className='col-12 col-md-4' id='contact-container'>
                  <h4>Nossa Localização</h4>
                  {/* ====== UTILIZEI MEIOS DE CONTATO FICTICIOS ==== */}
                  <p className='secondary-color'>Brasil - São Paulo</p>
                  <h4>Nosso Contato</h4>
                  <p className='secondary-color'>+55(12) 99606-2530</p>
                  <p className='secondary-color'>zeta.technologia@gmail.com</p>
                </div>
                <div className='col-12 col-md-4' id='links-container'>
                  <div className='row'>
                    <h4>Você pode buscar por:</h4>
                    <div className='col-6'>
                      <ul className='list-unstyled'>
                        <li><a href='#h' className='secondary-color'>Home</a></li>
                        <li><a href='#soluctions' className='secondary-color'>Soluções</a></li>
                        <li><a href='#parcerias' className='secondary-color'>Parcerias</a></li>
                        <li><a href='#contact' className='secondary-color'>Contato</a></li>
                        <li><a href='#about' className='secondary-color'>Sobre nós</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- FOOTER BOTTOM --> */}
            <div className='col-12' id='footer-bottom'>
              <div className='row justify-content-center text-center'>
                <p className='secondary-color'>&copy;2023 Zeta | Tecnologia & Inovação. All righs reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </S.Footer>

);

export default Footer;
