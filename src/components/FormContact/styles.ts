import styled from 'styled-components';

export const Form = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');

/*******************************************************/
/****************** ## Contact Forms ******************/
/*******************************************************/
.form-style-one .form-group {
  margin-bottom: 25px; }

.form-style-one .form-control {
  font-size: 18px;
  font-weight: 500;
  border-radius: 0;
  padding: 10px 0 15px;
  border-width: 0 0 1px; }
  .form-style-one .form-control:focus {
    border-color: var(--heading-color); }

.form-style-two .form-group {
  margin-bottom: 30px; }

.form-style-two .form-control {
  border: none;
  font-size: 18px;
  border-radius: 0;
  font-weight: 500; }
  @media only screen and (min-width: 576px) {
    .form-style-two .form-control {
      padding: 22px 35px; } }

.contact-form {
  -webkit-box-shadow: 10px 0 60px rgba(102, 83, 232, 0.1);
  box-shadow: 10px 0 60px rgba(102, 83, 232, 0.1); }
  @media only screen and (max-width: 479px) {
    .contact-form {
      padding-left: 25px;
      padding-right: 25px; } }

.contact-info-part {
  max-width: 415px;
  padding: 40px 60px;
  background: rgba(103, 77, 243, 0.07); }
  @media only screen and (max-width: 479px) {
    .contact-info-part {
      padding-left: 25px;
      padding-right: 25px; } }

.contact-info-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; }
  .contact-info-item .icon {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    color: white;
    font-size: 22px;
    margin-right: 20px;
    width: 50px;
    height: 50px;
    background: var(--secondary-color);
    line-height: 50px;
    border-radius: 50%;
    text-align: center; }
  .contact-info-item h5 {
    margin-bottom: 0; }
    @media only screen and (max-width: 375px) {
      .contact-info-item h5 {
        font-size: 16px; } }
  .contact-info-item:not(:last-child) {
    margin-bottom: 20px; }

/* Contact Info Box */
.contact-info-box {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  background: white;
  margin-bottom: 30px;
  padding: 50px 40px 45px;
  border: 1px solid var(--border-color); }
  @media only screen and (min-width: 376px) {
    .contact-info-box {
      font-size: 18px; } }
  .contact-info-box .icon {
    font-size: 55px;
    margin-bottom: 30px;
    color: var(--secondary-color); }
    @media only screen and (max-width: 375px) {
      .contact-info-box .icon {
        font-size: 40px; } }
  .contact-info-box h4 {
    margin-bottom: 15px; }
    @media only screen and (min-width: 376px) {
      .contact-info-box h4 {
        font-size: 24px; } }
  .contact-info-box > a,
  .contact-info-box > span {
    display: inline-block; }
  .contact-info-box > b {
    font-weight: 500;
    color: var(--secondary-color); }
  .contact-info-box:hover {
    border-color: white;
    -webkit-box-shadow: 3px 0 60px rgba(103, 77, 243, 0.2);
    box-shadow: 3px 0 60px rgba(103, 77, 243, 0.2); }

/* Location Map */
.our-location iframe {
  height: 750px; }
  @media only screen and (max-width: 1399px) {
    .our-location iframe {
      height: 600px; } }
  @media only screen and (max-width: 991px) {
    .our-location iframe {
      height: 500px; } }
  @media only screen and (max-width: 575px) {
    .our-location iframe {
      height: 400px; } }

/* Contact Page Form */
.contact-form-wrap {
  margin-top: -165px;
  padding: 130px 110px; }
  @media only screen and (max-width: 991px) {
    .contact-form-wrap {
      margin-top: -100px;
      padding: 100px 50px; } }
  @media only screen and (max-width: 479px) {
    .contact-form-wrap {
      padding: 60px 25px; } }

/* Contact Form Validation */
.has-error .with-errors {
  color: red;
  margin-top: 5px;
  margin-bottom: -15px; }

#msgSubmit {
  margin-bottom: 0;
  margin-top: 10px; }

