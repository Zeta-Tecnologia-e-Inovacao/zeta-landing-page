import styled from 'styled-components';

export const MenuHeader = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;500;600&display=swap'); 

/* font-family: 'Lato', sans-serif;
font-family: 'Poppins', sans-serif; */
////////////////// HEADER ///////////////

.li {

}

.menu{
  width: 100%;
  
}

.logo {
  width: 166px;
  height: 65px;
}

a, span{
  font-family: 'Poppins', sans-serif;
  color: #fff;
}

.dropdown-name{
  color: black;
}

.dropdown-menu{
  background-color: white;
}

.nav-link{
  position: relative;
  display: inline-block;
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
  transform-origin: right;
  transition: scale 0.25s;
}
.nav-link:hover::before{
  scale: 1;
}

`;

export default MenuHeader;
