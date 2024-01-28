import { motion, useInView } from "framer-motion";
import { useRef } from "react";

//*
//*
//*In This Module I Learn The how to use InView animation
//*
//*

const Leason8 = () => {
  const view = useRef<HTMLDivElement>(null);

  const inView = useInView(view);

  return (
    <div className="size-80 border-2 flex justify-center items-center">
      <motion.div
        ref={view}
        className="size-40 bg-red-700 rounded-md"
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { duration: 1 } }
            : { opacity: 0, x: -500, transition: { duration: 1 } }
        }
      ></motion.div>
    </div>
  );
};

export default Leason8;
