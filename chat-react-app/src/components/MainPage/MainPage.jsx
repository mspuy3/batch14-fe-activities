import React, { useState } from 'react'
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
 } from "react-router-dom";

 import { useNavigate } from 'react-router'

import { listUsers } from '../../api/slack-api';

 const API_URL = 'https://slackapi.avionschool.com/api/v1'


const MainPage = () => {
  
   const[isLogIn, setLogIn] = useState(false);

   function logInChecker() {
      if (localStorage.getItem("access-token")) {
         setLogIn(true)
      } else {
         setLogIn(false)
      }
   }

   function signOut() {
      localStorage.clear();
      navigate(`../`, {replace: true,})
   }
  
   let navigate = useNavigate();

   return (
   <div>

         <div>
            <h1>WELCOME TO THE MAIN PAGE!</h1>
            <button onClick={signOut}>Sign Out</button>
         </div>
            <button onClick={listUsers(localStorage.getItem(JSON.stringify("header")))}>Get All Users</button>

   </div>
  )
}

export default MainPage