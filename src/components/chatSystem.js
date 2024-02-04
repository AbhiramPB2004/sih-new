import React from "react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";



const Chatbot =() =>{
const navigate = useNavigate();
const [Message,SetMessage] = useState([]);
const [previousMessage,SetPreviousMessage] = useState();
const [Value,setValue] = useState();

const ChatUpdate = () =>{   
    SetMessage([...Message,{message: Value,TypeOfUser: "user"}]);
    console.log(Message);
}

useEffect(() => {
  
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3001';
    axios.post('http://localhost:3001/JWTAuthenticate',{"jwt":"jwt"}).catch(function (error) {
        console.log(error);
    }).then((response) => {
        const data = response.data;
        
    if(data === "Valid Token"){
        console.log("Valid Token");
    }else{
        navigate('/Login');
        console.log("Invalid Token");
    }
    });
},[]);

    // console.log(Value)
    return(
        <div className="chat-full">
            <section className="Side-Bar">
                <button className="new-chat-button">+ NEW CHAT</button>
            <ul className="history">
                <li>history</li>
            </ul>
            <nav className="chat-nav">
                <center><h1><a href="/cost" className="premium-page">wanna go premeium?</a></h1></center>
            </nav>
            </section>
           <section className="chat-box">
            {/* <h1 className="header-chat">Career Genie</h1> */}
            <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy="0" text-anchor="middle">
            Career Genie
            </text>
            </svg>
            <ul className="feed">
                {Message.map((message) => { return(
                 
                <li><p>{ message.TypeOfUser }</p>
                <p>{message.message}</p></li>)})}
                {/* <li>chat box</li> */}
            </ul>
            <div className="bottom-section">
                <div className="input-section">
                    <input className="chat-input" value={Value} onChange={(e) =>{setValue(e.target.value)}}/>
                    <div id="submit" onClick={ChatUpdate}> » </div>
                    
            </div>
                </div>
            
           </section>
        </div>
    )
}

export default Chatbot