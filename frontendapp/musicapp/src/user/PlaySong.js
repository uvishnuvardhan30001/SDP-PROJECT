import React from 'react'
import hinanna from '../images/hland.jpg'
import './PlaySong.css'

export default function PlaySong() {
  return (
    <div className="main_content">
      <div className="info">
      <img className='play' src={hinanna} alt='imaf' />
      <table id="playsong">
  <tr>
    <th>Sno</th>
    <th>Song Name</th>
    <th>Artist</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>01</td>
    <td>Samayama</td>
    <td>Anurag Kulkarni, Sithara Krishnakumar</td>
    <td><button class="button button5">Play</button></td>
  </tr>
  <tr>
    <td>02</td>
    <td>Gaaju Bomma</td>
    <td>Hesham Abdul Wahab</td>
    <td><button class="button button5">Play</button></td>
  </tr>
  <tr>
    <td>03</td>
    <td>Ammaadi</td>
    <td>Kaala Bhairava, Shakthisree Gopalan</td>
    <td><button class="button button5">Play</button></td>
  </tr>
  <tr>
    <td>04</td>
    <td>Odiyamma</td>
    <td> Dhruv Vikram, Sruti Hassan, Chinmayi Sripaada</td>
<td><button class="button button5">Play</button></td>
</tr>
  <tr>
    <td>05</td>
    <td>Idhe Idhe</td>
    <td>Hesham Abdul Wahab</td>
<td><button class="button button5">Play</button></td>
  </tr>
  <tr>
    <td>06</td>
    <td>Asalelaa</td>
    <td>Chinmayi Sripada,Anurag Kulkarni</td>
    <td><button class="button ">Play</button></td>
  </tr>
  <tr>
    <td>07</td>
    <td>Enno Enno</td>
    <td>Bhavana Isvi</td>
    <td><button class="button ">Play</button></td>
  </tr>
  <tr>
    <td>08</td>
    <td>Adigaa </td>
    <td>Karthik</td>
    <td><button class="button ">Play</button></td>
  </tr>
  <tr>
    <td>09</td>
    <td>Chedhu Nijam </td>
    <td>Geetha Madhuri</td>
    <td><button class="button ">Play</button></td>
  </tr>
  <tr>
    <td>10</td>
    <td>Needhe Needhe </td>
    <td>Aavani Malhar</td>
    <td><button class="button ">Play</button></td>
  </tr>
</table>
        </div>
        
    </div>
  )
}
