import React, { useRef, useState } from 'react';
import { Spring } from 'react-spring/renderprops';

const ContactCard = () => {
  const nameInputRef = useRef();
  const messageRef = useRef();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameInputChange = () => {
    setName(nameInputRef.current.value);
  };

  const handleMessageInputChange = () => {
    console.log(messageRef.current.value)
    setMessage(messageRef.current.value);
  }

  return(
    <Spring from={{opacity: 0}} to={{opacity: 1}}>
      {props => <div className='card' style={props}>
        <div className='card-body'>
          <h5 className='card-title' style={{borderBottom: '1px solid black'}}>Contact me</h5>
          <form action='mailto:linjingneng888@hotmail.com'
          method='POST'
          encType='multipart/fomr-data'
          name='contactForm'>
            <div className='mb-3'>
              <label for='name' className='form-label'>Name:</label>
              <input type='text' className='form-control' id='name' ref={nameInputRef} onChange={handleNameInputChange} />
            </div>
            <div className='mb-3'>
              <label for='message' className='form-label' >Message:</label>
              <textarea type='text' className='form-control' id='name' ref={messageRef} onChange={handleMessageInputChange} ></textarea>
            </div>
            <button type='submit' className={(!name || !message) ? 'btn btn-primary disabled' : 'btn btn-primary'} >Submit</button>
          </form>
        </div>
      </div>}
    </Spring>
  )
}

export default ContactCard;