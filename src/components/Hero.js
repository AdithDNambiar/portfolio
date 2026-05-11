import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="mini-text">#FULLSTACK #AI #WEBAPPS</p>

        <h1>
          ADITH <br />
          D NAMBIAR
        </h1>

        <h2>SOFTWARE DEVELOPER</h2>

        <p className="hero-desc">
          Building scalable web applications, AI-powered systems,
          automation tools, and startup MVPs with modern technologies.
          Focused on creating high-performance digital experiences for
          businesses and founders.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="yellow-btn">
            Explore Projects ↗
          </a>

          <a
            href="https://github.com/AdithDNambiar"
            target="_blank"
            rel="noreferrer"
            className="outline-btn"
          >
            GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="image-wrapper">
          <img src="/Profilepic.jpeg" alt="profile" />
        </div>
      </motion.div>
    </section>
  );
}