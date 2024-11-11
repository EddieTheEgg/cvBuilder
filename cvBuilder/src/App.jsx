import { useState } from 'react'
import PersonalInfo from './Components/personalInfo'
import Resume from './Components/Resume'
import './App.css'

function App() {
  const [currentInfo, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    objective: "",
  });

  function updateInfo(e) {
    setInfo(prevInfo => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
    <div className = "web-layout">
      <PersonalInfo currentInfo = {currentInfo} updateInfo={updateInfo}/>
      <Resume resume={currentInfo}/>
    </div>
     
    </>
  )
}

export default App
