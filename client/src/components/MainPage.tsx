import React, { useEffect } from "react";
import headerImg from "../OIP (1).jpeg";
import { useState } from "react";
import '@fontsource/roboto'
import logo from './mainpagelogo.png'
import { json } from "stream/consumers";
import {useNavigate} from 'react-router-dom';

const MainPage = () => {
  type Message = {
    text: string;
    sender: string;
  };

  const navigate = useNavigate()

  //State variables
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [prompt, setPrompt] = useState("");


  useEffect(() => {
    // Fetch chat data from the API
    fetch("/chat", {
      headers: {
        method: 'GET',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Create a message object from the API data and add it to the messages state
        const botMessage = {
          text: data.message, // Assuming the API response has a 'message' field
          sender: "Bot: ",
        };
        setMessages([...messages, botMessage]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  //input handlers
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
    setInput(event.target.value);
  };
  const handleSendMessage = () => {
    //Add user message to messages array
    setMessages([...messages, { text: input, sender: "User: " }]);

    setInput("");
  };

const promptBot = () => {
    fetch('/prompt', {
        method: 'POST',
        body: JSON.stringify({'message': prompt}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((res) => res.json())
    .then((data) => {
        // Create a message object from the API data and add it to the messages state
        const botMessage = {
            text: data.message, // Assuming the API response has a 'message' field
            sender: "Bot: ",
        };
        setMessages([...messages, botMessage]);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
  const logout = () => {
    fetch('/logout').then((res) => {
        navigate('/')
    })
  }  
  const headerStyle = {
    backgroundColor: "#2d2d2a",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navStyles = {
    display: "flex",
    flexdirection: "col",
    alignItems: "center",
  };

    const navBtnStyles = {
        padding: '10px',
        backgroundColor: '#e5dcc5',
        color: 'black',
        borderRadius: '5px',
        borderColor: '#e5dcc5',
        borderWidth: '2px',
        margin: '2px'
    }
    
    const titleStyles = {
        fontSize: '30px',
        textalign: 'center',
        marginLeft: '80px',
        color: 'white',
        fontFamily: 'Roboto'
    }

  const imgContainerStyle = {
    width: "50px",
  };

  const mainStyles = {
    backgroundColor: "#2d2d2a",
  };

  const instructionsStyle = {
    paddingTop: "10px",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    color: "white",
    textalign: "center",
    backgroundColor: "white",
  };
  const paragraphStyle: React.CSSProperties = {
    paddingInline: "30px",
    paddingBlock: "10px",
    textAlign: "center",
    lineHeight: "30px",
    fontFamily: "Roboto",
    color: "black",
  };

  const chatContainerStyles = {
    backgroundColor: "white",
    overflowy: "auto",
  };

  const boxedStyles = {
    borderwidth: "2px",
    padding: "5px",
    minHeight: "530px",
    backgroundColor: "rgb(211,211,211)",
    border: "2px solid black",
    margintop: "5px",
    marginInline: "5px",
    marginBottom: "5px",
  };

  const inputStyles = {
    border: "2px solid #e5dcc5",
    width: "89%",
    paddingLeft: "5px",
    marginRight: "4px",
  };

  const sendButtonStyles = {
    padding: "5px",
    backgroundColor: "#e5dcc5",
    color: "black",
    borderRadius: "5px",
    borderColor: "#e5dcc5",
    borderWidth: "2px",
    margin: "2px",
    transition: "background-color 0.2s",
    width: "10%",
    paddingtop: "10px",
  }
    
    return(
        <>
        <div className ='header' style = {headerStyle}>
            <div className = 'header-img' style={imgContainerStyle}>
                <img src = {logo} style={{borderRadius: '10px'}}  />
            </div>
            <h1 className = 'titleText' style = {titleStyles}>- LawgicBot -</h1>
            <div className = 'nav' style={navStyles}>
                <button className = 'nav-btn' onClick={logout} style = {navBtnStyles}>Logout</button>
            </div>
        </div>

      <main style={mainStyles}>
        <div className="main-portion">
          <div className="instructions">
            <div style={instructionsStyle}>
              <div
                style={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  padding: "10px",
                  backgroundColor: "#e5dcc5",
                  color: "#2d2d2a",
                }}
              >
                <h1 className="instructions-title" style={{ fontSize: "30px" }}>
                  Instructions
                </h1>
              </div>
              <p style={{color: 'red', paddingTop: '5px'}}>Please Read</p>
              <p style={paragraphStyle}>
                Welcome to BriefCase Our AI chatbot is here to provide you with
                information and guidance related to legal cases. Please keep in
                mind that the information provided by the chatbot is for
                informational purposes only and should not be considered a
                substitute for professional legal advice. Legal cases can be
                complex and often involve specific details that may not be fully
                covered by our chatbot. We encourage you to consult with a
                qualified attorney or legal professional for personalized advice
                tailored to your unique situation.
              </p>
            </div>
          </div>
        </div>

        <div className="chat-container" style={chatContainerStyles}>
          <div className="boxed-container overflow-y-scroll" style={boxedStyles}>
            <div>
              {messages.map((message, index) => (
                <div key={index}>
                  <strong>{message.sender}</strong>
                  {message.text}
                </div>
              ))}
            </div>
          </div>
          <div
            className="bottom"
            style={{
              paddingInline: "5px",
              backgroundColor: "#4c4c47",
              marginBottom: "0px",
              paddingBlock: "5px",
            }}
          >
            <input
              style={inputStyles}
              value={input}
              onChange={handleInputChange}
              placeholder="Ask your legal question"
            />
            <button style={sendButtonStyles} onClick={() => { handleSendMessage(); promptBot(); }}>
              Send
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
