import React, { useState } from 'react';

function Education({educations, setEducations }){


    const handleAddEducation = () => {
        const newEducation = {
            id: Date.now(),
            school: "",
            degree: "",
            location: "",
            gradDate: "",
            expanded: true,
        }
        setEducations([...educations, newEducation])
    }

    const handleChange = (index ,e) => {
        const {name, value} = e.target;
        const updatedEducations = educations.map((edu, idx) =>
            idx === index ? {...edu, [name] : value} : edu )
        setEducations(updatedEducations);
    };

    const handleRemove = (index) => {
        const updatedEducations = educations.filter((_, idx) => idx !== index);
        setEducations(updatedEducations);
    }

    const toggleExpand = (index) => {
        const updatedEducations = educations.map((edu, idx) =>
            idx === index ? {...edu, expanded: !edu.expanded} : edu);
        setEducations(updatedEducations);
    }


    return(
        <div className= "education-container">
            <h2>Education</h2>
            <ul>
                {educations.map ((education, index) => (
                    <li key={education.id} className={education.expanded ? "expanded" : "collapsed"}>
                        {education.expanded ? (
                            <div className = "education-form">
                                <section>
                                    <label>School/Institution:</label>
                                    <input
                                        type="text"
                                        name="school"
                                        value={education.school || ""}
                                        onChange = {(e) => handleChange (index, e)}
                                        />
                                </section>
                                <section>
                                    <label>Degree</label>
                                    <input
                                        type="text"
                                        name="degree"
                                        value={education.degree || ""}
                                        onChange = {(e) => handleChange (index ,e)}
                                        />
                                </section>
                                <section>
                                    <label>Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={education.location || ""}
                                        onChange = {(e) => handleChange (index, e)}
                                        />
                                </section>
                                <section>
                                    <label>Graduation/Expected Date</label>
                                    <input
                                       type="date" 
                                       name="gradDate"
                                       value={education.gradDate || ""}
                                       onChange = {(e) => handleChange (index, e)}
                                    />
                                </section>
                                <section className= "edit-education-buttons">
                                    <button className = "delete-edu-button" onClick = {() => handleRemove(index)}>Delete</button>
                                    <button onClick= {() => toggleExpand(index)}>Collapse ▲</button>
                                </section>
                            </div>
                        ) : ( 
                            <div className = "collapsed-view-education">
                                <section className = "collapse-view-details-education">
                                    <div><strong>School/Instituion: </strong> {education.school}</div>
                                    <div><strong>Degree: </strong> {education.degree}</div>
                                </section>
                                <button className = "expand-button" onClick = {() => toggleExpand (index)}> Expand ▼ </button>
                            </div>                           

                        )}
                    </li>
                ))}  
            </ul>
            <button className= "add-education-button" onClick={handleAddEducation}> + Add Education</button>
        </div>
    );


}

export default Education;