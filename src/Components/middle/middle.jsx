import React from "react";
import "./middle.css";

function Middle() {
  return (
    <center>
      <div>
        <h1 className="titleengine">Software Engineer</h1>
        <p className="titlesoftware">
          An enthusiastic, self-directed and motivated software developer
          looking for the next challenge using React, CSS, HTML, Javascript,
          JQuery, SQL, Bootstrap, Git, and Visual Studio code to create great
          applications!
        </p>
      </div>
      <h1 className="titlework">Work History</h1>
      <div className="row">
        <div className="card col-md-3">
          <p className="card-title">Independent Project:</p>
          Developed an Android App for use by Physical Therapists to assess the
          balance of their patients. I first developed this app for a web
          browser, then used React Native for deployment to an Android device.          
          It is now on Google Play Store.<br/> <br/> <strong>I am now working on a Pet App</strong>
        </div>

        <div className="card col-md-3">
          <p className="card-title">HearMe Technology:</p> Application for a
          device to help people with dysphagia. Developed software for hardware
          for a state of the art device to assist individuals with dysphagia.
          The software is written is C++ and is designed to run on a STM32 micro
          computer to interface with the speaker and microphone extension for
          the board to record and amplify audio intelligibly.
        </div>

        <div className="card col-md-3">
          <p className="card-title">Queen's Web:</p> Develop an enterprise level
          application for a client from the ground up utilizing a MERN stack for
          the development process. Application similar to the Groupon app.
        </div>
      </div>
    </center>
  );
}
export default Middle;
