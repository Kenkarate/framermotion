import React from "react";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="h-[90vh]">
      <div className="grid justify-center content-center h-full">
        <motion.p className="text-[90px] font-bold "
        initial={{x:'-100vw'}}
        animate={{x:0}}
        transition={{ type:'spring',stiffness:120,delay:1}}
        >Welcome to CodeWithAjesh</motion.p>
        <motion.button className="border border-black rounded p-5 text-2xl"
        initial={{x:'100vw'}}
        animate={{x:0}}
        transition={{type:'spring', delay:1}}
        >
          Click here
        </motion.button>
      </div>
    </div>
  );
}

export default Banner;
