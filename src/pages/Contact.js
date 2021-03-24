import React from 'react';
import ContactCard from '../components/ContactCard/ContactCard';
import Wrapper from '../components/Wrapper/Wrapper';

const Contact = () => {
  return(
    <Wrapper>
      {console.log(window.location)}
      <ContactCard />
    </Wrapper>
  )
}

export default Contact;