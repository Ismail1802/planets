import React, { useEffect, useState } from "react";
import data from "./data.json";
import "../styles/main.scss";
import { activeImg, activeText } from "../utils/utils";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
const Main = ({ active }) => {
  const [content, setContent] = useState("overview");
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setContent("overview");
  }, [active]);

  return (
    <main className="main">
      <div className="main__wrapper">
        {data.map((planet, index) => {
          if (planet.name === active)
            return (
              <React.Fragment key={index}>
                <ul className="main__mobile-nav">
                  <li
                    onClick={() => setContent("overview")}
                    className={`main__mobile-link ${planet.name} ${
                      content === "overview" ? "active" : ""
                    }`}
                  >
                    Overview
                  </li>
                  <li
                    onClick={() => setContent("internal")}
                    className={`main__mobile-link ${planet.name} ${
                      content === "internal" ? "active" : ""
                    }`}
                  >
                    Structure
                  </li>
                  <li
                    onClick={() => setContent("surface")}
                    className={`main__mobile-link ${planet.name} ${
                      content === "surface" ? "active" : ""
                    }`}
                  >
                    Surface
                  </li>
                </ul>
                <section className="main__content">
                  <motion.div
                    variants={{
                      hidden: {
                        translateX: 300,
                        scale: 0,
                        rotate: 50,
                      },
                      visible: {
                        translateX: 0,
                        scale: 1,
                        rotate: 0,
                      },
                    }}
                    transition={{ duration: 1.5 }}
                    initial="hidden"
                    animate="visible"
                    className="main__pic-cont"
                  >
                    <picture
                      className={
                        content === "surface"
                          ? "main__picture main__picture-show"
                          : "main__picture"
                      }
                    >
                      <AnimatePresence mode="wait">
                        {activeImg(planet, content)}
                      </AnimatePresence>
                    </picture>
                    <picture
                      className={
                        content === "surface"
                          ? "main__surface show"
                          : "main__surface"
                      }
                    >
                      <img src={planet.images.planet} alt="" />
                    </picture>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: {
                        translateX: 300,
                        scale: 0,
                        opacity: 0,
                      },
                      visible: {
                        translateX: 0,
                        scale: 1,
                        opacity: 1,
                      },
                    }}
                    transition={{ duration: 1 }}
                    initial="hidden"
                    animate="visible"
                    className="main__info"
                  >
                    <div className="main__text">
                      <motion.h2
                        initial={{ x: 100, y: 100, scale: 0 }}
                        animate={{ x: 0, y: 0, scale: 1 }}
                        transition={{ duration: 0.7 }}
                      >
                        {planet.name}
                      </motion.h2>
                      <div className="main__overview">
                        <AnimatePresence mode="wait">
                          {activeText(planet, content)}
                        </AnimatePresence>
                      </div>
                      <div className="main__source">
                        <span>Source:</span>
                        <a target="__blank" href={planet.overview.source}>
                          Wikipedia
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                          >
                            <path
                              fill="#808080"
                              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                              opacity="1"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="main__buttons-cont">
                      <button
                        disabled={isChanging}
                        onClick={() => {
                          setContent("overview");
                          setIsChanging(true);
                          setTimeout(() => setIsChanging(false), 500);
                        }}
                        className={`main__button ${planet.name} ${
                          content === "overview" ? "active" : ""
                        }`}
                      >
                        <span>01</span> Overview
                      </button>
                      <button
                        disabled={isChanging}
                        onClick={() => {
                          setContent("internal");
                          setIsChanging(true);
                          setTimeout(() => setIsChanging(false), 500);
                        }}
                        className={`main__button ${planet.name} ${
                          content === "internal" ? "active" : ""
                        }`}
                      >
                        <span>02</span> Internal Structure
                      </button>
                      <button
                        disabled={isChanging}
                        onClick={() => {
                          setContent("surface");
                          setIsChanging(true);
                          setTimeout(() => setIsChanging(false), 500);
                        }}
                        className={`main__button ${planet.name} ${
                          content === "surface" ? "active" : ""
                        }`}
                      >
                        <span>03</span> Surface Geology
                      </button>
                    </div>
                  </motion.div>
                </section>
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
                        <CountUp end={planet.rotation.replace(/\D/g, "")} />{" "}
                        DAYS
                      </p>
                    </article>
                    <article className="footer__article">
                      <p className="footer__stats">Revolution Time</p>
                      <p className="footer__days">
                        <CountUp end={planet.revolution.replace(/\D/g, "")} />{" "}
                        DAYS
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
                        <CountUp end={planet.temperature.replace(/\D/g, "")} />{" "}
                        °C
                      </p>
                    </article>
                  </div>
                </motion.footer>
              </React.Fragment>
            );
        })}
      </div>
    </main>
  );
};

export default Main;
