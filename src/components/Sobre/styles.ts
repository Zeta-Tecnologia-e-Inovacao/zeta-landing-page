import styled from 'styled-components';

export const About = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Roboto:wght@300;400;500;700&display=swap');


.pb-100, .py-100 {
    padding-bottom: 100px;
}
.pt-25, .py-25 {
    padding-top: 25px;
}

.z-1 {
    z-index: 1;
}

.rel {
    position: relative;
}

.row {
    --bs-gutter-x: 30px;
}

a {
  color: var(--base-color);
  cursor: pointer;
  outline: none;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  text-decoration: none;
  font-size: 24px;
}

  a:hover, a:focus, a:visited {
    text-decoration: none;
    outline: none; 
  }

  a:hover {
    color: var(--background-color); 
  }

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  color: var(--heading-color); 
}

p{
  color: var(--base-color);
  font-size: 17px;
}

  /* Position */
.rel {
  position: relative; }

.z-0 {
  z-index: 0; }

.z-1 {
  z-index: 1; }

.z-2 {
  z-index: 2; }

.z-3 {
  z-index: 3; }

.z-4 {
  z-index: 4; }

.z-5 {
  z-index: 5; }


    /* Border Radius */
.br-5 {
  border-radius: 5px; 
}

.br-10 {
  border-radius: 10px;
 }

.br-15 {
  border-radius: 15px; 
}

.br-20 {
  border-radius: 20px; 
}

.br-25 {
  border-radius: 25px; 
}

.br-30 {
  border-radius: 30px; 
}

  h1, .h1 {
  line-height: 1.1;
  font-size: 85px; 
}

h2, .h2, .counter-text-wrap .count-text, .pricing-plan-item .price {
  line-height: 1.25;
  font-size: 42px; 
}

h3, .h3 {
  line-height: 1.25;
  font-size: 32px; 
}

h4, .h4 {
  line-height: 1.35;
  font-size: 22px; }

h5, .h5 {
  font-size: 18px; }

h6, .h6 {
  font-size: 16px; }

.service-item.style-three {
  padding: 0;
  margin-bottom: 30px;
}

.service-item {
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    padding: 40px 35px 15px;
}

.service-item .style-three .icon {
    line-height: 1;
    font-size: 85px;
    margin-bottom: 20px;
    color: var(--secondary-color);
}
.service-item .icon {
    margin-bottom: 25px;
}

.service-item.style-three h4 {
    margin-bottom: 15px;
}
h4, .h4 {
    line-height: 1.35;
    font-size: 22px;
}

.about-content p {
    max-width: 545px;
}

.about-content p {
  max-width: 545px; 
}

.about-btns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; 
}

  .about-btns .theme-btn:not(:last-child) {
    margin-right: 30px; 
  }

.hotline {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; 
}

  .hotline > i {
    width: 55px;
    height: 55px;
    line-height: 51px;
    border-radius: 50%;
    text-align: center;
    margin-right: 15px;
    color: var(--secondary-color);
    border: 2px solid var(--border-color); 
  }

  .hotline .content {
    line-height: 1.65; 
  }

  .hotline .content span {
    font-weight: 500; 
  }

  .hotline .content a {
    font-size: 18px;
    font-weight: 700; 
  }

  .hotline .content a:not(:hover) {
    color: var(--heading-color); 
  }

      /* About Three */
.about-bg-shape {
  position: absolute;
  z-index: -1;
  top: -75px;
  max-width: 50%;
  left: 0;
  width: 500px;
}


.about-images .top-part,
.about-images .bottom-part {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start; 
}

  .about-images .top-part img,
  .about-images .bottom-part img {
    margin-left: 15px;
    margin-right: 15px; 
  }

.about-images .top-part {
  margin-bottom: 30px; 
}

  .about-images .top-part img:first-child {
    max-width: calc(68% - 30px); 
  }

  .about-images .top-part img:last-child {
    margin-top: 50px;
    margin-left: auto;
    max-width: calc(30% - 30px); 
  }

.about-images .bottom-part img:first-child {
  width: calc(33% - 30px); 
}

.about-images .bottom-part img:last-child {
  margin-top: -30%;
  width: calc(67% - 30px); 
}


`;

export default About;
