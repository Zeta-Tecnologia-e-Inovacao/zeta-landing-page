import styled from 'styled-components';

export const Servicos = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Roboto:wght@300;400;500;700&display=swap');

.text-a{
  cursor: pointer;
  outline: none;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  text-decoration: none; 
  font-weight: 500;
}

.text-a:hover, .text-a:focus, .text-a:visited {
  text-decoration: none;
  outline: none; 
}
.text-a:hover {
  color: var(--background-color); 
}
.section-title h1{
  font-weight: 600;
}
.service-item p{
  font-weight: 500;
  color: var(--base-color);
}

.bi-check2-circle{
  color: var(--background-color);
}


/***************** ## Area de Serviços *******************/
/*******************************************************/

.service-item.style-three {
  padding: 0;
  margin-bottom: 30px; 
}

.service-item-three .content {
  z-index: 2;
  position: relative;
  margin: -80px 20px 50px 50px; 
}

@media only screen and (max-width: 375px) {
  .service-item-three .content {
    margin-left: 10px;
    margin-right: 10px; 
  } 
}

.services-content-three p {
  font-weight: 500;
  color: var(--base-color);
}

/* S */
.service-item {
  padding: 25px;
  background: #fff6;
  margin-bottom: 20px;
  -webkit-box-shadow: 10px 0 60px rgba(102, 83, 232, 0.15);
  box-shadow: 10px 0 60px rgba(102, 83, 232, 0.15); 
}

  @media only screen and (max-width: 575px) {
    .service-item {
      margin-top: 0; 
    } 
  }
  @media only screen and (max-width: 375px) {
    .service-item {
      padding-left: 30px;
      padding-right: 30px; 
    } 
  }
  .service-item .icon {
    width: 93px;
    height: 93px;
    line-height: 1;
    font-size: 50px;
    line-height: 93px;
    text-align: center;
    margin-bottom: 30px;
    display: inline-block;
    color: var(--background-color);
    background: url(images/services/icon-bg.png) no-repeat 100% 100%; 
  }

  .service-item p {
    margin: 20px 0 5px; 
  }

/* Service Details */
.service-details-content h3 {
  font-size: 30px;
  margin-bottom: 20px; 
}

.service-details-content .image img {
  width: 100%; 
}

/* ======================================== */

`;

export default Servicos;
