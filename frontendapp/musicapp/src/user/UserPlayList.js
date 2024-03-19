import React from 'react'
import './UserHome.css'
import logo1 from '../images/mass.jpeg'
import logo2 from '../images/love.jpeg'
import logo3 from '../images/travell.jpeg'
import logo4 from '../images/melody.jpeg'

export default function UserPlayList() {
  return (
    <div className="main_content">
      
    <div className="info">
      

    <h1 align="center">Feel The Taste Of Music</h1>
    <br/>
    
    <table>
    
      <tr >
       
      <td className='carddemo'><div className="card">
                <img src={logo1} alt='imaf'/>
                <h3>Telugu Mass Beats</h3>
                <button className='home'>Play</button>
            </div></td>
            <td className='carddemo'><div className="card">
                <img src={logo2 }alt='imafr'/>
                <h3>Love Tunes</h3>
                <button className='home'>Play</button>
            </div></td>
            <td className='carddemo'><div className="card">
                <img src={logo3}alt='imafr'/>
                <h3>Travelling</h3>
                <button className='home'>Play</button>
            </div></td>
            <td className='carddemo'><div className="card">
                <img src={logo4}alt='imafr'/>
                <h3>Rakshak</h3>
                <button className='home'>Play</button>
            </div></td></tr>
            
    </table>
            
          
      
  </div>
  
</div>
  )
}
