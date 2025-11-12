import { useState } from 'react'
import './App.css'
import { useRoutes, Link } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import CreateCrewmate from './pages/CreateCrewmate'
import Home from './pages/Home'
import CrewmateGallery from './pages/CrewmateGallery'
import CrewmateDetails from './pages/CrewmateDetails';
import EditCrewmate from './pages/EditCrewmate';



function App() {
  const [count, setCount] = useState(0)
  let element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/create-crewmate",
      element: <CreateCrewmate />
    },
    {
      path: "/crewmate-gallery",
      element: <CrewmateGallery />
    },
    {
      path: "/crewmate-details/:id",
      element: <CrewmateDetails />
    },
    {
      path: "/crewmate-edit/:id",
      element: <EditCrewmate />
    },

  ]);

  return (
    <div className="App">

      <Sidebar className='Sidebar'>
        <Menu className='Menu'>
          <Link to="/" className='link'>
            <MenuItem className='menu-item'>
              Home
            </MenuItem>
          </Link>
          <Link to="/create-crewmate" className='link'>
            <MenuItem className='menu-item'>
              Create Crewmate
            </MenuItem>
          </Link>
          <Link to="/crewmate-gallery" className='link'>
            <MenuItem className='menu-item'>
              Crewmate Gallery
            </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
      <div className="content">
        {element}
      </div>
    </div>
  )
}

export default App
