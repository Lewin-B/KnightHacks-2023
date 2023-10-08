import React, {useState} from 'react';
import './Home.css';
import Login from './Popups/Login';
import Signup from './Popups/Signup';
import '@fontsource/roboto'
import secretary from './secretary.png'
import plus from './plus.png'
import Ai from './ai.png'
function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
      setShow(false);
  }

  const [showsu, setShowsu] = useState(false);

  const handleCloseSU = () => {
      setShowsu(false);
  }


  return (
    <div className="App">
      <div className="text-header">
        <h1 style={{fontFamily: 'Roboto'}}>- LawgicBot -</h1>
      </div>
      <nav>
      <div style={{ display: 'flex', justifyContent: 'space-around', height: '200px', fontFamily:'Roboto'}}>

          <div className="logo" style={{ height: '300px', width: '300px', backgroundColor: 'white', paddingTop: '60px'}}>
            <img src = {secretary} style={{width: '125px', height: 'auto', display:'inline', padding: '-10px'}}/>
            <img src = {plus} style = {{width: '40px', height: 'auto', display:'inline', paddingRight: '10px'}}/>
            <img src= {Ai} style={{width: '125px', height: 'auto', display: 'inline'}}/>
          </div>
          <div className="statement" style={{ height: '300px', width: '300px', borderRadius: '5px', backgroundColor: 'white' }}>
            <h2 style={{fontSize: '25px'}}>Misson Statement:</h2>
            <p style = {{fontSize: '16px', paddingTop: '30px', paddingInline: '5px'}}>At Juris Tech, we're on a mission to simplify legal information with our latest AI software, LawgicBot. LawgicBot provides quick, accurate answers to common legal questions, empowering individuals to make informed decisions with ease. We're dedicated to making legal knowledge accessible and user-friendly for all.</p>
          </div>

        </div>

        <div className="button-container">
          <button className="signup-button" onClick={() => setShowsu(true)}>Sign up</button>
          <Signup trigger={showsu} onClose={handleCloseSU} />
          <button className="login-button" onClick={() => setShow(true)}>Login</button>
          <Login trigger={show} onClose={handleClose} />
      </div>
      </nav>
    </div>
  );
}

export default Home;
