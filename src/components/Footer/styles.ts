import styled from 'styled-components';

export const Footer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');


/******************* ## Banner-Footer *******************/
/*******************************************************/
@media only screen and (min-width: 1200px) {
  .footer-cta-comp .container {
    max-width: 850px; 
  } 
}

.image{
  background-image: url(/images/footer/footer-bg.png);
}

.footer-banner-inner .title-footer{
  font-size: 20px;
  color: white;
}

.footer-banner-inner .sub-title-footer{
  color: black;
  transition: 0.5s;
  text-decoration: none;
  font-size: 28px;
}

.footer-banner-inner .text-phone{
  text-decoration: none;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-banner-inner .text-phone-two{
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

.footer-banner-inner {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 60px 80px 35px;
  -webkit-transform: translateY(-80px);
  -ms-transform: translateY(-80px);
  transform: translateY(-80px);
  z-index: 1;
  position: relative; 
}

.footer-banner-inner::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 0.9;
  background-color: var(--secondary-color); 
}

@media only screen and (max-width: 767px) {
  .footer-banner-inner {
    padding-left: 35px;
    padding-right: 35px; 
  } 
}

@media only screen and (max-width: 375px) {
  .footer-banner-inner {
    padding-left: 25px;
    padding-right: 25px; 
  } 
}

.footer-banner-inner .section-title {
  margin-bottom: 25px;
  margin-right: auto; 
}

.footer-banner-inner .section-title .sub-title {
  margin-bottom: 8px;
  color: var(--heading-color); 
}

      @media only screen and (max-width: 375px) {
        .footer-banner-inner .section-title .sub-title {
          font-size: 18px; 
        } 
      }

    .footer-banner-inner .section-title h2 {
      margin-bottom: 0;
      letter-spacing: -1px; 
    }

  .footer-banner-inner .theme-btn {
    margin-bottom: 25px;
    margin-right: 30px; 
  }

.footer-banner-inner .hotline {
  margin-bottom: 25px; 
}
.footer-banner-inner .hotline > i {
  background: black;
  border-color: white; 
}
.footer-banner-inner .hotline .content span, .footer-banner-inner .hotline .content a {
  color: var(--heading-color); 
}

.footer-logo {
  padding: 25px 30px;
  display: inline-block;
  -webkit-clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
  clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%); 
}

.footer-white {
  color: #b6bace; 
}

.footer-white a:not(:hover) {
  color: #b6bace; 
}

.footer-white .read-more {
  color: var(--primary-color); 
}

.footer-white h5,
.footer-white .footer-title{
  color: white; 
}

.footer-white .widget_newsletter form {
  border-color: rgba(255, 255, 255, 0.3); 
}

.footer-widget {
  margin-bottom: 50px; 
}

.footer-title {
  margin-bottom: 28px; 
}

@media only screen and (min-width: 376px) {
  .footer-title {
    font-size: 24px; 
  } 
}

.widget_newsletter .social-style-one a {
  margin-right: 15px; }

/* Footer Bottom */
.footer-bottom-menu ul {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  display: inline-flex;
  margin-right: -10px; 
}

.footer-bottom-menu ul li {
  margin: 0 10px 5px 0; 
}

.footer-bottom-menu ul li a {
  color: var(--heading-color); 
}

.footer-bottom-menu ul li a:hover {
  text-decoration: underline; }
  .footer-bottom-menu ul li:not(:last-child):after {
    content: '|';
    margin-left: 10px; }

.footer-shapes .shape {
  position: absolute;
  z-index: -2;
  max-width: 50%; }
  .footer-shapes .shape.one {
    left: 0;
    bottom: 0; }
  .footer-shapes .shape.two {
    right: 0;
    bottom: 0; }
  .footer-shapes .shape.three {
    right: 0;
    bottom: 10%;
    z-index: -1; }

    .show_app_slider .slick-dots{
      margin-top: 5px;
      justify-content: center;
    }

.bi-check2-circle{
  color: white;
  font-size: 18px;
}

    /* Botão */
.button-footer {
  background-color: black;
  border: 0;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
  font-size: 18px;
  font-weight: 600;
  outline: 0;
  padding: 16px 21px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-footer:before {
  background-color: initial;
  background-image: linear-gradient(black 0, rgba(255, 255, 255, 0) 100%);
  border-radius: 125px;
  content: "";
  height: 50%;
  left: 4%;
  opacity: .5;
  position: absolute;
  top: 0;
  transition: all .3s;
  width: 92%;
}

.button-footer:hover {
  box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .button-footer {
    padding: 16px 48px;
  }
}

a{
  text-decoration: none;
}

.list-style-two i{
  color: white;
}

`;

export default Footer;
