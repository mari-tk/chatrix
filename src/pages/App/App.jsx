import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">

        <AuthPage setUser={setUser} />
      
    </main>
  );
}
