import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import logo from '../images/logo.jpg'
import AdminHome from './AdminHome'
import AdminPlayList from './AdminPlayList'
import AdminAlbum from './AdminAlbum'
import AdminArtist from './AdminArtist'
import UsersData from './UsersData'
import './AdminNavBar.css'

export default function AdminNavBar() {
  return (
    <div className="wrapper">
    <div className="sidebar">
        <img className='row' src={logo} alt='logo' />
        <br/> <br/> <br/>
    <ul className='navbar'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/adminplaylist">Playlists</Link></li>
    <li><Link to="/adminalbums">Albums</Link></li>
    <li><Link to="/adminartists">Artists</Link></li>
    <li><Link to="/usersdata">Users</Link></li>
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
