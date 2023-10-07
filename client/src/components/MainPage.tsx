import React from "react";
import headerImg from './OIP (1).jpeg'
import { useState } from "react";
import './App.css'

const MainPage = () =>{
    type Message = {
        text: string;
        sender: string;
    };
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('');

    const handleInputChange = (event: 
        React.ChangeEvent<HTMLInputElement>) => {
            setInput(event.target.value);
        }
    const handleSendMessage = () => {
        //Add user message to messages array
        setMessages([...messages, {text: input, sender: 'user'}]);

        setInput('')
    }
    const headerStyle = {
        backgroundColor: '#4c4c47',
        color: 'white',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const navStyles = {
        display: 'flex',
        flexdirection: 'col',
        alignItems: 'center',
    }

    const navBtnStyles = {
        padding: '10px',
        backgroundColor: '#848fa5',
        color: 'black',
        borderRadius: '5px',
        borderColor: 'blue',
        borderWidth: '2px',
        margin: '2px'
    }
    
    const titleStyles = {
        fontSize: '30px',
        textalign: 'center',
        marginLeft: '80px',
        color: '#e5dcc5'
    }

    const imgContainerStyle = {
        width :'50px',
    }

    const mainStyles = {
        backgroundColor: '#2d2d2a'
    }

    const instructionsStyle = {
        paddingTop: '10px',
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        color: 'white',
        textalign: 'center',
    }
    const paragraphStyle: React.CSSProperties = {
        paddingInline: '30px',
        paddingBlock: '10px',
        textAlign: 'center',
        lineHeight: '30px'
    }

    const chatContainerStyles = {
        backgroundColor: 'white',
        overflowy: 'auto'
    }

    const boxedStyles = {
        borderwidth: '2px',
        padding: '5px',
        minHeight: '530px',
        backgroundColor: '#e5dcc5'

    }

    const inputStyles = {
        border: '2px solid blue',
        width: '89%',
        paddingLeft: '5px',
        marginRight: '4px'
    }

    const sendButtonStyles = {
        padding: '5px',
        backgroundColor: '#848fa5',
        color: 'black',
        borderRadius: '5px',
        borderColor: 'blue',
        borderWidth: '2px',
        margin: '2px',
        transition: 'background-color 0.2s',
        width: '10%',
        paddingtop: '10px' ,
      
        '&:hover': {
          backgroundColor: '#0039cb' 
        }
      }


    
    return(
        <>
        <div className ='header' style = {headerStyle}>
            <div className = 'header-img' style={imgContainerStyle}>
                <img src = {headerImg}  />
            </div>
            <h1 className = 'titleText' style = {titleStyles}>BriefCase.ai</h1>
            <div className = 'nav' style={navStyles}>
                <button className = 'nav-btn' style = {navBtnStyles}>More Resources</button>
            </div>
        </div>

        <main style={mainStyles}>
            <div className = 'main-portion'>
                <div className = 'instructions'>
                    <div style = {instructionsStyle}>
                        <div style={{border: '2px solid black', borderRadius: '10px', padding: '10px', backgroundColor: '#e5dcc5', color: '#2d2d2a'}}>
                    <h1 className = 'instructions-title' style={{fontSize: '30px'}}>Instructions</h1>
                        </div>
                    <p style = {paragraphStyle}>Welcome to BriefCase Our AI chatbot is here to provide you with information and guidance related to legal cases. Please keep in mind that the information provided by the chatbot is for informational purposes only and should not be considered a substitute for professional legal advice.
                    Legal cases can be complex and often involve specific details that may not be fully covered by our chatbot. We encourage you to consult with a qualified attorney or legal professional for personalized advice tailored to your unique situation.</p>
                    </div>
                </div>
            </div>

            <div className = 'chat-container' style = {chatContainerStyles}>
            <div className = 'boxed-container' style={boxedStyles}>
            <div>
                {messages.map((message, index)=>(
                    <div key = {index}>
                        <strong>{message.sender}</strong>{message.text}
                    </div>
                ))}
            </div>
            </div>
            <div className="bottom" style={{paddingInline:"5px", backgroundColor: '#4c4c47', marginBottom: '0px', paddingBlock:'5px'}}>
                <input style = {inputStyles} value = {input} onChange = {handleInputChange} placeholder="Ask your legal question" />
                <button style = {sendButtonStyles}onClick = {handleSendMessage}>Send</button>
            </div>
            </div>
        </main>
        </>
    )
}

export default MainPage