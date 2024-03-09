import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import logo from '../images/logo.jpg'
import AdminHome from './AdminHome'
import AdminPlayList from './AdminPlayList'
import AdminAlbum from './AdminAlbum'
import AdminArtist from './AdminArtist'
import UsersData from './UsersData'
import './AdminNavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompactDisc, faMusic, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

export default function AdminNavBar() {
  return (
    <div className="wrapper">
    <div className="sidebar">
        <img className='row' src={logo} alt='logo' />
        <br/> <br/> <br/>
    <ul className='navbar'>
    <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
    <li><Link to="/adminplaylist"><FontAwesomeIcon icon={faMusic} /> Playlists</Link></li>
    <li><Link to="/adminalbums"><FontAwesomeIcon icon={faCompactDisc} /> Albums</Link></li>
    <li><Link to="/adminartists"><FontAwesomeIcon icon={faUser} /> Artists</Link></li>
    <li><Link to="/usersdata"><FontAwesomeIcon icon={faUsers} /> Users</Link></li>
    </ul>
    </div>
    <Routes>
        <Route path="/" Component={AdminHome}/>
        <Route path="/adminplaylist" Component={AdminPlayList}/>
        <Route path="/adminalbums" Component={AdminAlbum}/>
        <Route path="/adminartists" Component={AdminArtist}/>
        <Route path="/usersdata" element={<UsersData/>}/>
    </Routes>

    </div>
  )
}
