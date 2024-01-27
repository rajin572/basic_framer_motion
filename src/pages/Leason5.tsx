import { motion } from "framer-motion";

//*
//*
//* In This Leason We Will Learn keyframe based animation and how to use different type animation at a time
//* and we learn to how to separate diffrent types of animation
//*
//*

const Leason5 = () => {
  const variant = {
    initial: {
      x: 0,
      y: 0,
      opacity: 0,
    },
    animation: {
      x: [0, 200, -200, 0],
      y: [0, 200, -200, 0],
      rotate: [0, 200, -200, 0],
      opacity: 1,
      transition: {
        // ease: "linear",
        duration: 5,
        repeat: Infinity,
        opacity: {
          duration: 0.5,
        },
        rotate: {
          duration: 0.5,
          repeat: Infinity,
        },
      },
    },
  };
  return (
    <div className="size-80 border-2 flex justify-center items-center ">
      <motion.div
        className="size-40 bg-red-700 rounded-md"
        variants={variant}
        initial="initial"
        animate="animation"
        drag
        // transition={{ duration: 1, repeat: Infinity }}
      ></motion.div>
    </div>
  );
};

export default Leason5;
