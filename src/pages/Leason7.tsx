import { useCycle } from "framer-motion";
import { motion } from "framer-motion";

//*
//*
//*In This Module I Learn The how to set toggle animation with useCycle
//*
//*

const Leason7 = () => {
  // const [x, cycle] = useCycle(0, 100, -100, 200, -200);
  const animation = [
    { x: 0, y: 0 },
    { x: 100, y: 100 },
    { x: -100, y: 100 },
    { x: -100, y: -100 },
    { x: 100, y: -100 },
  ];
  const [x, cycle] = useCycle(...animation);
  return (
    <div className="size-80 border-2 flex justify-center items-center">
      <motion.div
        className="size-40 bg-red-700 rounded-md"
        animate={x}
        onTap={() => cycle()}
      ></motion.div>
    </div>
  );
};

export default Leason7;
