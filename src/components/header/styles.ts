import styled from 'styled-components';

export const MenuHeader = styled.div`

////////////////// HEADER ///////////////
.ul {
  gap: 12px;
}

.li {

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
  transform-origin: left;
  transition: scale 0.25s;
}
.nav-link:hover::before{
  scale: 1;
}

`;

export default MenuHeader;
