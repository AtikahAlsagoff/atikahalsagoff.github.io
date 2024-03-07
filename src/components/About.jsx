import React from 'react';
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { socials } from '../constants';

const About = () => {
  return (
      <>
        <div className="xl:mt-9 xl:flex-row flex-col-reverse flex gap-10">
          <div>
            <motion.div variants={textVariant()}>
              <h2 className={`${styles.sectionHeadText}`}>About Me.</h2>
            </motion.div>

            <motion.div
             variants={fadeIn("", "", 0.1, 1)}
             >
              {/* <ul className='list-disc mt-4 text-[21px] max-w-3xl leading-[30px]'>
                <li className='text-white'>I'm an Electrical and Electronic Engineering (EEE) graduate enthusiastic about creating impactful projects.</li>
                <li>I'm committed to continuous learning and using my skills to contribute meaningfully to the field of technology</li>
              </ul> */}
              <p className='mt-4 text-[25px] max-w-3xl leading-[30px]'>
                <span className='text-white'>I'm an Electrical and Electronic Engineering (EEE) graduate enthusiastic about creating impactful projects. 🚀 </span> <br/><br />
                <span className='text-white'>
                {/*My journey has equipped me with a deep understanding of both hardware and software, </span><br/>
                <span> allowing me to craft a versatile portfolio that demonstrates my ability to innovate and solve real-world challenges. </span><br/> */}
                {/* <span> From software-focused endeavors to projects seamlessly integrating hardware and software, </span><br/> */}
                I'm committed to continuous learning and using my skills to contribute meaningfully to the field of technology. 💻✨ </span></p>
                <br/>

                <div>
            <p className='mt-4 text-[25px] max-w-3xl leading-[30px]'>Connect with me!</p>
            <div className='flex flex-row mt-2'>
              {socials.map((social)=>(
                <div
                onClick={()=> window.open(social.link, "_blank")} //open page in new link
                className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center
                cursor-pointer mr-2`}
                  >
                  <img
                    src={social.icon}
                    alt={social.title}
                    className = "object-contain"
                    />
                </div>
              ))}

            </div>

        </div>
            </motion.div>
          </div>
        </div>

        
      </>
  )
}


export default SectionWrapper(About, "about")
