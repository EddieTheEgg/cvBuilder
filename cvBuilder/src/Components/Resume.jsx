import './resume.css';

function Resume ({resume}){
    return (
    <>
    <div className= "resume">
        <section className= "personal">
            <h3>{resume.name}</h3>
            <section className ="personal-details">
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
        <hr></hr>
        <section className= "experience">Experience</section>
        <hr></hr>
        <section>Education</section>
    </div>
    </>
    )
}

export default Resume; 