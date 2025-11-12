import { useState } from 'react'
import './CreateCrewmates.css'
import { supabase } from '../client';
import shipImg from '../assets/amogus2.png';

const CreateCrewmate = () => {

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedAccessory, setSelectedAccessory] = useState('');
    const [crewmateName, setCrewmateName] = useState('');
    const [crewmateSpeed, setCrewmateSpeed] = useState('');

    const colorList = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Purple', 'Orange', 'Brown', 'Cyan', 'Lime', 'Pink'];
    const accessoryList = ['Hat', 'Backpack', 'Visor', 'Flower', 'Pet', 'Glasses', 'Hair'];

    const handleCreate = async (event) => {
        event.preventDefault();

        await supabase 
            .from("crewmates")
            .insert({name: crewmateName, speed: crewmateSpeed, color: selectedColor, accessory: selectedAccessory})
            .select();

        window.alert("Crewmate Created!");
        window.location = "/create-crewmate";
    }

  return (

    <div>
        <h1 className='header'>Create a New Crewmate</h1>
        <div className='create-container'>

            <div className= 'create-box'>

                <div className = 'create-item'>
                    Name:
                    <input type="text" placeholder='Start typing...' onChange={(e) => setCrewmateName(e.target.value)} name="crewmate-name" />
                </div>

                <div className = 'create-item'>
                    Speed (mph)
                    <input type="number" placeholder='Start typing...' step=".01" onChange={(e) => setCrewmateSpeed(Number(parseFloat(e.target.value).toFixed(2)))} name="crewmate-speed" />
                </div>

                <div className = 'create-item'>
                    Color:
                    <input type="text" 
                        name="crewmate-color"
                        id="crewmate-color"
                        list = "color-options"
                        value={selectedColor}
                        placeholder='Select a color...'
                        onChange={(e) => setSelectedColor(e.target.value)}
                    />
                    <datalist id="color-options">
                        {colorList.map((color, index) => (
                            <option key={index} value={color} />
                        ))}
                    </datalist>
                </div>

                <div className = 'create-item'>
                    Accessory:
                    <input type="text" 
                        name="crewmate-accessory"
                        id="crewmate-accessory"
                        list = "accessory-options"
                        placeholder='Select an accessory...'
                        value={selectedAccessory}
                        onChange={(e) => setSelectedAccessory(e.target.value)}
                    />
                    <datalist id="accessory-options">
                        {accessoryList.map((accessory, index) => (
                            <option key={index} value={accessory} />
                        ))}
                    </datalist>
                </div>

                <br/>
                {/* button needs to have an onclick */}
                <button className='create-btn' type="submit" onClick={handleCreate}>Create Crewmate</button>

            </div>
            
            <div>
                <img src={shipImg} alt="Among Us Ship" className='ship-image'/>
            </div>

        </div>
        
    </div>
  )


}

export default CreateCrewmate;