import { useParams,  Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../client';
import './CrewmateDetails.css'

const CrewmateDetails = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const { data, error } = await supabase
        .from("crewmates")
        .select()
        .eq("id", id)
        .single(); 

      if (error) {
        console.error("Error fetching crewmate:", error);
      } else {
        console.log("Fetched crewmate:", data);
        setCrewmate(data);
      }
    };

    getInfo();
  }, [id]);

  const handleDelete = async (event) => {
    event.preventDefault();
    
    await supabase
      .from("crewmates")
      .delete()
      .eq('id', id);

      window.alert("Crewmate Deleted!");
      window.location = "/crewmate-gallery";

  }

  if (!crewmate) {
    return <p>Loading crewmate info...</p>;
  }

  return (
    <div class='info-container'>
      <h1>{crewmate.name}</h1>
      <p>Speed: {crewmate.speed}</p>
      <p>Color: {crewmate.color}</p>
      <p>Accessory: {crewmate.accessory}</p>

      <Link to={`/crewmate-edit/${id}`}>
        <button>Edit</button>
      </Link>

      <button onClick={handleDelete} > Delete </button>
    </div>
  );
};

export default CrewmateDetails;
