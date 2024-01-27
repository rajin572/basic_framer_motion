import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

//*
//*
//* In This Leason We Will Learn useAnimationControls
//*
//*
// import { useState } from "react";

const Leason6 = () => {
  const control = useAnimationControls();
  //   const [toggle, setToggle] = useState(true);

  //   const handleToggle = () => {
  //     setToggle((prev) => !prev);

  //     if (toggle) {
  //       control.start({ x: 200, transition: { duration: 1 } });
  //     } else {
  //       control.start({ x: -200, transition: { duration: 1 } });
  //     }
  //   };

  useEffect(() => {
    control.start((i) => ({
      x: 200,
      transition: { duration: i * 2, delay: i * 0.5 },
    }));
  }, [control]);

  return (
    <div className="size-80 border-2 flex justify-center items-center flex-col">
      {/* <button
        onClick={handleToggle}
        className="bg-green-500 mb-10 py-1 px-3 rounded-md"
      >
        Toggle
      </button> */}
      <motion.div
        className="size-40 bg-red-700 rounded-md"
        animate={control}
        custom={1}
      ></motion.div>
      <motion.div
        className="size-40 bg-red-700 rounded-md"
        animate={control}
        custom={2}
      ></motion.div>
      <motion.div
        className="size-40 bg-red-700 rounded-md"
        animate={control}
        custom={3}
      ></motion.div>
    </div>
  );
};

export default Leason6;
