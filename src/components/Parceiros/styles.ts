import styled from 'styled-components';

export const CssParceria = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');
/* font-family: 'Lato', sans-serif;
font-family: 'Poppins', sans-serif; */

*{
    font-family: 'Roboto Slab', sans-serif;
}

.feature-item {
    width: 140px;
    text-align: center;
    border-radius: 30px;
}

.card-img-top {
    border-radius: 2px;
    padding: 15px;
}
.icon:hover{
    background-color: #fff;
    box-shadow: 3px 0 60px rgba(120, 80, 243, 0.2); 
}
.feature-item .icon {
    line-height: 1;
    font-size: 65px;
    transition: 0.5s;
}
p{
    font-size: 15px;
    color: black;
}


`;

export default CssParceria;
