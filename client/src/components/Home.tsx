import React, {useState} from 'react';
import './Home.css';
import Login from './Popups/Login';

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
      setShow(false);
  }


  return (
    <div className="App">
      <div className="text-header">
        <h1>- BriefCase.ai -</h1>
      </div>
      <nav>
      <div style={{ display: 'flex', justifyContent: 'space-around', height: '200px' }}>

          <div className="logo" style={{ height: '300px', width: '300px', backgroundColor: 'white' }}>
            <p style={{ marginLeft: 110, marginTop: 110}}>Logo</p>
          </div>
          <div className="statement" style={{ height: '300px', width: '300px', backgroundColor: 'white' }}>
            <p style={{ marginTop: 45}}>Need information about a case such as its name, 
            keywords, or relevant details? BriefCase will retrieve the relevant information for you.</p>
          </div>

        </div>

        <div className="button-container">
          <button className="signup-button">Sign up</button>
          <button className="login-button" onClick={() => setShow(true)}>Login</button>
          <Login trigger={show} onClose={handleClose} />
      </div>
      </nav>
    </div>
  );
}

export default Home;
