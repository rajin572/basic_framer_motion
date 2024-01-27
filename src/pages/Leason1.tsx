import { motion } from "framer-motion";
const Leason1 = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 0.5,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.5,
        // repeat: Infinity,
        // repeatType: "reverse",
      },
    },
    hover: {
      opacity: 1,
      // transition: {
      //   duration: 1,
      // },
    },
    // tap: {
    //   rotate: 45,
    // },
  };
  const child = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 100, scale: 1 },
  };
  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap justify-center items-center p-5 gap-5"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        drag
        dragSnapToOrigin
        // dragConstraints={{ bottom: 200, top: -200, left: -200, right: 200 }}
        // whileTap="tap"
      >
        <motion.div
          variants={child}
          className="size-20 bg-cyan-500 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          className="size-20 bg-cyan-500 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          className="size-20 bg-cyan-500 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          className="size-20 bg-cyan-500 rounded-sm"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Leason1;
