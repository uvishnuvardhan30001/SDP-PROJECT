import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import logo from '../images/logo.jpg'
import UserHome from './UserHome'
import UserPlayList from './UserPlayList'
import UserAlbums from './UserAlbums'
import Artists from './Artists'
import ProfileCard from './ProfileCard'
import './UserNavBar.css'

export default function UserNavBar() {
  return (
    <div className="wrapper">
    <div className="sidebar">
        <img className='row' src={logo} alt='logo' />
        <br/> <br/> <br/>
    <ul className='navbar'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/userplaylist">Playlists</Link></li>
    <li><Link to="/useralbums">Albums</Link></li>
    <li><Link to="/artists">Artists</Link></li>
    <li><Link to="/profilecard">Profile</Link></li>
    </ul>
    </div>
    <Routes>
        <Route path="/" Component={UserHome}/>
        <Route path="/userplaylist" Component={UserPlayList}/>
        <Route path="/useralbums" Component={UserAlbums}/>
        <Route path="/artists" Component={Artists}/>
        <Route path="/profilecard" element={<ProfileCard/>}/>
    </Routes>

    </div>
  )
}
