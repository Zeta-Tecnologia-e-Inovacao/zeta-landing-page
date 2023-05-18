import styled from 'styled-components';

export const CssParceria = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;500;600&display=swap'); 
/* font-family: 'Lato', sans-serif;
font-family: 'Poppins', sans-serif; */

*{
    font-family: 'Roboto Slab', sans-serif;
}


.feature-item {
    
    width: 200px;
    text-align: center;
    border-radius: 30px;
    /* padding: 30px 15px 25px; */
   
}

.card-img-top {
    border-radius: px;
    padding: 20px;
}

/* .icon{
} */

.icon:hover{
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
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
