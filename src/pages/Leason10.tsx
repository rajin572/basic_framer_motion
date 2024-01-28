import { motion, useDragControls } from "framer-motion";

//*
//*
//*In This Module I Learn The how to use useDragControll
//*
//*

const Leason10 = () => {
  const control = useDragControls();
  return (
    <div className="size-80 border-2 flex justify-center items-center flex-col">
      <div
        onPointerDown={(e) => control.start(e)}
        className="w-40 h-10 bg-blue-700 rounded-md"
      ></div>
      <motion.div
        className="size-40 bg-red-700 rounded-md"
        drag="x"
        dragControls={control}
      ></motion.div>
    </div>
  );
};

export default Leason10;
