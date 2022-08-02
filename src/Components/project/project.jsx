import React from "react";
import "./project.css";

function Project() {
  return (
    <div>
      {/* {" "} */}

      <h1 className="title">Projects</h1>
      <div className="grid-container">
        <div className="item1">
          <strong className="cardtitle">Berg Android App:</strong>{" "}
          <p className="cardp">
            I created this app for Physical Therapist to use for their clients
            when testing their balance. I first developed a web app then
            converted it to a mobile app with the use of React Native.
            <a href="https://play.google.com/store/apps/details?id=com.jazfrey.NewBergProject">
              "Find it in the Google Play Store here"
            </a>
          </p>
        </div>

        <div className="my-card">
          <div className="front">Tandem App:</div>
          <div className="back">
            {" "}
            I created a game that has multiple choice questions with radio
            buttons with the answers and questions in data.json file. I used
            jquery, javascript and react.
            <a href="https://trivia-question-app.herokuapp.com/">
              "https://trivia-question-app.herokuapp.com/"
            </a>
          </div>
        </div>

        <div className="my-card">
          <div className="front">Tinetti App:</div>
          <div className="back">
            Set up my original Tinetti app to be more user friendly for Physical
            Therapist to use.
            <a href="https://tinetti-app.herokuapp.com/">
              "https://tinetti-app.herokuapp.com/"
            </a>
          </div>
        </div>

        <div className="my-card">
          <div className="front">Berg App:</div>
          <div className="back">
            A Balance Assessment App that Physical Therapist use to determine a
            patient's ability (or inability) to safely balance during a series
            of predetermined tasks.
            <a href="https://berg-balance-app.herokuapp.com/">
              "https://berg-balance-app.herokuapp.com/"
            </a>
          </div>
        </div>

        <div className="my-card">
          <div className="front">Health App:</div>
          <div className="back">
            {" "}
            An app that uses an API that pulls in information about a food that
            you type into the search bar.
            <a href="https://checkout-healthy-app.herokuapp.com/">
              "https://checkout-healthy-app.herokuapp.com/"
            </a>
          </div>
        </div>

        <div className="my-card">
          <div className="front">Count Down Calendar:</div>
          <div className="back">
            {" "}
            An calendar to count down until Christmas. Click on each box and it
            will open with a picture inside with different music playing with
            each box. Use React, javascript and Bootstrap
            <a href="https://countdown-calendar.herokuapp.com/">
              "https://countdown-calendar.herokuapp.com/"
            </a>
          </div>
        </div>

        <div className="my-card">
          <div className="front">Book Worm:</div>
          <div className="back">
            This was a group project for the GA Bootcamp. I did the frontend
            with React and javascript, another person did Express.js for the
            backend, and other person did the CSS with Bootstrap.
            <a href="https://mighty-meadow-95753.herokuapp.com/">
              "https://mighty-meadow-95753.herokuapp.com/"
            </a>
          </div>
        </div>

        <div className="item8">
          <strong>My Pet App:</strong> For the frontend I am using React and javascript, styling 
          it with CSS and styling it to be responsive. For the backend I am learning Firebase. It continues to be a work
          in progress. I add more to it as I talk to different veterinarians and others to see
          the best way to design the app. It can be found on my github.    
        </div>

        <div className="item8">
          <strong>GitHub:</strong> Link to my github account to see all my
          projects.
          <a href="https://github.com/Sjazfrey">
            "https://github.com/Sjazfrey"
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
