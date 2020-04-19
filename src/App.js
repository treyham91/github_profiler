import React from 'react';
import UserForm from "./components/UserForm";
import UserProfile from "./components/UserProfile";
import './App.css';

const App = () => {

  return (
    <div className="App">
        <div id="toolbar">
            <p>GitHub Tracker</p>
            <UserForm />
        </div>
        <UserProfile />
    </div>
  );
}

export default App;
