import styled from 'styled-components';

export const Compressor = styled.div`
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap'); */

h4{
  text-align: center;
}

.sliderT{
  background-color: #2D2C59;
}
  
.coix {
  background-color: white;
  border-radius: 30px;
  margin-top: 60px;
  box-shadow: 30px 20px;
  height: 320px;
  text-align: center;
  align-items: center;
}

.resp{
  padding: 35px 30px;
}

.slider-area {
  z-index: 1;
  position: relative; 
}

.slider-area::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 0.65;
  background-color: var(--heading-color); 
}

  
.slide-content {
  max-width: 500px; 
}

.slide-content h1 {
  line-height: 1;
  font-size: 100px;
  margin-bottom: 60px;
  letter-spacing: -2px; 
}

.slide-content .h2 {
  display: block;
  font-size: 85px;
  font-weight: 300;
  letter-spacing: -3px; 
}

.slide-content .sub-title {
  display: -ms-flexbox;
  display: flex;
  font-weight: 500;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 15px; 
}

@media only screen and (min-width: 576px) {
  .slide-content .sub-title {
    font-size: 22px; 
  } 
}

.slide-content .sub-title:before {
  content: '';
  width: 60px;
  height: 2px;
  margin-right: 20px;
  background: white; 
}

@media only screen and (max-width: 375px) {
  .slide-content .sub-title:before {
    width: 40px;
    height: 1px; 
  } 
}

@media only screen and (max-width: 1199px) {
  .slide-content .h2 {
    font-size: 60px; 
  } 
}

@media only screen and (max-width: 767px) {
  .slide-content .h2 {
    font-size: 50px; 
  } 
}

@media only screen and (max-width: 575px) {
  .slide-content .h2 {
    font-size: 43px; 
  } 
}

@media only screen and (max-width: 375px) {
  .slide-content .h2 {
    font-size: 35px; 
  } 
}


@media only screen and (max-width: 1399px) {
  .slide-content h1 {
    font-size: 80px; 
  } 
}

@media only screen and (max-width: 1199px) {
  .slide-content h1 {
    font-size: 55px;
    line-height: 1.3;
    margin-bottom: 35px; 
  } 
}

@media only screen and (max-width: 767px) {
  .slide-content h1 {
    font-size: 45px; 
  } 
}

@media only screen and (max-width: 575px) {
  .slide-content h1 {
    font-size: 38px;
    letter-spacing: -1px; 
  } 
}

@media only screen and (max-width: 375px) {
  .slide-content h1 {
    font-size: 30px; 
  } 
}

.slide-content > * {
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both; 
}

.services-content-three p {
  font-weight: 500;
  color: var(--base-color);
}

/* ============================== */
`;

export default Compressor;
