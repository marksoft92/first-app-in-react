import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {info} from '../../data/dataStore.js';
const Info = () => (
  <Container> <Hero {...info}/> 
    {info.description}
  </Container>
);

export default Info;