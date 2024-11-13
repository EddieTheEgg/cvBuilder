import { useState } from "react";
import './personalInfo.css';

export default function PersonalInfo({currentInfo, updateInfo}){


    return (
        <>
        <section className="personalForm">
            <h2 className="header">Personal Info</h2>
            <div className= "info-inputs">
                <section className="name">
                    <div>Name</div>
                    <input type="text" name="name" value = {currentInfo.name} placeholder = "John Doe" onChange={updateInfo}/>
                </section>
                <section className="email">
                    <div>E-Mail</div>
                    <input type="text" name="email" value = {currentInfo.email} placeholder = "something@gmail.com" onChange={updateInfo}/>
                </section>
                <section className="phone">
                    <div>Phone</div>
                    <input type="text" name="phone" value = {currentInfo.phone} placeholder = "(123)-456-7890" onChange={updateInfo}/>
                </section>
                <section className="location">
                    <div>Location</div>
                    <input type="text" name="location" value = {currentInfo.location} placeholder = "Boston, MA" onChange={updateInfo}/>
                </section>
                <section className="objective">
                    <div>Objective</div>
                    <textarea rows="5" name="objective"value = {currentInfo.objective} placeholder = "" onChange = {updateInfo}>...</textarea>
                </section>
            </div>
        </section>
       
        </>
    )

}