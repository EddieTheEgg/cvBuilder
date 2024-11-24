import { useState } from 'react';
import PersonalInfo from './Components/personalInfo.jsx';
import Resume from './Components/resume.jsx';
import Experience from './Components/experience.jsx';
import Education from './Components/education.jsx';
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
  const [educations, setEducations] = useState([]);

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
          <hr />
          <Education educations = {educations} setEducations={setEducations} />
        </div>
        <Resume experiences={experiences} educations= {educations} resume={currentInfo} />
      </div>
    </>
  );
}

export default App;


