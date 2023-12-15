import "./Contact.css";
import Navpic from "../assets/navpic.jpg";
import Linkedin from "../assets/Linkedin.jpg";

export default function Contact() {
  return (
    <div className="contact-container">
      <img className="profile-pic " src={Navpic} alt="" />
      <h2>Contact Me</h2>
      <p>Feel free to reach out through the following channels:</p>

      <div className="contact-info">
        <div className="info-item">
          <span className="info-label">Email:</span>
          <span>ida.stjernborg@hotmail.com</span>
        </div>

        <div className="info-item">
          <span className="info-label">Phone:</span>
          <span>+46-70 9545799</span>
        </div>

        <div>
          {" "}
          <a
            href="https://www.linkedin.com/in/ida-stjernborg-62796b222/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="linkedin-logo" src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}
