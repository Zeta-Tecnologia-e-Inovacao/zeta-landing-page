import styled from 'styled-components';

export const Form = styled.div`

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

`;

export default Form;
