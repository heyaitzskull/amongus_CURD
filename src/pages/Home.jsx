import { useState } from 'react'
import crewmateImg from '../assets/amogus1.png';
import './Home.css'

const Home = () => {

  return (

    <div className='home-container'>
    
        <h1 className='header'> Welcome to the Crewmate Creator! </h1>

        <h3> Here is where you can create your very own set of crewmates before sending them off into space! </h3>

        {/* image of crewmates and spaceship */}
        <img className='crewmateImg' src={crewmateImg} alt="crewmates" />


    </div>
  )


}

export default Home;