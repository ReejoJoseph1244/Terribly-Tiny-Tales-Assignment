import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Posts from './components/Posts';
import { useEffect, useState } from 'react';

function App() {
  const [profiledata,setprofiledata] = useState({
        Name: "Anuj Gosalia",
        Followers: 6482,
        Following: 245,
        Bio: "Co-founder & CEO at Terribly Tiny Tales",
        InstaId: "https://www.instagram.com/anujgosalia/",
        Star : 125,
        Likes : 12,
        Views : "57.8k",
        Liked : "26.0k",
    });
 
    // save data to localStorage
    var saveStateToLocalStorage = () => {
        localStorage.setItem(
            "state",
            JSON.stringify(profiledata)
        );
    };
 
    // Fetch data from local storage
    var getStateFromLocalStorage = () => {
        let data = localStorage.getItem("state");
        if (data !== undefined) {
          setprofiledata(JSON.parse(data));
        }
    };
 
    useEffect(()=>{
        // Fetch data from local storage
        saveStateToLocalStorage();
        getStateFromLocalStorage();
    },[]);
  return (
    <div className="App">
      <Navbar />
      <Header profiledata = {profiledata} />
      <Posts />
    </div>
  );
}

export default App;
