import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react';


export default function AuthPage({setUser}) {
  const [signUp, setSignupForm] = useState(false);

  return (
    <main className="App">
      <div className="LoginSwitch">
        <button onClick={() => setSignupForm(!signUp)}> {signUp ? "Have an account? Sign In" : "Don't have an account? SignUp"}
        </button>
      </div>
      <h1>{signUp? "Sign Up" : "Log In"}</h1>
    {signUp ?
      <SignUpForm setUser={setUser}/>
      :
      <LoginForm setUser={setUser}/>
    }
   </main>
  )
}
