import React from 'react';
import SingleContactCard from "./components/SingleContactCard";
import "./App.css";
import Decrement from './components/Decrement';

function App() {
  return (
    <div className="App">

        <h1>Contact Cards</h1>
    
        <SingleContactCard 
            phoneNumber="646-309-5663"
            name="Naveed Naqi"
            email="nnaqi5534@gmail.com"
        ></SingleContactCard>

        <SingleContactCard 
            phoneNumber="646-267-6197"
            name="Bushra Naqi"
            email="nnaqi5534@bths.edu"
        ></SingleContactCard>

        <SingleContactCard 
            phoneNumber="646-918-6192"
            name="Ali Naqi"
            email="naveed.naqi30@myhunter.cuny.edu"
        ></SingleContactCard>

        <Decrement num={10}></Decrement>
    </div>
  );
}

export default App;
