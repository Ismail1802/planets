import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import data from "./data.json";
const Footer = ({ active }) => {
  const planet = data.find((planet) => planet.name === active);
  return (
    <motion.footer
      variants={{
        hidden: {
          translateY: 50,
          scale: 0,
          opacity: 0,
        },
        visible: {
          translateY: 0,
          scale: 1,
          opacity: 1,
        },
      }}
      transition={{ duration: 1.5 }}
      initial="hidden"
      animate="visible"
      className="footer"
    >
      <div className="footer__content">
        <article className="footer__article">
          <p className="footer__stats">Rotation Time</p>
          <p className="footer__days">
            <CountUp end={planet.rotation.replace(/\D/g, "")} /> DAYS
          </p>
        </article>
        <article className="footer__article">
          <p className="footer__stats">Revolution Time</p>
          <p className="footer__days">
            <CountUp end={planet.revolution.replace(/\D/g, "")} /> DAYS
          </p>
        </article>
        <article className="footer__article">
          <p className="footer__stats">Radius</p>
          <p className="footer__days">
            <CountUp end={planet.radius.replace(/\D/g, "")} /> KM
          </p>
        </article>
        <article className="footer__article">
          <p className="footer__stats">Average Temp.</p>
          <p className="footer__days">
            <CountUp end={planet.temperature.replace(/\D/g, "")} /> °C
          </p>
        </article>
      </div>
    </motion.footer>
  );
};

export default Footer;
