import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import promo from './areYouDown.jpeg'
import './styles.css'

const Hero = (props) => {
  return (
      <img className="img-fluid w-100 mt-5" alt="Collectively-image" src={promo} />
  );
};

export default Hero;