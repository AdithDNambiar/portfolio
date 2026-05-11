import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Learning App",
    desc: "Built an E-Learning App for Solution Ed-Tech and Tuitions. Built this app with 2 portals for admin and students",
    image: "/project1.png",
    link: "https://www.linkedin.com/posts/adith-d-nambiar-498b53247_freelance-developer-edtech-ugcPost-7456968407217774592-BbSF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD03X_QBy3oYXTugCV7zoGXkyXOmnww28VU",
  },
  {
    title: "E-Commerce App",
    desc: "E-Commerce app where users can see the listed items and order them while admin can add and manage them.",
    image: "/project2.png",
    link: "https://www.linkedin.com/posts/adith-d-nambiar-498b53247_fullstack-reactjs-nodejs-ugcPost-7449485886486114306-CNmu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD03X_QBy3oYXTugCV7zoGXkyXOmnww28VU",
  },
  {
    title: "Social Media Platform",
    desc: "A social media app where users can post, like comment, follow and chat.",
    image: "/project3.png",
    link: "https://www.linkedin.com/posts/adith-d-nambiar-498b53247_instagram-facebook-buildinpublic-ugcPost-7442147419678568449-BCgy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD03X_QBy3oYXTugCV7zoGXkyXOmnww28VU",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <p>FEATURED WORK</p>
        <h2>Selected Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            key={index}
            whileHover={{ scale: 1.03 }}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}