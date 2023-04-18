import { useState, useEffect } from 'react'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';
import ChatPage from '../ChatPage/ChatPage';
import io from "socket.io-client";

export default function App() {

  const [user, setUser] = useState(getUser());
  const [time, setTime] = useState('fetching');

  useEffect(()=>{
    const socket = io();
    socket.on('connect', () => console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),5000)
    })
   socket.on('time', (data)=>setTime(data))
   socket.on('disconnect',()=>setTime('server disconnected'))
 
 },[])

  function updateUser(userState){
    setUser(userState)
  }

  return (
    <main className="App">
       {user ? 
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>
            <Route path="/chat" element={<ChatPage time={time}/>}/>
          </Routes>
        </> 
        :
        <AuthPage setUser={updateUser} />
      }
    </main>
  )
}

