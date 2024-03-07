import { motion } from 'framer-motion';

import { styles } from '../styles';
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">Hero
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div>
          <h1 className={`${styles.heroHeadText} font-semibold text-tertiary`}>Hello, 
          I'm <span className='text-white font-serif'>Atikah</span>.</h1>

          <p className={`${styles.heroSubText} text-white mt-2`}>An aspiring Engineer</p>
        </div>

      </div>    
    </section>
  )
}

export default Hero