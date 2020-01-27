import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import promo from './areYouDown.jpeg'
import './styles.css'

const Hero = (props) => {
  return (
      // <Jumbotron fluid>
      //   <Container fluid>
            <img className="img-fluid" alt="Collectively-image" src={promo} />
      //   </Container>
      // </Jumbotron>
  );
};

export default Hero;