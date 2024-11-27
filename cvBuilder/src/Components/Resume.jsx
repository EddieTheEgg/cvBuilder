import './resume.css';

function convertDate(date) {
  if (!date) return '';
  
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

function Resume({ resume, experiences, educations }) {
  return (
    <>
      <div className="resume">
        <section className="personal">
          <h3>{resume.name}</h3>
          <section className="personal-details">
            <div>{resume.phone}</div>
            <div>  |  </div>
            <div>{resume.email}</div>
            <div>  |  </div>
            <div>{resume.location}</div>
          </section>
          <section className="objective-description">
            <div>{resume.objective}</div>
          </section>
        </section>
        <hr />

        {/* Professional Experience Section */}
        <section className="experience-section">
          <section className="experience">
            <h4>Professional Experience</h4>
            {experiences.length > 0 ? (
              experiences.map((exp, index) => (
                <div key={exp.id || index} className="experience-item">
                  <section className="company-row">
                    <h5>{exp.company}</h5>
                    <p>{convertDate(exp.startDate)} - {convertDate(exp.endDate)}</p>
                  </section>
                  <section className="position-row">
                    <p><i>{exp.position}</i></p>
                    <p>{exp.workLocation}</p>
                  </section>
                  <ul className="job-description" >
                    {(exp.responsibilities || '').split('\n').map((task, taskIndex) => (
                      <li className ="specific-desc" key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className = "no-experience">No experiences added yet.</p>
            )}
          </section>
        </section>

        <hr />
        
        {/* Educational Studies Section*/}
        <section className="education-section">
          <section className ="education">
            <h4>Education</h4>
            {educations.length > 0 ? (
              educations.map((edu, index) => (
                <div key={edu.id || index} className = "education-item">
                  <section className = "school-row">
                    <h5>{edu.school}</h5>
                    <div>{convertDate(edu.gradDate)}</div>
                  </section>
                  <section className = "degree-row">
                    <p><i>{edu.degree}</i></p>
                    <p>{edu.location}</p>
                  </section>
                </div>
              ))
            ) : (
              <p className= "no-education">No Education added.</p>
            )}
          </section>
        </section>


       
      </div>
    </>
  );
}

export default Resume;
