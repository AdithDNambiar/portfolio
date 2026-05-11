import { motion } from "framer-motion";

const services = [
  "Web Development",
  "AI Integrations",
  "MVP Development",
  "Automation Systems",
  "UI/UX Design",
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
            <h3>{service}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}