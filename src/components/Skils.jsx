import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { LiaCss3Alt } from "react-icons/lia";
import { SiAxios } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { motion } from 'framer-motion';

function Skils({ sizeIcon, color }) {

  return (
    <div className='flex gap-10 justify-center sm:gap-28 m:gap-28'>
      <div className='flex gap-10 sm:gap-3 sm:flex-col m:gap-3 m:flex-col'><motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 2.75,
          ease: "easeIn"
        }} className='flex-col'>
        <FaReact size={sizeIcon} color={color} />
      </motion.div>
      <motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 3,
          ease: "easeIn"
        }} className='flex-col'>
        <SiTypescript size={sizeIcon} color={color} />
      </motion.div>
      <motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 3.25,
          ease: "easeIn"
        }} className='flex-col'>
        <FaHtml5 size={sizeIcon} color={color}/>
      </motion.div>
      <motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 3.5,
          ease: "easeIn"
        }} className='flex-col'>
        <LiaCss3Alt size={sizeIcon} color={color}/>
      </motion.div>
      <motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 3.75,
          ease: "easeIn"
        }} className='flex-col'>
        <SiTailwindcss size={sizeIcon} color={color} />
      </motion.div>
      </div>
      <div className='flex gap-10 sm:gap-3 sm:flex-col m:gap-3 m:flex-col'>
      <motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 4,
          ease: "easeIn"
        }} className='flex-col'>
        <FaNode size={sizeIcon} color={color} />
      </motion.div>
      <motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 4.25,
          ease: "easeIn"
        }} className='flex-col'>
        <SiFramer size={sizeIcon} color={color} />
      </motion.div>
      <motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 4.5,
          ease: "easeIn"
        }} className='flex-col'>
        <FaBootstrap size={sizeIcon} color={color} />
      </motion.div>
      <motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 4.75,
          ease: "easeIn"
        }} className='flex-col'>
        <SiAxios size={sizeIcon} color={color}/>
      </motion.div>
      <motion.div

        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 5,
          ease: "easeIn"
        }} className='flex-col'>
        <FaGithub size={sizeIcon} color={color}/>
      </motion.div>
</div>
    </div>
  );
}

export default Skils