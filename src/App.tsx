import "./App.css";
import Leason1 from "./pages/Leason1";
import Leason10 from "./pages/Leason10";
import Leason11 from "./pages/Leason11";
import Leason4 from "./pages/Leason4";
import Leason5 from "./pages/Leason5";
import Leason6 from "./pages/Leason6";
import Leason7 from "./pages/Leason7";
import Leason8 from "./pages/Leason8";
import Leason9 from "./pages/Leason9";

function App() {
  return (
    <div className="flex justify-center items-center  w-full flex-col bg-amber-100">
      <div className="h-[50vh] w-full bg-slate-700 mb-20"></div>
      <h3 className="mb-10 text-3xl">
        Leason 1: <span className="font-bold">Drag animation</span>
      </h3>
      <Leason1 />
      <div className="h-[50vh] w-full bg-slate-700 my-20"></div>
      <h3 className="mb-10 text-3xl">
        Leason 4: <span className="font-bold">Drag animation</span>
      </h3>
      <Leason4 />
      <div className="h-[50vh] w-full bg-slate-700 my-20"></div>
      <h3 className="mb-10 text-3xl">
        Leason 5:{" "}
        <span className="font-bold">
          keyframe and Separate diffrent types of animation
        </span>
      </h3>
      <Leason5 />
      <div className="h-[50vh] w-full bg-slate-700 my-20"></div>
      <h3 className="mb-10 text-3xl">
        Leason 6: <span className="font-bold">useAnimationControls</span>
      </h3>
      <Leason6 />
      <div className="h-[50vh] w-full bg-slate-700 my-20"></div>
      <h3 className="mb-10 text-3xl">
        Leason 7: <span className="font-bold">useCycle</span>
      </h3>
      <Leason7 />
      <div className="h-[50vh] w-full bg-slate-700 my-20"></div>
      <h3 className="mb-10 text-3xl">
        Leason 8: <span className="font-bold">InView</span>
      </h3>
      <Leason8 />
      <div className="h-[50vh] w-full bg-slate-700 my-20"></div>
      <h3 className="mb-10 text-3xl">
        Leason 9: <span className="font-bold">useAnimation</span>
      </h3>
      <Leason9 />
      <div className="h-[50vh] w-full bg-slate-700 my-20"></div>
      <h3 className="mb-10 text-3xl">
        Leason 10: <span className="font-bold">useDragControl</span>
      </h3>
      <Leason10 />
      <div className="h-[50vh] w-full bg-slate-700 my-20"></div>
      <h3 className="mb-10 text-3xl">
        Leason 11:{" "}
        <span className="font-bold">useMotionValue and useTransfrom</span>
      </h3>
      <Leason11 />
    </div>
  );
}

export default App;

//* CSS animation eithout Framer Motion
// <div className="main">
//   <div className="loading">
//     <div className="glass"></div>
//     <div className="box"></div>
//     <div className="box-1"></div>
//     <div className="box-2"></div>
//   </div>
// </div>

//* MY Future Goal

//* React + animation + custom component + server conncet + Redux + Next => Front-end => frontend developer
//* Node + MongoDB + Express  => MERN => MERN developer
//* C + C++ + Databse + Pythone + Cloud Computing + DSA => Junior Programmer => Backend
//* Django + MySQL / Postgree  + Cloud Computing => Backend Sever => Both App and Web
