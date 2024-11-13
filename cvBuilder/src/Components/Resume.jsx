import './resume.css';

function Resume({ resume, experiences }) {
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
                  <h5>{exp.company}s</h5>
                  <p>{exp.position}</p>
                  <p>{exp.location}</p>
                  <p>{exp.startDate} - {exp.endDate}</p>
                  <ul>
                    {/* Add a check to ensure 'responsibilities' is defined */}
                    {(exp.responsibilities || '').split('\n').map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>No experiences added yet.</p>
            )}
          </section>
        </section>

        <hr />

        <section className="education">
          <h4>Education</h4>
          {/* You can add education details here in a similar way */}
        </section>
      </div>
    </>
  );
}

export default Resume;
