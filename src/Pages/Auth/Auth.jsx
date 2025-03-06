import React, { useState, useContext } from 'react'
import AmazonLogoDark from  "../../assets/Images/AmazonLogoDark.svg";
import Layout from '../../Components/Layout/Layout'
import {Link, useNavigate} from "react-router"
import Classes from "./Auth.module.css"
import { auth } from '../Utility/Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, } from 'firebase/auth'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../Utility/ActionType';
import {BeatLoader} from "react-spinners"

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(password, email); 
  const [{user}, dispatch] = useContext(DataContext);
  console.log(user)
  const [error, setError] = useState("");

  // navigation to home page after sign in or signup
  const navigate =useNavigate();

// loading spinner
  const [loading, setLoading] = useState({
    signin: false,
    signup: false
  });

// sinin and sign up button function 
  const autHandler = async(e)=>{
    e.preventDefault();
    // console.log(e);
    console.log(e.target.name);
    if(e.target.name === "signin"){
      setLoading({...loading, signin:true});
      signInWithEmailAndPassword(auth, email, password ) .then((userInfo)=>{
        console.log(userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({...loading, signin:false});
        navigate("/")    
      }) .catch((err)=>{
        setError(err.message);
        setLoading({...loading, signin:false});
        console.log(err);
      })
    }
    else{
      setLoading({...loading, signup:true})
      
      createUserWithEmailAndPassword(auth, email, password) .then((userInfo)=>{
        console.log(userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({...loading, signup:false})
        navigate("/")
        
        
      }).catch((err)=>{
        setError(err.message);
        console.log(err);
        setLoading({...loading, signup:false})
      })
    }
  }




  return (
    <Layout>
       <section className={Classes.login}>
      <Link to= "/"> <img src = {AmazonLogoDark} alt = "amazonlogo"/> </Link>
    <div className={Classes.login_container}>
      <h1>Sign In</h1>
      <form action="">
        <div>
        <label htmlFor="email"> Email</label>
        <input  value={email}  onChange={(e)=>setEmail(e.target.value)}  type="email" id = "email"  />
        </div>

        <div>
        <label htmlFor="password">Password</label>
        <input value ={password} onChange={(e)=>setPassword(e.target.value)} type="password" id = "password" />
        </div>
        <button type = "submit" name = "signin" onClick={autHandler}  className = {Classes.login_button}>
        {
          loading.signin?<BeatLoader color= "000" size = {15}/>:("Sign In")
        }
        </button>
     
      </form>
      <p>By signin-in you agree to the AMAZON CLONE conditions of use and Sale.please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
    
    <button type = "submit"   name = "signup"  onClick={autHandler} className={Classes.login_register_button}>  
    {
          loading.signup?<BeatLoader color= "#000" size = {15}/>:("Create your Amazon Account")
    }
        </button>
        {error &&( <small syle={{PaddingTop: "5px", color:"red"}}>{error}</small> )}
    </div>
    </section>
   
    </Layout>
  )
}

export default Auth;
