import React from 'react'
import Navbar from './Navbar'
import heroImage from '/Users/shifu/primecity/src/Assets/Hero.jpg'
import { heroSubtitle, heroTitle, heroTitle2 } from './data.js';

import FadeIn from './FadeIn';
import Services from './Services';
const Hero = () => {

  return (

    <div className='h-screen relative' style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <Navbar />
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-10"> {/* Adjusted positioning */}
        <FadeIn delay={0.2} direction="down" padding fullWidth>
          <h1 className="mt-[90px] text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]">
            {heroTitle}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="down" padding fullWidth>
          <h1 className="mt-[10px] text-5xl leading-tight xs:text-[64px] text-[#ffbe0b] max-w-[1050px]">
            {heroTitle2}
          </h1>
        </FadeIn>
        <FadeIn delay={0.4} direction="down" padding fullWidth>
          <h5 className="mt-6 text-lg xs:text-xl text-white max-w-[500px]">
            {heroSubtitle}
          </h5>
        </FadeIn>
      </div>
    </div>

  );
};


export default Hero
