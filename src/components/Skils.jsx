import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiFramer, SiMongodb, SiNextui, SiPrisma, SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { LiaCss3Alt } from "react-icons/lia";
import { SiAxios } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { motion } from 'framer-motion';
import { FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

function Skils({ sizeIcon, color }) {

  return (
    <div className='flex gap-10 justify-center sm:gap-28 m:gap-28 s:gap-28'>
      <div className='flex-auto gap-10 sm:gap-3 sm:flex-col s:gap-3 s:flex-col m:gap-3 m:flex-col'>

        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 2.75,
            ease: "easeIn"
          }} >
          <FaReact size={sizeIcon} color={color} />
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 3,
            ease: "easeIn"
          }} >
          <SiTypescript size={sizeIcon} color={color} />
        </motion.div>
      </div>
      <div className='flex-auto gap-10 sm:gap-3 sm:flex-col s:gap-3 s:flex-col m:gap-3 m:flex-col'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 3.25,
            ease: "easeIn"
          }} className='flex-col'>
          <FaHtml5 size={sizeIcon} color={color} />
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 3.5,
            ease: "easeIn"
          }} >
          <LiaCss3Alt size={sizeIcon} color={color} />
        </motion.div>
      </div>
      <div className='flex-auto gap-10 sm:gap-3 sm:flex-col s:gap-3 s:flex-col m:gap-3 m:flex-col'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 3.75,
            ease: "easeIn"
          }} >
          <SiTailwindcss size={sizeIcon} color={color} />
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 4,
            ease: "easeIn"
          }} >
          <FaNode size={sizeIcon} color={color} />
        </motion.div>
      </div>
      <div className='flex-auto gap-10 sm:gap-3 sm:flex-col s:gap-3 s:flex-col m:gap-3 m:flex-col'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 4.25,
            ease: "easeIn"
          }} >
          <SiFramer size={sizeIcon} color={color} />
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 4.5,
            ease: "easeIn"
          }} >
          <FaBootstrap size={sizeIcon} color={color} />
        </motion.div>
      </div>
      <div className='flex-auto gap-10 sm:gap-3 sm:flex-col s:gap-3 s:flex-col m:gap-3 m:flex-col'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 4.75,
            ease: "easeIn"
          }} >
          <SiAxios size={sizeIcon} color={color} />
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 5,
            ease: "easeIn"
          }} >
          <FaGithub size={sizeIcon} color={color} />
        </motion.div>
      </div>
      <div className='flex-auto gap-10 sm:gap-3 sm:flex-col s:gap-3 s:flex-col m:gap-3 m:flex-col'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 5,
            ease: "easeIn"
          }} >
          <FaDocker size={sizeIcon} color={color} />
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 5,
            ease: "easeIn"
          }} >
          <SiExpress size={sizeIcon} color={color} />
        </motion.div>
      </div>
      <div className='flex-auto gap-10 sm:gap-3 sm:flex-col s:gap-3 s:flex-col m:gap-3 m:flex-col'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 5,
            ease: "easeIn"
          }} >
          <SiPrisma size={sizeIcon} color={color} />
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 5,
            ease: "easeIn"
          }} >
          <SiMongodb size={sizeIcon} color={color} />
        </motion.div>
      </div>
      <div className='flex-auto gap-10 sm:gap-3 sm:flex-col s:gap-3 s:flex-col m:gap-3 m:flex-col'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 5,
            ease: "easeIn"
          }} >
          <SiNextui size={sizeIcon} color={color} />
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 5,
            ease: "easeIn"
          }} >
          <SiRedux size={sizeIcon} color={color} />
        </motion.div>
      </div>
    </div>

  );
}

export default Skils