export default function TechStack() {
  const techs = [
    "React",
    "Node.js",
    "JavaScript",
    "Python",
    "Firebase",
    "MySQL",
    "Git",
    "MongoDB",
    "PostegreSQL",
    "AI APIs",
    "Streamlit",
    "Vercel",
    "Render",
  ];

  return (
    <section className="tech" id="tech">
      <div className="section-title">
        <p>TECHNOLOGIES</p>
        <h2>Tech Stack</h2>
      </div>

      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div className="tech-card" key={index}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}