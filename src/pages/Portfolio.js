import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import PortfolioImgCard from '../components/PorfolioImgCard/PortfolioImgCard';
import { Spring } from 'react-spring/renderprops'

const Portfolio = () => {
  return(
    <div style={{marginBottom: '5%'}}>
      {console.log(window.location)}
    <Spring
    from={{opacity: 0}}
    to={{opacity: 1}}>
      {props => (
        <Wrapper style={props}>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title' style={{borderBottom: '1px solid black'}}>Portfolio</h5>
              <p>Click on each image for more information</p>
                <div className='row'>
                  <PortfolioImgCard title='BonAPPvoyage' description='A web app that searches for recipe using the spoonacular API. Also, it will search for places of interest based on the cuisine type using triposo API.' frontImg='/img/BonAPPvoyage.png' repoLink='https://github.com/UofTbootcampgroupproject/bonAPPvoyage' appLink='https://uoftbootcampgroupproject.github.io/bonAPPvoyage/' />
                  <PortfolioImgCard title='Budget tracker' description='A budget tracker web that uses mongoDB to store any information from the user. In addition, the user can add information to the database while offline by using indexedDB.' frontImg='/img/budget-tracker.png' repoLink='https://github.com/Jlin72/budget-tracker' appLink='https://guarded-cliffs-40752.herokuapp.com/' />
                  <PortfolioImgCard title='Eat da burger' description='An app that tracks the burgers the user have eaten or not. This app uses mySQL to store the user information.' frontImg='/img/burger.png' repoLink='https://github.com/Jlin72/burger' appLink='https://eatdaburger-jlin.herokuapp.com/' />
                </div>
                <div className='row'>
                  <PortfolioImgCard title='Weather dashboard' description='A weather dashboard app that uses the jQuery library. In addition, the app uses the open weather API for weather information.' frontImg='/img/Dashboard.png' repoLink='https://github.com/Jlin72/Weather-Dashboard' appLink='https://jlin72.github.io/Weather-Dashboard/' />
                  <PortfolioImgCard title='Employee tracker' description='A react app that allows the user to keep track of their employees. The user can either search the user by first name or sort them ascending or descending by name' frontImg='/img/React-employee-tracker.png' repoLink='https://github.com/Jlin72/React-employee-tracker' appLink='https://jlin72.github.io/React-employee-tracker/' />
                  <PortfolioImgCard title='Youtwitch' description='A video app that searches twitch and youtube API for livestreams based on the user query.' frontImg='/img/youtwitchhomepage.png' repoLink='https://github.com/manuelleungchen/YouTwitch' appLink='https://enigmatic-stream-39845.herokuapp.com/' />
                </div>
            </div>
          </div>
      </Wrapper>
      )}
    </Spring>
    </div>
  )
}

export default Portfolio