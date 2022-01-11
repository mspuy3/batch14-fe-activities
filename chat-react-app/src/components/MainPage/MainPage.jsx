import React, { useState, useEffect } from 'react'
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
 } from "react-router-dom";

 import { useNavigate } from 'react-router'

import { listChannels, listUsers } from '../../api/slack-api';

import ChatListWindow from './ChatListWindow';
import ChatWindow from './ChatWindow';

 const API_URL = 'https://slackapi.avionschool.com/api/v1'


const MainPage = () => {
  
   let navigate = useNavigate();

   let userData = JSON.parse(localStorage.getItem("data"));
   let headerData = JSON.parse(localStorage.getItem("headers"));
   listUsers(headerData);
   listChannels(headerData);

   let displayedName = userData["email"];

   useEffect(() => {
     if (!localStorage.getItem("headers")) {
       navigate(`../`, {replace: true,})
     }
   },[])
 

   function signOut() {
      localStorage.clear();
      navigate(`../`, {replace: true,})
   }
  

   return (
   <div>

         <div>
            <h1>WELCOME TO THE MAIN PAGE {displayedName}!</h1>

            <button>Settings</button>

            <input type='search'
            placeholder='Search User or Channel'
            />

            

            <button>Account</button>

            <button onClick={signOut}>Sign Out</button>
            
            <ChatListWindow />
            <ChatWindow />

         </div>
            

   </div>
  )
}

export default MainPage