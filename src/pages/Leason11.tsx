import { motion, useMotionValue, useTransform } from "framer-motion";

//*
//*
//*In This Module I Learn The how to use useDragControll
//*
//*

const Leason11 = () => {
  const x = useMotionValue(0);
  //   const opacity = useTransform(x, [-500, 500], [0, 1]);
  const rotate = useTransform(x, [-500, 500], [0, 180]);
  const scale = useTransform(x, [-500, 500], [0.5, 1.5]);
  return (
    <div className="size-80 border-2 flex justify-center items-center flex-col">
      <motion.div
        className="size-40 bg-red-700 rounded-md"
        style={{ x, rotate, scale }}
        drag="x"
        dragSnapToOrigin
        dragConstraints={{ left: -300, right: 300 }}
      ></motion.div>
    </div>
  );
};

export default Leason11;
