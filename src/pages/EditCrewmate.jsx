import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './CreateCrewmates.css'
import { supabase } from '../client';


const EditCrewmate = () => {
  const { id } = useParams();
  const [crewmateName, setCrewmateName] = useState('');
  const [crewmateSpeed, setCrewmateSpeed] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedAccessory, setSelectedAccessory] = useState('');
  const [loading, setLoading] = useState(true);

  const colorList = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Purple', 'Orange', 'Brown', 'Cyan', 'Lime', 'Pink'];
  const accessoryList = ['Hat', 'Backpack', 'Visor', 'Flower', 'Pet', 'Glasses', 'Hair'];

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
        // ✅ Initialize all fields with existing data
        setCrewmateName(data.name);
        setCrewmateSpeed(data.speed);
        setSelectedColor(data.color);
        setSelectedAccessory(data.accessory);
      }
      setLoading(false);
    };
    getInfo();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    await supabase
      .from("crewmates")
      .update({
        name: crewmateName,
        speed: crewmateSpeed,
        color: selectedColor,
        accessory: selectedAccessory
      })
      .eq('id', id);

    window.alert("Crewmate Updated!");
    window.location = `/crewmate-details/${id}`;
  };

  if (loading) return <p>Loading crewmate info...</p>;

  return (
    <div>
      <div className='create-box'>
        <div className='create-item'>
          Name:
          <input
            type="text"
            value={crewmateName}
            onChange={(e) => setCrewmateName(e.target.value)}
            name="crewmate-name"
          />
        </div>

        <div className='create-item'>
          Speed (mph):
          <input
            type="number"
            value={crewmateSpeed}
            onChange={(e) => setCrewmateSpeed(e.target.value)}
            name="crewmate-speed"
          />
        </div>

        <div className='create-item'>
          Color:
          <input
            type="text"
            name="crewmate-color"
            list="color-options"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
          <datalist id="color-options">
            {colorList.map((color, index) => (
              <option key={index} value={color} />
            ))}
          </datalist>
        </div>

        <div className='create-item'>
          Accessory:
          <input
            type="text"
            name="crewmate-accessory"
            list="accessory-options"
            value={selectedAccessory}
            onChange={(e) => setSelectedAccessory(e.target.value)}
          />
          <datalist id="accessory-options">
            {accessoryList.map((accessory, index) => (
              <option key={index} value={accessory} />
            ))}
          </datalist>
        </div>

        <br />
        <button type="submit" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default EditCrewmate;
