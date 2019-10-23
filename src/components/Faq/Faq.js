import React from 'react';
import Container from '../Container/Container';

import Hero from '../Hero/Hero';
import {faq} from '../../data/dataStore.js';



const Faq = () => (
  <Container> <Hero {...faq}/>
    {faq.description}
  </Container>
);

export default Faq;