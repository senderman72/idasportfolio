// MainContent.js

import "./MainContent.css";
import Work from "../assets/Work.jpg";

const MainContent = () => {
  return (
    <div className="main-content-container">
      <img className="work-pic" src={Work} />

      <div className="balls">
        <div className="ball-a">Learn</div>
        <div className="ball-b">Lead</div>
        <div className="ball-c">Grow</div>
      </div>
      <header>
        <h1>Ida Stjernborg</h1>
        <p>HR/Recruiter</p>
      </header>
    </div>
  );
};

export default MainContent;
