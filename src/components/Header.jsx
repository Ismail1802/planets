import React, { useState } from "react";
import "../styles/header.scss";
import data from "./data.json";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
const Header = ({ active, setActive }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const planets = data.map((planet) => planet.name);
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">The planets</h1>
        <div
          onClick={() => {
            setOpenMenu(true);
            document.querySelector("body").style.overflow = "hidden";
          }}
          className="header__hamburger"
        >
          <img src="./assets/icon-hamburger.svg" alt="" />
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            {planets.map((name) => {
              return (
                <li
                  onClick={() => setActive(name)}
                  className={`header__li ${name} ${
                    name === active ? "active" : ""
                  } `}
                  key={name}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="header__nav-menu"
          >
            <div className="header__menu-cont">
              <h1 className="header__menu-title">The planets</h1>
              <IoClose
                onClick={() => {
                  setOpenMenu(false);
                  document.querySelector("body").style.overflow = "auto";
                }}
                size={30}
              />
            </div>
            <ul className="header__menu-nav">
              {planets.map((name, i) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, translateX: -100 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    onClick={() => {
                      setActive(name);
                      setOpenMenu(false);
                      document.querySelector("body").style.overflow = "auto";
                    }}
                    className={`header__menu-li ${name} ${
                      name === active ? "active" : ""
                    } `}
                    key={name}
                  >
                    <div className="round"></div>
                    <p>{name}</p>
                    <img src="./assets/icon-chevron.svg" alt="" />
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
