import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.css';

const PortfolioImgCard = ({title, description, frontImg, backImage, repoLink, appLink}) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return(
    <div onClick={() => set(state => !state)} className='col-md-4'>
      <div className='container'>
        <animated.img src={frontImg} className='c front' style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
        <animated.div className='overlay back' style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), backgroundColor: 'grey'}} > <div className='insideOverlay'>
        <h3>{title}</h3>
        <p>{description}</p>
          <a href={repoLink} target='_blank' rel='noreferrer noopener'><button className='btn btn-primary repoButton'>Repo</button></a>
          {appLink ? <a href={appLink} target='_blank' rel='noreferrer noopener'><button className='btn btn-primary appButton'>App</button></a> : <></>}
        </div>
        </animated.div>
      </div>
    </div>
  )
}

export default PortfolioImgCard;