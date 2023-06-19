import styled from 'styled-components';

export const Form = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Roboto:wght@300;400;500;700&display=swap');

/****************** ## Contact Forms ******************/
/*******************************************************/

.sub-title{
  color: var(--background-color);
  font-size: 24px;
}

.section-title h3{
  font-size: 25px;
}

h5{
  color: var(--background-color);
  font-size: 18px;
}

.form-style-one .form-group {
  margin-bottom: 25px; 
}

.form-style-one .form-control {
  font-size: 18px;
  font-weight: 500;
  border-radius: 0;
  padding: 10px 0 15px;
  border-width: 0 0 1px; 
}

  .form-style-one .form-control:focus {
    border-color: var(--heading-color); 
  }

.form-style-two .form-group {
  margin-bottom: 30px; 
}

.form-style-two .form-control {
  border: none;
  font-size: 18px;
  border-radius: 0;
  font-weight: 500; 
}
  @media only screen and (min-width: 576px) {
    .form-style-two .form-control {
      padding: 22px 35px; 
    } 
  }

  .content h5{
    font-size: 16px;
  }

  .contact-info-item .icon {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    color: black;
    font-size: 22px;
    margin-right: 20px;
    width: 50px;
    height: 50px;
    background: var(--background-color);
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
}


.contact-form {
  -webkit-box-shadow: 10px 0 60px rgba(102, 83, 232, 0.1);
  box-shadow: 10px 0 60px rgba(102, 83, 232, 0.1); 
}

  @media only screen and (max-width: 479px) {
    .contact-form {
      padding-left: 25px;
      padding-right: 25px; 
    } 
  }

.contact-info-part {
  max-width: 415px;
  padding: 38px 50px;
  background-color: #F5F5F5;
}

  @media only screen and (max-width: 479px) {
    .contact-info-part {
      padding-left: 25px;
      padding-right: 25px; 
    } 
  }

.contact-info-item {
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; 
}

.contact-info-item h5 {
  margin-bottom: 0; 
}

@media only screen and (max-width: 375px) {
  .contact-info-item h5 {
    font-size: 16px; 
  } 
}

.contact-info-item:not(:last-child) {
  margin-bottom: 20px; 
}

/* Contact Info Box */
.contact-info-box {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  background: white;
  margin-bottom: 30px;
  padding: 50px 40px 45px;
  border: 1px solid var(--border-color); 
}

  @media only screen and (min-width: 376px) {
    .contact-info-box {
      font-size: 18px; 
    } 
  }

    @media only screen and (max-width: 375px) {
      .contact-info-box .icon {
        font-size: 40px; 
      } 
    }

  .contact-info-box h4 {
    margin-bottom: 15px; 
  }

    @media only screen and (min-width: 376px) {
      .contact-info-box h4 {
        font-size: 24px; 
      } 
    }

  .contact-info-box > a,
  .contact-info-box > span {
    display: inline-block; 
  }

  .contact-info-box > b {
    font-weight: 500;
    color: var(--secondary-color); 
  }

  .contact-info-box:hover {
    border-color: white;
    -webkit-box-shadow: 3px 0 60px rgba(103, 77, 243, 0.2);
    box-shadow: 3px 0 60px rgba(103, 77, 243, 0.2); 
  }


/* Contact Page Form */
.contact-form-wrap {
  margin-top: -165px;
  padding: 130px 110px; 
}

  @media only screen and (max-width: 991px) {
    .contact-form-wrap {
      margin-top: -100px;
      padding: 100px 50px; 
    } 
  }
  @media only screen and (max-width: 479px) {
    .contact-form-wrap {
      padding: 60px 25px; 
    } 
  }


.contact-image{
  background-image: url(/images/form/bg-form.png);
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

.mb-10, .my-10 {
    margin-bottom: 10px;
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

input, select, textarea, .nice-select, .form-control {
    width: 100%;
    height: auto;
    border-radius: 5px;
    padding: 15px 30px;
    background-color: #fff;
    border: 1px solid var(--border-color);
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



.contact-info-item h5 {
    margin-bottom: 0;
}
h5, .h5 {
    font-size: 18px;
}

p{
  text-align: center;
}

span{
  color: var(--base-color);
}

a{
  text-decoration: none;
}

a:hover{
  color: var(--background-color);
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

/* ==== config dos INPUTS ==== */
textarea:focus, input:focus, select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
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
