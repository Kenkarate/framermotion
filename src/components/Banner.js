import React from "react";
import {motion} from 'framer-motion'

function Banner() {
  return (
    <div className="h-[90vh]">
      <div className="grid justify-center content-center h-full">
       <motion.p className="text-[90px] font-bold "
       animate={{fontSize:'40px',color:'blue',x:-200, y:-200}}
       >Welcome to CodeWithAjesh</motion.p> 
       <motion.button className="border border-black rounded p-5 text-2xl"
       animate={{scale: 1.5,opacity:1}}
       >Click here</motion.button>
      </div>
    </div>
  );
}

export default Banner;
