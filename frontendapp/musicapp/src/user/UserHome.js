import React, { useRef, useState } from 'react';
import './UserHome.css';
import logo1 from '../images/hinanna.jpeg';
import logo2 from '../images/devara.jpeg';
import logo3 from '../images/gunrurkaram.jpeg';
import logo4 from '../images/veerasimha.jpg';

export default function UserHome() {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);

  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);
  const audioRef4 = useRef(null);

  const toggleAudio1 = () => {
    if (isPlaying1) {
      audioRef1.current.pause();
    } else {
      audioRef1.current.play();
    }
    setIsPlaying1(!isPlaying1);
  };

  const toggleAudio2 = () => {
    if (isPlaying2) {
      audioRef2.current.pause();
    } else {
      audioRef2.current.play();
    }
    setIsPlaying2(!isPlaying2);
  };

  const toggleAudio3 = () => {
    if (isPlaying3) {
      audioRef3.current.pause();
    } else {
      audioRef3.current.play();
    }
    setIsPlaying3(!isPlaying3);
  };

  const toggleAudio4 = () => {
    if (isPlaying4) {
      audioRef4.current.pause();
    } else {
      audioRef4.current.play();
    }
    setIsPlaying4(!isPlaying4);
  };

  return (
    <div className="main_content">
      <div className="info">
        <h1 align="center">Feel The Taste Of Music</h1>
        <br />
        <table>
          <tbody>
            <tr>
              <td>
                <div className="card">
                  <img src={logo1} alt='imaf' />
                  <h3>HiNanna</h3>
                  <audio ref={audioRef1} src={require("../Odiyamma.mp3")} />
                  <button className={isPlaying1 ? "pauseButton" : "playButton"} onClick={toggleAudio1}>
                    {isPlaying1 ? "Pause Audio" : "Play Audio"}
                  </button>
                </div>
              </td>
              <td>
                <div className="card">
                  <img src={logo2} alt='imafr' />
                  <h3>Devara: Part 1</h3>
                  <audio ref={audioRef2} src={require("../tiger.mp3")} />
                  <button className={isPlaying2 ? "pauseButton" : "playButton"} onClick={toggleAudio2}>
                    {isPlaying2 ? "Pause Audio" : "Play Audio"}
                  </button>
                </div>
              </td>
              <td>
                <div className="card">
                  <img src={logo3} alt='imafr' />
                  <h3>Guntur Karam</h3>
                  <audio ref={audioRef3} src={require("../Ramana.mp3")} />
                  <button className={isPlaying3 ? "pauseButton" : "playButton"} onClick={toggleAudio3}>
                    {isPlaying3 ? "Pause Audio" : "Play Audio"}
                  </button>
                </div>
              </td>
              <td>
                <div className="card">
                  <img src={logo4} alt='imafr' />
                  <h3>Veera Simha Reddy</h3>
                  <audio ref={audioRef4} src={require("../Balayya.mp3")} />
                  <button className={isPlaying4 ? "pauseButton" : "playButton"} onClick={toggleAudio4}>
                    {isPlaying4 ? "Pause Audio" : "Play Audio"}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