/*******************************************************/
/******************* ## FAQs Area *********************/
/*******************************************************/
.accordion-item {
  z-index: 1;
  border: none;
  padding: 20px 25px;
  position: relative;
  border-radius: 0 !important;
  -webkit-box-shadow: 10px 0 60px rgba(102, 83, 232, 0.15);
  box-shadow: 10px 0 60px rgba(102, 83, 232, 0.15); }
  @media only screen and (max-width: 375px) {
    .accordion-item {
      padding-left: 20px;
      padding-right: 20px; } }
  .accordion-item:not(:last-child) {
    margin-bottom: 15px; }
  .accordion-item .accordion-button {
    padding: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-weight: 700;
    position: inherit;
    color: var(--heading-color);
    background: transparent; }
    @media only screen and (min-width: 376px) {
      .accordion-item .accordion-button {
        font-size: 18px; } }
    .accordion-item .accordion-button:focus {
      -webkit-box-shadow: none;
      box-shadow: none; }
  .accordion-item .accordion-body {
    padding: 0; }
    .accordion-item .accordion-body p {
      margin: 10px 0 0; }

.style-two .accordion-item {
  z-index: 1;
  -webkit-box-shadow: none;
  box-shadow: none;
  position: relative;
  background: transparent; }

.style-two .accordion-button:after {
  content: '\f06e';
  font-weight: 400;
  background-image: none;
  color: var(--secondary-color);
  font-family: 'Font Awesome 5 Pro'; }

.style-two .accordion-button:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  border: 1px solid transparent;
  -webkit-box-shadow: 3px 0 60px rgba(103, 77, 243, 0.1);
  box-shadow: 3px 0 60px rgba(103, 77, 243, 0.1); }

.style-two .accordion-button.collapsed:before {
  border-color: var(--border-color); }

.style-two .accordion-button.collapsed:after {
  content: '\f070';
  color: var(--heading-color); }

.style-three .accordion-button {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start; }
  @media only screen and (max-width: 767px) {
    .style-three .accordion-button {
      font-size: 16px; } }
  .style-three .accordion-button:after {
    content: '\f06e';
    font-weight: 400;
    background-image: none;
    color: var(--secondary-color);
    font-family: 'Font Awesome 5 Pro'; }
  .style-three .accordion-button.collapsed:after {
    content: '\f070';
    color: var(--heading-color); }

/* Team Page */
.faq-images {
  position: relative;
  padding-left: 100px; }
  @media only screen and (max-width: 479px) {
    .faq-images {
      padding-left: 50px; } }
  .faq-images .logo {
    position: absolute;
    left: 0;
    top: 50%;
    padding: 40px 45px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: var(--secondary-color);
    -webkit-clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
    clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%); }


.contact-form-area-three{
  background-image: url(/images/form/bg-contact.png);
  margin-bottom: 150px;
}

@media only screen and (max-width: 991px){
    .rpb-100, .rpy-100 {
        padding-bottom: 100px;
        padding-top: 100px;
    }
}

.pb-130, .py-130 {
  padding-bottom: 130px;
}

.bgs-cover{
  background-size: cover;
  background-position: center;
}

.gap-100{
  gap: 100px;
}

.row {
    --bs-gutter-x: 30px;
}

@media only screen and (max-width: 479px){
    .contact-form {
        padding-left: 25px;
        padding-right: 25px;
    }
}

.contact-form {
    -webkit-box-shadow: 10px 0 60px rgba(102, 83, 232, 0.1);
    box-shadow: 10px 0 60px rgba(102, 83, 232, 0.1);
}
.delay-0-2s {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
}

@media only screen and (max-width: 991px){
    .rmb-55, .rmy-55 {
        margin-bottom: 55px;
    }
}

/* ========  Animação vir pela esquerda  ========= */

.fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
}

@keyframes fadeInRight{
    0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
}
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
    }
}





/* @media only screen and (min-width: 1200px){

  .container {
      max-width: 1320px;
      padding-left: 15px;
      padding-right: 15px;
  }
} */

