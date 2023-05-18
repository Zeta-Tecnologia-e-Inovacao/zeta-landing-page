import styled from 'styled-components';

export const About = styled.div`

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
  text-decoration: none; }
  a:hover, a:focus, a:visited {
    text-decoration: none;
    outline: none; }
  a:hover {
    color: var(--primary-color); }

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  color: var(--heading-color); }

.text-white h1, .text-white h1 a,
.text-white h2, .text-white h2 a,
.text-white h3, .text-white h3 a,
.text-white h4, .text-white h4 a,
.text-white h5, .text-white h5 a,
.text-white h6, .text-white h6 a,
.text-white .h1, .text-white .h1 a,
.text-white .h2, .text-white .h2 a,
.text-white .h3, .text-white .h3 a,
.text-white .h4, .text-white .h4 a,
.text-white .h5, .text-white .h5 a,
.text-white .h6, .text-white .h6 a {
  color: white; }

ul, li {
  list-style: none;
  padding: 0;
  margin: 0; }

img {
  max-width: 100%;
  display: inline-block; }

mark {
  color: var(--secondary-color);
  background: transparent;
  text-decoration: underline; }

header:after, section:after, footer:after {
  display: block;
  clear: both;
  content: ""; }

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
  border: 1px solid var(--border-color); }

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

.overlay {
  z-index: 1;
  position: relative; }
  .overlay::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 0.75;
    background-color: var(--heading-color); }

    /* Border Radius */
.br-5 {
  border-radius: 5px; }

.br-10 {
  border-radius: 10px; }

.br-15 {
  border-radius: 15px; }

.br-20 {
  border-radius: 20px; }

.br-25 {
  border-radius: 25px; }

.br-30 {
  border-radius: 30px; }

  h1, .h1 {
  line-height: 1.1;
  font-size: 85px; }

h2, .h2, .counter-text-wrap .count-text, .pricing-plan-item .price {
  line-height: 1.25;
  font-size: 42px; }

h3, .h3 {
  line-height: 1.25;
  font-size: 32px; }

h4, .h4 {
  line-height: 1.35;
  font-size: 22px; }

h5, .h5 {
  font-size: 18px; }

h6, .h6 {
  font-size: 16px; }

.testimonial-item .image img, .blog-item .content {
  -webkit-box-shadow: 3px 0 60px rgba(103, 77, 243, 0.2);
  box-shadow: 3px 0 60px rgba(103, 77, 243, 0.2); }

  /*******************************************************/
/***************** ## Custom Animation ****************/
/*******************************************************/
/* Animation Delay */
.delay-1-0s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s; }

.delay-2-0s {
  -webkit-animation-delay: 2s;
  animation-delay: 2s; }

.delay-0-1s {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s; }

.delay-0-2s {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s; }

.delay-0-3s {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s; }

.delay-0-4s {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s; }

.delay-0-5s {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s; }

.delay-0-6s {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s; }

.delay-0-7s {
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s; }

.delay-0-8s {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s; }

.delay-0-9s {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s; }

.delay-1-1s {
  -webkit-animation-delay: 1.1s;
  animation-delay: 1.1s; }

.delay-1-2s {
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s; }

.delay-1-3s {
  -webkit-animation-delay: 1.3s;
  animation-delay: 1.3s; }

.delay-1-4s {
  -webkit-animation-delay: 1.4s;
  animation-delay: 1.4s; }

.delay-1-5s {
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s; }

.delay-1-6s {
  -webkit-animation-delay: 1.6s;
  animation-delay: 1.6s; }

.delay-1-7s {
  -webkit-animation-delay: 1.7s;
  animation-delay: 1.7s; }

.delay-1-8s {
  -webkit-animation-delay: 1.8s;
  animation-delay: 1.8s; }

.delay-1-9s {
  -webkit-animation-delay: 1.9s;
  animation-delay: 1.9s; }

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

.service-item.style-three .icon {
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
  width: calc(33% - 30px); }

.about-images .bottom-part img:last-child {
  margin-top: -30%;
  width: calc(67% - 30px); }

/* About Two Image */
.about-two-image .bg-circle-shape {
  width: 405px;
  height: 405px;
  z-index: -1;
  left: -200px;
  bottom: -150px;
  position: absolute;
  border-radius: 50%;
  background: -webkit-gradient(linear, right top, left top, from(var(--primary-color)), to(var(--secondary-color)));
  background: -webkit-linear-gradient(right, var(--primary-color), var(--secondary-color));
  background: -o-linear-gradient(right, var(--primary-color), var(--secondary-color));
  background: linear-gradient(-90deg, var(--primary-color), var(--secondary-color));
  -webkit-animation: rotated_circle 10s infinite;
  animation: rotated_circle 10s infinite; }
  @media only screen and (max-width: 1399px) {
    .about-two-image .bg-circle-shape {
      width: 200px;
      height: 200px;
      left: -100px;
      bottom: -50px; } }
  .about-two-image .bg-circle-shape:after {
    content: '';
    width: 56%;
    height: 56%;
    position: absolute;
    right: 22%;
    top: 22%;
    background: white;
    border-radius: 50%; }
`;

export default About;
