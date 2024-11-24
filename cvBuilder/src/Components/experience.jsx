import React, { useState } from 'react';

function Experience({ experiences, setExperiences }) {
  // Function to handle adding a new experience entry
  const handleAddExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: "",        // Initialize with empty string
      position: "",       // Initialize with empty string
      workLocation: "",   // Initialize with empty string
      startDate: "",      // Initialize with empty string
      endDate: "",        // Initialize with empty string
      responsibilities: "", // Initialize with empty string
      expanded: true,
    };
    setExperiences([...experiences, newExperience]);
  };

  // Function to handle input changes for each experience
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiences = experiences.map((exp, idx) => 
      idx === index ? { ...exp, [name]: value } : exp
    );
    setExperiences(updatedExperiences);
  };

  // Function to remove an experience entry
  const handleRemove = (index) => {
    const updatedExperiences = experiences.filter((_, idx) => idx !== index);
    setExperiences(updatedExperiences);
  };

  // Function to toggle expand/collapse for an experience
  const toggleExpand = (index) => {
    const updatedExperiences = experiences.map((exp, idx) => 
      idx === index ? { ...exp, expanded: !exp.expanded } : exp
    );
    setExperiences(updatedExperiences);
  };

  return (
    <div className="experience-container">
      <h2>Professional Experience</h2>
      <ul className="experience-list">
        {experiences.map((experience, index) => (
          <li key={experience.id} className={experience.expanded ? "expanded" : "collapsed"}>
            {experience.expanded ? (
              <div className="experience-form">
                <section>
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={experience.company || ""} // Ensure controlled component
                    onChange={(e) => handleChange(index, e)}
                  />
                </section>
                <section>
                  <label>Position/Title</label>
                  <input
                    type="text"
                    name="position"
                    value={experience.position || ""} // Ensure controlled component
                    onChange={(e) => handleChange(index, e)}
                  />
                </section>


              <section>
                <label>Location</label>
                  <input
                    type="text"
                    name="workLocation"
                    value={experience.workLocation || ""} // Ensure controlled component
                    onChange={(e) => handleChange(index, e)}
                  />
              </section>
              <section>
              <label>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={experience.startDate || ""} // Ensure controlled component
                  onChange={(e) => handleChange(index, e)}
                />
              </section>

              <section>
                <label>End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={experience.endDate || ""} // Ensure controlled component
                    onChange={(e) => handleChange(index, e)}
                  />
              </section>
              <section>
                <label>Responsibilities</label>
                  <textarea
                    rows= "5"
                    name="responsibilities"
                    value={experience.responsibilities || ""} // Ensure controlled component
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Use * to create a • bullet point"
                  />
              </section>
              <section className= "edit-experience-buttons">
                <button className = "delete-button" onClick={() => handleRemove(index)}>Delete</button>
                <button onClick={() => toggleExpand(index)}>Collapse ▲</button>
              </section>
              </div>
            ) : (
              <div className="collapsed-view">
                <section className="collapse-view-details">
                  <div><strong>Company: </strong> {experience.company}</div>
                  <div><strong>Position: </strong> {experience.position}</div>
                </section>
                <button  className= "expand-button" onClick={() => toggleExpand(index)}>Expand ▼</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button className = "add-experience-button" onClick={handleAddExperience}>+ Add Experience</button>
    </div>
  );
}

export default Experience;
