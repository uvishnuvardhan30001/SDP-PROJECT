import React from 'react'
import logo1 from '../images/thestootage.jpg'
import logo2 from '../images/melodrama.jpeg'
import logo3 from '../images/Thriller.jpg'
import logo4 from '../images/Rakshak.jpg'
import './Admin.css'
export default function AdminAlbum() {
  return (
    <div className="main_content">
      
    <div className="info">
      

    <h1 align="center">Feel The Taste Of Music</h1>
    <br/>
    <table>
    
      <td><div className="card">
                <img src={logo1} alt='imaf'/>
                <h3>The Stooges</h3>
                <button>Play</button>
            </div></td>
            <td><div className="card">
                <img src={logo2 }alt='imafr'/>
                <h3>Melodrama</h3>
                <button>Play</button>
            </div></td>
            <td><div className="card">
                <img src={logo3}alt='imafr'/>
                <h3>Thriller</h3>
                <button>Play</button>
            </div></td>
            <td><div className="card">
                <img src={logo4}alt='imafr'/>
                <h3>Rakshak</h3>
                <button>Play</button>
            </div></td>
            
    </table>
            
          
      
  </div>
  
  
</div>
  )
}
