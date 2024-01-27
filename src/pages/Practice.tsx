import { motion } from "framer-motion";
import { useRef } from "react";

const Practice = () => {
  const variant = {
    initial: {
      opacity: 0.5,
      scale: 0.8,
    },
    animate: {
      opacity: 0.7,
      scale: 1,
      transition: { ease: "easeInOut", duration: 1.5 },
    },
    hover: { opacity: 1, scale: 1.1, transition: { duration: 1 } },
    tap: { scale: 1.2, boxShadow: "5px 5px 5px #2c2c2c" },
    drag: { scale: 1.2, boxShadow: "10px 5px 5px #2c2c2c" },
  };

  const parantRef = useRef(null);

  return (
    <div
      ref={parantRef}
      className="size-80 border-2 flex justify-center items-center "
    >
      <motion.div
        className="size-40 bg-red-700 rounded-md"
        variants={variant}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap={{ boxShadow: "10px 5px 5px #2c2c2c" }}
        drag
        dragSnapToOrigin
        dragConstraints={parantRef}
        whileDrag="drag"
      ></motion.div>
    </div>
  );
};

export default Practice;
