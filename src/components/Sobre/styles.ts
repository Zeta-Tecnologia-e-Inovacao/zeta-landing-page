import styled from 'styled-components';

export const About = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Roboto:wght@300;400;500;700&display=swap');

a {
  color: var(--base-color);
  cursor: pointer;
  outline: none;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  text-decoration: none;
  font-size: 22px;
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
  font-size: 16px;
}

  h1, .h1 {
  line-height: 1.1;
  font-size: 80px; 
}

h2, .h2, .counter-text-wrap .count-text, .pricing-plan-item .price {
  line-height: 1.25;
  font-size: 42px; 
}
h4, .h4 {
  line-height: 1.35;
  font-size: 22px; }

.service-item.style-three {
  padding: 0;
  margin-bottom: 30px;
}
.service-item {
    transition: 0.5s;
    padding: 40px 35px 15px;
}

.service-item.style-three h4 {
    margin-bottom: 15px;
}


.about-content p {
    max-width: 515px;
}


`;

export default About;
