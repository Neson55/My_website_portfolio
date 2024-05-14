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
    <div className='flex gap-10 justify-center  sm:flex-col sm:items-center sm:gap-6 s:flex-col s:items-center s:gap-6 m:flex-col m:items-center m:gap-6'>
      <div className='flex gap-10 sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6'>
        <div className='sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 2.75,
            ease: "easeIn"
          }} 
          className='relative'>
          <FaReact size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 duration-300 inset-0 z-10  flex -left-8 -top-8 absolute font-semibold text-lg dark:text-white'>React</div>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 3,
            ease: "easeIn"
          }}
          className='relative' >
          <SiTypescript size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-20 -top-8 flex absolute font-semibold text-lg dark:text-white'>Typescript</div>
        </motion.div>
      </div>
      </div>
      <div className='flex gap-10 sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6'>
        <div className='sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 3.75,
            ease: "easeIn"
          }}
          className='relative' 
          >
          <SiTailwindcss size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-8 -top-8 flex absolute font-semibold text-lg dark:text-white'>Tailwind</div>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 4,
            ease: "easeIn"
          }}
          className='relative' >
          <FaNode size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-8 -top-8 flex absolute font-semibold text-lg dark:text-white'>Node</div>
        </motion.div>
      </div>
      <div className='flex-auto gap-10 sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 4.25,
            ease: "easeIn"
          }}
          className='relative' >
          <SiFramer size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-8 -top-8 flex absolute font-semibold text-lg dark:text-white'>Framer</div>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 4.5,
            ease: "easeIn"
          }}
          className='relative' >
          <FaBootstrap  size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-16 -top-8 flex absolute font-semibold text-lg dark:text-white'>Bootstrap</div>
        </motion.div>
      </div>
      </div>
      <div className='flex gap-10 sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6'>
        <div className='sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 4.75,
            ease: "easeIn"
          }}
          className='relative' >
          <SiAxios size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-8 -top-8 flex absolute font-semibold text-lg dark:text-white'>Axios</div>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 5.25,
            ease: "easeIn"
          }}
          className='relative' >
          <FaGithub size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-8 -top-8 flex absolute font-semibold text-lg dark:text-white'>Github</div>
        </motion.div>
      </div>
      <div className='flex-auto gap-10 sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6 '>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 5.5,
            ease: "easeIn"
          }}
          className='relative' >
          <FaDocker size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-8 -top-8 flex absolute font-semibold text-lg dark:text-white'>Docker</div>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 5.75,
            ease: "easeIn"
          }}
          className='relative' >
          <SiExpress size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-16 -top-5 flex absolute font-semibold text-lg dark:text-white'>Express</div>
        </motion.div>
      </div>
        </div>
      <div className='flex gap-10  sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6'>
          <div className='sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 6,
            ease: "easeIn"
          }}
          className='relative' >
          <SiPrisma size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-8 -top-8 flex absolute font-semibold text-lg dark:text-white'>Prisma</div>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 6.25,
            ease: "easeIn"
          }}
          className='relative' >
          <SiMongodb size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-10 -top-4 flex absolute font-semibold text-lg dark:text-white'>Mongo</div>
        </motion.div>
      </div>
      <div className='flex-auto gap-10  sm:flex sm:gap-6 s:flex s:gap-6 m:flex m:gap-6'>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 6.5,
            ease: "easeIn"
          }}
          className='relative' >
          <SiNextui size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-8 -top-8 flex absolute font-semibold text-lg dark:text-white'>Nextui</div>
        </motion.div>
        <motion.div

          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 6.75,
            ease: "easeIn"
          }}
          className='relative' >
          <SiRedux size={sizeIcon} color={color} />
          <div className='opacity-0 hover:opacity-100 inset-0 -left-8 -top-2 flex absolute font-semibold text-lg dark:text-white'>Redux</div>
        </motion.div>
        </div>
      </div>
    </div>

  );
}

export default Skils