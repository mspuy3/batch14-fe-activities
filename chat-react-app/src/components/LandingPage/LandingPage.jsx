import React, { useState, useEffect } from 'react'
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
 } from "react-router-dom";

 import { useNavigate } from 'react-router'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const API_URL = 'https://slackapi.avionschool.com/api/v1'

const LandingPage = () => {

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("headers")) {
      navigate(`../main`, {replace: true,})
    }
  },[])

  return (
   <div>

   <h1>MU'S CHAT APP LANDING</h1>

   <LoginForm />
   <RegisterForm />

   </div>
  )
}

export default LandingPage