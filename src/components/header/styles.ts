import styled from 'styled-components';

export const MenuHeader = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

////////////////// HEADER ///////////////
.ul {
  gap: 12px;
}

.li {

}

.nav-link{
  position: relative;
  display: inline-block;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
}
.nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #FFF;
  border-radius: 4px;
  scale: 0 1;
  transform-origin: left;
  transition: scale 0.25s;
}
.nav-link:hover::before{
  scale: 1;
}

`;

export default MenuHeader;
