import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';
import { Modal, Carousel } from 'react-bootstrap'
import './style.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const About = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow (true);
  const handleClose = () => setShow(false);
  const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  return(
    <div style={{marginBottom: '7%'}}>
    <Spring from={{opacity: 0}} to={{opacity: 1}}>
      {props => 
        <div style={props}>
          <div className='row'>
            <div className='col-md-8'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title about' style={{borderBottom: '1px solid black'}}>About me</h5>
                  <div className='row'>
                    <img src='/img/profile.jpg' alt='placeholder' style={{width: '700px', height: '400px', marginLeft:'10px'}} />
                    <p className='col-md-10 card-text'>Hello and welcome to my portfolio. My name is Jhonny Lin and I am currently a Full stack web developer. My expertise are, but not limited to, React, jQuery, REST API, handlebars, node.js, mongoDB, MySQL, and express. In this site, you will be able to see some of my most prominent works. Which, you can find if you click on the portfolio section website. In addition, you can also take a look at my resume.<br />
                    A little bit more about me, I graduated from University of Toronto with a degree in Anthropology and have a certificate in full stack web development. Using my degree as an anthropologist and my expertise in web development I have always paid attention and focused on making my websites and apps user friendly. 
                    If you are interested in what I do. Feel free to either reach me by phone: <strong>+1 (289) 952-3542</strong>, email: <a href='mailto:jhonnylin72@gmail.com'>jhonnylin72@gmail.com</a> or through any of my social media pages.</p>
                </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title' style={{borderBottom: '1px solid black'}}>Resume</h5>
                      <animated.div className='image'
                          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                          onMouseLeave={() => set({ xys: [0, 0, 1] })}
                          style={{ transform: prop.xys.interpolate(trans) }}
                          onClick={handleShow}
                      />
                      <p className='card-text'>Click on the image to get more details of the resume</p>
                      <a href='/Resume.pdf' download><button className='btn btn-primary'>download</button></a>
                    </div>
                  </div>
                </div>
                <div className='col-md-12' style={{marginTop: '15px'}}>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title' style={{borderBottom: '1px solid black'}}>Find me on social media</h5>
                      <a href="https://www.linkedin.com/in/jhonny-lin-weng" target="_blank" rel='noreferrer'><i style={{fontSize: '24px'}} className="fa">&#xf08c;</i></a>
                      <a href="https://www.facebook.com/jhonnylin96/" target="_blank" rel='noreferrer'><i style={{fontSize: '24px'}} className="fa">&#xf09a;</i></a>
                      <a href="https://github.com/Jlin72" target="_blank" rel='noreferrer'><i style={{fontSize: '24px'}} className="fa">&#xf09b;</i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </Spring>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          <Carousel.Item>
            <img src='/img/Resume_screenshot1.png' className='d-block w-100' alt='Resume first page' />
          </Carousel.Item>
          <Carousel.Item>
            <img src='/img/Resume_screenshot2.png' className='d-block w-100' alt='Resume second page' />
          </Carousel.Item>
        </Carousel>
        <a href='/Resume.pdf' download className='d-flex align-items-end flex-column'><button className='btn btn-primary'>Download</button></a>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default About;