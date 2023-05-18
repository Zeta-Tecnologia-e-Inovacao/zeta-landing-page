import styled from 'styled-components';

export const MenuHeader = styled.div`

a, i{
  transition: .5s;
  font-weight: 400;
}
#header {
  background-color: #000000;
  text-align: center;
  padding: 15px;
  border-bottom: 1px solid #CCC;
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
  width: 240px;
  margin-right: 15px;
}
/* Navbar */
#navbar a:hover{
  color: #054;
}
.navbar-nav a {
  color: #000!important;
  margin: 0 8px;
  font-size: 18px;
}
.menu{
  width: 100%;
  
}
.logo {
  width: 166px;
  height: 65px;
}
a, span{
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
  background-color: #5C70F0;
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
