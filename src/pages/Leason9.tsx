import { useAnimate } from "framer-motion";
import { useEffect } from "react";

//*
//*
//*In This Module I Learn The how to use useAnimation
//*
//*

const Leason9 = () => {
  const [scope, animate] = useAnimate();

  //* OnClick Approch
  //   const handleClick = () => {
  //     animate([
  //       [scope.current, { rotate: 45 }],
  //       [scope.current, { rotate: 90 }],
  //       [scope.current, { rotate: 135 }],
  //       [scope.current, { rotate: 180 }],
  //       [scope.current, { x: 200 }],
  //       [scope.current, { x: -200 }],
  //       [scope.current, { x: 0 }],
  //       [scope.current, { rotate: 45 }],
  //       [scope.current, { rotate: 90 }],
  //       [scope.current, { rotate: 135 }],
  //       [scope.current, { rotate: 180 }],
  //     ]);
  //   };

  useEffect(() => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { rotate: 135 }],
      [scope.current, { rotate: 180 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: -200 }],
      [scope.current, { x: 0 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { rotate: 135 }],
      [scope.current, { rotate: 180 }],
    ]);
  }),
    [];
  return (
    <div className="size-80 border-2 flex justify-center items-center">
      <div ref={scope} className="size-40 bg-red-700 rounded-md"></div>
    </div>
  );
};

export default Leason9;
