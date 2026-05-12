import { motion } from "framer-motion";

const services = [
  {
    title: "Startup MVP Development",
    desc: "Rapidly building scalable MVPs for startups and founders."
  },
  {
    title: "AI Integrations",
    desc: "Integrating AI APIs, automation workflows, and intelligent systems."
  },
  {
    title: "Full Stack Web Apps",
    desc: "Modern React + Node.js applications with scalable architecture."
  },
  {
    title: "Automation Systems",
    desc: "Business workflow automation tools and internal management systems."
  },
  {
    title: "Dashboard & Admin Panels",
    desc: "Clean and responsive dashboards for analytics and operations."
  }
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-title">
        <p>WHAT I DO</p>
        <h2>Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
  <motion.div
    className="service-card"
    key={index}
    whileHover={{ y: -10 }}
  >
    <h3>{service.title}</h3>
    <p>{service.desc}</p>
  </motion.div>
))}
      </div>
    </section>
  );
}