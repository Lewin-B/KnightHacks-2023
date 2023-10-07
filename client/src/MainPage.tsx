import React from "react";
import headerImg from './OIP (1).jpeg'
import { useState } from "react";

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
        justifyContent: 'space-between'
    }

    const navStyles = {
        display: 'flex',
        flexdirection: 'col',
        alignItems: 'start',
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
        fontSize: '30px'
    }

    const imgContainerStyle = {
        width :'50px',
    }

    const mainStyles = {
        backgroundColor: '#2d2d2a'
    }

    const instructionsStyle = {
        display: 'grid',
        justifyItems: 'center'
    }
    const paragraphStyle = {
        paddingInline: '30px',
        paddingBlock: '10px'
    }

    const chatContainerStyles = {
        backgroundColor: 'white',
        border: '2px solid green'
    }

    const boxedStyles = {
        borderwidth: '2px',
        border: '2px solid red'
    }


    
    return(
        <>
        <div className ='header' style = {headerStyle}>
            <div className = 'header-img' style={imgContainerStyle}>
                <img src = {headerImg}  />
            </div>
            <h1 className = 'titleText' style = {titleStyles}>BriefCase.ai</h1>
            <div className = 'nav' style={navStyles}>
                <button className = 'nav-btn' style = {navBtnStyles}>Chat-Bot</button>
                <button className = 'nav-btn' style = {navBtnStyles}>Disclaimer</button>
            </div>
        </div>

        <main style={mainStyles}>
            <div className = 'main-portion'>
                <div className = 'instructions' style = {instructionsStyle}>
                    <h1 className = 'instructions-title'>Instructions</h1>
                    <p style = {paragraphStyle}>Welcome to BriefCase Our AI chatbot is here to provide you with information and guidance related to legal cases. Please keep in mind that the information provided by the chatbot is for informational purposes only and should not be considered a substitute for professional legal advice.
                    Legal cases can be complex and often involve specific details that may not be fully covered by our chatbot. We encourage you to consult with a qualified attorney or legal professional for personalized advice tailored to your unique situation.</p>
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
            <input value = {input} onChange = {handleInputChange} />
            <button onClick = {handleSendMessage}>Send</button>
            </div>
        </main>
        </>
    )
}

export default MainPage