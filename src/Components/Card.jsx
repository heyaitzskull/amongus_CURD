import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import './Card.css'

const Card = (props) =>  {

  return (

    <Link to={`/crewmate-details/${props.id}`} className="card-link">
      <div className="Card">
          <h2 className="name">{props.name}</h2>
          <h3 className="speed">{props.speed + " mph"}</h3>
      </div>
      </Link>
  );
};

export default Card