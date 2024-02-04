import React, { useEffect } from "react"
import { useState } from "react"
import axios, { Axios } from "axios";
import {useNavigate} from "react-router-dom";
const LoginSignUp = () =>{
const [Page,SetPage] = useState(true);
const[Password,SetPassword] = useState();
const[email,SetEmail] = useState();
const[Username,SetUsername] = useState();
const[University,SetUniversity] = useState();
const[Age,SetAge] = useState();
const[Password2,SetPassword2] = useState();
const[Email2,SetEmail2] = useState();
const[Username2,SetUsername2] = useState();
const[University2,SetUniversity2] = useState();
const[Age2,SetAge2] = useState();
const[errorStatus,setError] = useState();
const navigate = useNavigate();
const changeScreenPage =()=>{
    Page?SetPage(false):SetPage(true);
    console.log(Page);
}

useEffect(() => {
    // axios.defaults.withCredentials = true;
    // axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3001';
    // axios.post('http://localhost:3001/JWTAuthenticate').then((response) => {
    // const data = response.data;
    // if(data === "Valid Token"){
    //     navigate('/account');
    //     console.log("Valid Token");
    // }else{
    //     console.log("Invalid Token");
    // }
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3001';
    axios.post('http://localhost:3001/JWTAuthenticate').catch(function (error) {
        console.log(error);
    }).then((response) => {
    const data = response.data;
    console.log(data);
    if(data === "Valid Token"){
        console.log("Valid Token");
        navigate('/');
    }else{
        console.log("Invalid Token");
    }
    });
},[]);

// const JWTTest = async(e) =>{
//     axios.defaults.withCredentials = true;
//     axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
//     axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3001';
//     await axios.post('http://localhost:3001/JWTAuthenticate',{jwt:"jwt"}).catch(function (error) {
//         console.log(error);
//     }).then((response) => {
//         const data = response.data;
//         console.log(data);
//     });
    
// }

const SignupPost = async(e) =>{
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3001';

await axios.post('http://localhost:3001/SignUp', {
        username: Username,
        university: University,
        email: email,
        age: Age,
        password: Password,
        password2: Password2,
        email2: Email2,
        username2: Username2,
        university2: University2,
        age2: Age2
})      // ,{withCredentials: true,}
    .then( (response) => {
        const data = response.data;
        if(data === "Data inserted"){
            console.log("Data inserted");
            navigate('/');
        }else{
            setError(data);
        }
    })
    .catch( (error) => {
        setError("Server Error");
        console.log(error.name);
    }); 


}

    return (
        <>
        <div className="App-loginSignUp">
       <div className={Page?"container right-panel-active":"container"} id="container">
        <div className="form-container sign-up-container right-panel-active " >
        <form  onSubmit={SignupPost} >
        <div><center className="error-status">{errorStatus}</center></div>
        <h1>Create Account</h1>
        <input type="text" placeholder="Username"  required onChange={(e) => {SetUsername(e.target.value)}} />
        <input type="text" placeholder="University"  required onChange={(e) => {SetUniversity(e.target.value)}}/>
        <input type="email" placeholder="email"  required onChange={(e) => {SetEmail(e.target.value)}}/>
        <input type="number" placeholder="age" required onChange={(e) => {SetAge(e.target.value)}}/>
        <input type="password" placeholder="Password" required name="pswd1" onChange={(e) => {SetPassword(e.target.value)}}/>
        <input type="password" placeholder="confirm passord" required name="pswd2" onChange={(e) => {SetPassword(e.target.value)}}/>
        <button type="submit">Sign Up</button>
        </form>
        
    </div>
    <div className="form-container sign-in-container">
        <form action="#">
        <h1>Sign in</h1>
        <div className="social-container">
        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" onChange={(e) => {SetEmail(e.target.value)}}/>
        <input type="password" placeholder="Password" onChange={(e) => {SetPassword(e.target.value)}}/>
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
    </form>
    </div>
    <div className="overlay-container">
    <div className="overlay">
        <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className="ghost" id="signIn" onClick={changeScreenPage}>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button className="ghost" id="signUp" onClick={changeScreenPage}>Sign Up</button>
        </div>
    </div>
    </div>
    </div>
    </div>

</>

    )
}

export default LoginSignUp
