import { useState } from 'react';
import PersonalInfo from './Components/personalInfo.jsx';
import Resume from './Components/Resume';
import Experience from './Components/experience.jsx';
import './App.css';

function App() {
  const [currentInfo, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    objective: "",
  });

  const [experiences, setExperiences] = useState([]);

  // Update function for personal information
  function updateInfo(e) {
    setInfo(prevInfo => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <div className="web-layout">
        <div className="input-fields">
          <PersonalInfo currentInfo={currentInfo} updateInfo={updateInfo} />
          <hr />
          <Experience experiences={experiences} setExperiences={setExperiences} />
        </div>
        <Resume experiences={experiences} resume={currentInfo} />
      </div>
    </>
  );
}

export default App;
