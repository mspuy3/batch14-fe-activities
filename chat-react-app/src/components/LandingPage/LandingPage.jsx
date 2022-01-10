import React, { useState } from 'react'
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link
 } from "react-router-dom";

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const API_URL = 'https://slackapi.avionschool.com/api/v1'

const LandingPage = () => {


  return (
   <div>

   <h1>MU'S CHAT APP LANDING</h1>

   <LoginForm />
   <RegisterForm />

   </div>
  )
}

export default LandingPage