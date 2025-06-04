import './App.css';
import { useState } from 'react';

function App() {
  const [showResume, setShowResume] = useState(false);

  const handleResumePopup = () => {
    setShowResume(true);
  };

  const handleClosePopup = () => {
    setShowResume(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Adith D Nambiar</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Qualifications</a>
          <a href="#internships">Internships</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <h1>Hi, I am <br /> <span>ADITH D NAMBIAR</span></h1>
          <h2>Full Stack Developer</h2>
          <p>
            Aspiring Full Stack Developer | React • Node.js • Firebase • AI Integration. Passionate and self-driven developer with hands-on experience building fullstack web applications, integrating AI models, and solving real-world problems. Fast learner, effective communicator, and ready to deliver impact from day one.
          </p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={handleResumePopup}>View Resume</button>
            <a href="/Adith_Resume.pdf" download className="btn outline">Download Resume</a>
          </div>
        </div>
        <div className="hero-img">
          <img src="/profile.jpeg" alt="Adith D Nambiar" />
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Invoice Reminder Web App</strong><br />
            Full-stack app using React, Node.js, and Firebase to automate daily invoice reminders via Gmail SMTP. Included admin dashboard, cron scheduling, and real-time status tracking.
            <a href="https://github.com/AdithDNambiar/Invoice_reminder" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
          <li>
            <strong>Cyanogen</strong><br />
            Cyanogen is a personal task manager web app built using React that allows users to create, filter, and manage tasks with tags like Work, Personal, and Urgent.
It features intuitive UI, local storage support, and real-time tag-based filtering for better productivity.
            <a href="https://github.com/AdithDNambiar/Cyanogen" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
          <li>
            <strong>Activity Tracker</strong><br />
            Full-stack app using React, Node.js. User can add their data of activity and it will be shown in charts/graphs.
            <a href="https://github.com/AdithDNambiar/Activity-Tracker" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
          <li>
            <strong>News Article Classification (College Major Project)</strong><br />
            Developed an NLP model using Hugging Face Transformers to classify news articles by sentiment and topic. 
            Integrated with a real-time API backend and a React frontend for live analysis.
            <a href="https://github.com/AdithDNambiar/News-Classification-System" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
          <li>
            <strong>Weather Display System (College Mini Project)</strong><br />
            Built with HTML, CSS, and JavaScript. Used AccuWeather and Visual Crossing APIs to fetch weather data, and Leaflet.js for map integration and geolocation-based display.
          </li>
          <li>
            <strong>Certificate Generator App </strong><br />
            Created a Python-Streamlit app for bulk certificate generation using Excel templates. Supported drag-and-drop design, logo/signature placement, and live previews.
            <a href="https://github.com/AdithDNambiar/Certificat_generator" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
          
        </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, Python, C, Java (basic)</li>
          <li>React, HTML, CSS</li>
          <li>Node.js, Express.js</li>
          <li>Firebase, MySQL</li>
          <li>Hugging Face, PyTorch, TensorFlow (basic)</li>
          <li>Git, GitHub, Postman, Streamlit</li>
        </ul>
      </section>

      <section id="education">
        <h2>Qualifications</h2>
        <ul>
          <li>B.Tech - Kerala Technological University (2021–2025)</li>
          <li>Higher Secondary – GBVHSS madayi - 90.1%</li>
          <li>10th – Ursuline Senior Secondary School - 88.4%</li>
        </ul>
      </section>

      <section id="internships">
        <h2>Internships</h2>
        <ul>
          <li>
            <strong>Web Development Intern – Immensphere (via Teachnook)</strong><br />
            Gained experience in building responsive UIs, understanding deployment workflows, and collaborating using agile practices.
          </li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:adiadithdnambiar@gmail.com">adiadithdnambiar@gmail.com</a></p>
        <p>Phone: +91 8281205745</p>
        <p>
          <a href="https://linkedin.com/in/adith-d-nambiar-498b53247" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
          <a href="https://github.com/AdithDNambiar" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </section>

      {/* Resume Popup Modal */}
      {showResume && (
        <div className="resume-overlay" onClick={handleClosePopup}>
          <div className="resume-popup" onClick={(e) => e.stopPropagation()}>
            <div className="resume-header">
              <h2>RESUME</h2>
              <div className="resume-actions">
                <a href="/Adith_Resume.pdf" download className="download-btn" title="Download PDF">⬇</a>
                <button className="close-btn" onClick={handleClosePopup}>✕</button>
              </div>
            </div>
            <embed src="/Adith_Resume.pdf" type="application/pdf" width="100%" height="500px" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
