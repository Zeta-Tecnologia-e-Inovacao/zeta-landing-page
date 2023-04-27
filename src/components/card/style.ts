import styled from 'styled-components';

export const Card = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;500;600&display=swap'); 

*{
    font-family: 'Roboto Slab', sans-serif;
}

.card{
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.card-body{
    padding: 25px;
    margin-top: -15px;
}

.btn-primary{
    border-radius: 50px;
    width: 120px;
}

.btn-primary:hover{
    background-color: black;
}

h3, h4{
    color: rgb(0, 150, 180);
    font-weight: bold
}

p{
    font-size: 16px;
}

.card-img-top {
    border-radius: 50px;
    padding: 20px;
}

`;

export default Card;
