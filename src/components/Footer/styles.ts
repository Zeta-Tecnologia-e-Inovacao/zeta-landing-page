import styled from 'styled-components';

export const Footer = styled.div`


/* FOOTER TOP */
/* #footer {
  padding: 3em 2em;
} */
#footer-top {
  margin-bottom: 2em;
}
#footer-top,
#footer-top i {
  color: #fff;
}
#social-icons {
  text-align: right;
}
#social-icons i {
  margin-right: 1em;
  font-size: 1.5em;
  cursor: pointer;
}
#social-icons i:hover {
  color: #fff;
}
/* FOOTER DETAILS */
#footer-details {
  margin-bottom: 3em;
}
#news-container,
#contact-container,
#links-container {
  padding: 0;
  border: 0;
  margin-bottom: 2em;
}
#footer-details h4 {
  color: #fff;
  margin-bottom: 1.5em;
}
#news-container input {
  border-radius: 0;
  border: none;
}
#links-container li {
  margin-bottom: 0.5em;
}
#links-container a {
  text-decoration: none;
}
#links-container a:hover {
  color: #fff;
}
/* FOOTER BOTTOM */
#footer-bottom {
  border-top: 1px solid #7a7a7a;
  padding-top: 2em;
}
#footer-bottom i {
  color: #b6bace  ;
}

@media (min-width: 768px) {
  #news-container {
    padding-right: 2em;
  }
  #contact-container {
    padding: 0 2em;
    border-left: 1px solid #7a7a7a;
    border-right: 1px solid #7a7a7a;
  }
  #links-container {
    padding-left: 2em;
  }
}

button {
  padding: 17px 40px;
  border-radius: 50px;
  border: 0;
  background-color: white;
  color: black;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all .5s ease;
}
 
button:hover {
  letter-spacing: 3px;
  background-color: hsl(0deg 0% 5%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(4 20 50) 0px 7px 15px 0px;
}
 
button:active {
  letter-spacing: 3px;
  background-color: hsl(261deg 80% 48%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
  transform: translateY(10px);
  transition: 100ms;
}
`;

export default Footer;
