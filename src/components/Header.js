import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      className="h-[8vh] flex justify-between mx-44  font-bold "
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0}}
      transition={{duration:1}}
    >
      <p className="my-auto mx-10">CodeWithAjesh</p>
      <div className="flex gap-5 my-auto mx-10">
        <p>Home</p>
        <p>Shop</p>
        <p>About us</p>
        <p>Contact</p>
      </div>
    </motion.div>
  );
}

export default Header;
