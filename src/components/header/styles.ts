import styled from 'styled-components';

export const MenuHeader = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');

 /* HEADER */
 #header {
  background-color: #000000;
  text-align: center;
  padding: 15px;

  }
  
  #header p {
    margin-bottom: 0;
  }

  #header h4{
  margin-bottom: 0;
  color: #FFF;
}
  
  #logo-container {
    display: flex;
    justify-content: center;
  }
  
  #logo {
    width: 40px;
    margin-right: 15px;
  }

  
.navbar-nav a {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0 8px;
  color: #fff;
}
.w-100 {
  height: 100vh;
  }

/* Navbar */
.navbar-nav a:hover{
  color: var(--background-color);
  transition: 0.2s;
}

.navbar-nav .active{
  color: var(--background-color);
}

.logo {
  width: 166px;
  height: 65px;
}

.sliderT{
  background-image: url(/images/slider/home.jpg)
}

.bi-grid-3x3-gap-fill{
  color: blue;
  font-size: 30px;
}

/******************* ## Jumbotron *******************/
/*******************************************************/

/** Botão do jumbotron **/
.theme-btn2,
a.theme-btn2 {
  text-decoration: none;
  z-index: 1;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  font-weight: 700;
  text-align: center;
  padding: 12px 30px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: white; 
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-transform: capitalize;
  background: var(--secondary-color);
}
.theme-btn2 i,
a.theme-btn2 i {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  margin-left: 10px; 
}
.theme-btn2:after,
a.theme-btn2:after {
  content: '';
  z-index: -1;
  left: 50%;
  top: 50%;
  -webkit-transition: 0.75s;
  -o-transition: 0.75s;
  transition: 0.75s;
  position: absolute;
  -webkit-transform: translate(-50%, -50%) scale(1);
  -ms-transform: translate(-50%, -50%) scale(1);
  transform: translate(-50%, -50%) scale(1); 
}
.theme-btn2:hover,
a.theme-btn2:hover {
  color: var(--heading-color);
  background: var(--primary-color);
}
  
.theme-btn2:hover i,
a.theme-btn2:hover i {
  margin-left: 13px;
  margin-right: -3px; 
}

/* ======================== */


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

.slider-area:before {
  mix-blend-mode: multiply; 
}
  
.slide-content {
  max-width: 515px; 
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
`;

export default MenuHeader;
