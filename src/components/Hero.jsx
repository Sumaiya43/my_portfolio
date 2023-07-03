import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../style'
import { ComputersCanvas } from './canvas'
import heroavatar from '../assets/femaleavatar.png'

const Hero = () => {
  return (
    <section className='w-full
    h-screen mx-auto'>
        <div className='md:flex justify-center items-center md:pt-[10rem] sm:pt-[5rem] pl-[2rem]' >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full sm:hidden bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40 sm:hidden violet-gradient'/>
          </div>
          <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Mazeda</span></h1>
               <p className={`${styles.heroSubText} mt-2 text-white-100`}>
               I developed user interfaces and <br /> web Applications
               </p>
               <button className='btn bg-[#915eff] rounded-full p-4 font-bold mt-4'>Download CV</button>
            </div>
            <div className='w-[30rem] h-[30rem] md:ml-[2rem]'>
              <img src={heroavatar}  alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero