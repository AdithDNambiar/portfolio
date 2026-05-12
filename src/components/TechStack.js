export default function TechStack() {
  const techs = [
    "REACT",
    "NODE.JS",
    "JAVASCRIPT",
    "PYTHON",
    "FIREBASE",
    "MYSQL",
    "GIT",
    "MONGODB",
    "POSTEGRESQL",
    "AI APIs",
    "NEXT.JS",
    "EXPRESS.JS",
    "VERCEL",
    "RENDER",
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