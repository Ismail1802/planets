import { motion, AnimatePresence } from "framer-motion";

export function activeText(planet, content) {
  if (content === "overview") {
    return (
      <motion.p
        key={"p1"}
        initial={{ opacity: 0, scaleY: 1.2 }}
        animate={{ opacity: 1, scaleY: 1 }}
        exit={{ opacity: 0, scaleY: 1.2 }}
        transition={{ duration: 1 }}
      >
        {planet.overview.content}
      </motion.p>
    );
  } else if (content === "internal") {
    return (
      <motion.p
        key={"p2"}
        initial={{ opacity: 0, scaleY: 1.2 }}
        animate={{ opacity: 1, scaleY: 1 }}
        exit={{ opacity: 0, scaleY: 1.2 }}
        transition={{ duration: 1 }}
      >
        {planet.structure.content}
      </motion.p>
    );
  } else {
    return (
      <motion.p
        key={"p3"}
        initial={{ opacity: 0, scaleY: 1.2 }}
        animate={{ opacity: 1, scaleY: 1 }}
        exit={{ opacity: 0, scaleY: 1.2 }}
        transition={{ duration: 1 }}
      >
        {planet.geology.content}
      </motion.p>
    );
  }
}
export function activeImg(planet, content) {
  if (content === "overview") {
    return (
      <motion.img
        key={"img1"}
        initial={{ x: 200, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        exit={{ x: -200, scale: 0 }}
        src={planet.images.planet}
      />
    );
  } else if (content === "internal") {
    return (
      <motion.img
        key={"img2"}
        initial={{ x: 200, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        exit={{ x: -200, scale: 0 }}
        src={planet.images.internal}
      />
    );
  } else {
    return (
      <motion.img
        key={"img3"}
        initial={{ x: 200, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        exit={{ x: -200, scale: 0 }}
        src={planet.images.geology}
      />
    );
  }
}
