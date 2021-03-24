import React from 'react';

const Wrapper = ({children, style}) => {
  return(
    <article className='container' style={style}>
      {children}
    </article>
  )
}

export default Wrapper;