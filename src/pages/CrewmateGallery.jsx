import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { supabase } from '../client';
// import Card from '../components/Card';
import Card from '../Components/Card';
import './CrewmateGallery.css'


const CrewmateGallery = () => {

  const [allCrewmates, setAllCrewmates] = useState([]);

  useEffect(() => {

    const fetchCrewmates = async () => {

      const {data} = await supabase
        .from("crewmates")
        .select();

      setAllCrewmates(data);

    }

    fetchCrewmates()

  }, [])


  return (
    
    <div>
    <h1>Your Crewmate Gallery!</h1>

      {allCrewmates.length === 0 ? (
        <div>
          <p> You haven't made any crewmates yet. </p>

          <Link to="/create-crewmate" className='create'>
            <p className='create-text'> Create one here</p> 
          </Link>
        </div>

      ) : (
        
        <div className="gallery">
          {allCrewmates.map((crewmate) => (
            <Card
              key={crewmate.id}
              id={crewmate.id}
              name={crewmate.name}
              speed={crewmate.speed}
              color={crewmate.color}
              accessory={crewmate.accessory}
            />
          ))}
        </div>

      )}

      

    </div>
  )


}

export default CrewmateGallery;