@media only screen and (min-width: 1400px){
  .gap-100 {
    --bs-gutter-x: 100px;
}
  .row {
    --bs-gutter-x: 30px;
  }
}


.p-80 {
    padding: 80px;
}

.bg-white {
    background-color: #fff!important;
}

.mb-30, .my-30 {
    margin-bottom: 50px;
}

.mt-30  {
  margin-top: 70px
}
.section-title {
    margin-top: -7px;
    position: relative;
}

.section-title .sub-title {
    font-size: 20px;
    font-weight: 400;
    display: inline-block;
    color: var(--secondary-color);
}
/* ==== Título do formulário ===== */
@media only screen and (max-width: 479px){
    .section-title h2 {
    font-size: 30px;
    line-height: 1.3;
    }
}

@media only screen and (max-width: 767px){
    .section-title h2 {
    font-size: 35px;
    }
}

h2{
    line-height: 1.25;
    font-size: 42px;
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
    color: var(--heading-color);
}

.row {
    --bs-gutter-x: 30px;
}






.mb-10, .my-10 {
    margin-bottom: 10px;
}

.form-style-one .form-group {
    margin-bottom: 20px;
}
.form-group {
    position: relative;
    margin-bottom: 20px;
}
.mb-0 {
    margin-bottom: 0!important;
}


.mt-15, .my-15 {
    margin-top: 15px;
}

h3, .h3 {
    line-height: 1.20;
    font-size: 32px;
}

h2, .h2, .counter-text-wrap .count-text, .pricing-plan-item .price {
    line-height: 1.20;
    font-size: 42px;
}

.heading, .section-title .bg-text, .tab-style-one .nav-link, h1, .h1, h2, .h2, .counter-text-wrap .count-text, .pricing-plan-item .price, h3, .h3, h4, .h4, h5, .h5, h6, .h6, .slider-area-two .slider-bg-text, .why-choose-tab .nav .nav-link, .about-four-content .nav li .nav-link, .about-five-images .experience-years .years, .shop-shorter .filter-part span {
    font-weight: 500;
    color: var(--heading-color);
}

.form-style-one .form-group {
    margin-bottom: 25px;
}
.form-group {
    position: relative;
    margin-bottom: 20px;
}

.form-style-one .form-control {
    font-size: 18px;
    font-weight: 500;
    border-radius: 0;
    padding: 10px 0 15px;
    border-width: 0 0 1px;
}
input, select, textarea, .nice-select, .form-control {
    width: 100%;
    height: auto;
    border-radius: 5px;
    padding: 15px 30px;
    background-color: #fff;
    border: 1px solid var(--border-color);
}

.contact-info-part {
    max-width: 415px;
    padding: 40px 60px;
    background: rgba(70, 100, 250, 0.07);
}

.contact-info-item:not(:last-child) {
    margin-bottom: 20px;
}
.contact-info-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.contact-info-item .icon {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    color: white;
    font-size: 22px;
    margin-right: 20px;
    width: 50px;
    height: 50px;
    background: var(--secondary-color);
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
}

.contact-info-item h5 {
    margin-bottom: 0;
}
h5, .h5 {
    font-size: 18px;
}

      /*======= Input Styles =======*/
input,
select,
textarea,
.nice-select,
.form-control {
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 15px 30px;
  background-color: #fff;
  border: 1px solid var(--border-color); 
}

label {
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--base-color); 
}

input:focus,
button:focus,
.form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-color: #cfdbf1;
}

@media only screen and (max-width: 991px){
  .rpb-100, .rpy-100 {
      padding-bottom: 100px;
  }
}
@media only screen and (max-width: 991px){
  .rpt-100, .rpy-100 {
      padding-top: 100px;
  }
}
.pb-130, .py-130 {
    padding-bottom: 130px;
}
.pt-130, .py-130 {
    padding-top: 130px;
}
.bgs-cover {
    background-size: cover;
    background-position: center;
}

`;

export default Form;
