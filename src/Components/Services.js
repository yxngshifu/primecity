import { serviceSubtitle,serviceTitle } from "./data";
import bedroomflats from '../Assets/bedroomFlats.jpg';
import studio from '../Assets/studio.jpg';
import suite from '../Assets/suite.jpg';
import servicebg from '../Assets/servicebg.jpg'
import  FadeIn from './FadeIn';

const Services = () => {
   return (
    <div className='h-screen relative' style={{
      backgroundImage: `url(${servicebg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
    <div id="service" className="mb-[200px] px-60 max-w-[1490px] mx-auto">
      <FadeIn delay={0.3} direction="down">
        <h3 className="text-5xl lg:text-[40px] font-medium text-fontBlack mb-6 text-center">
          {serviceTitle}
        </h3>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {serviceSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.5} direction="right">
          <div className="flex flex-col gap-8">
            <img src={bedroomflats} alt="" />
            <img src={suite} alt="" />
          </div>
        </FadeIn>
        <FadeIn delay={0.5} direction="left">
          <div>
            <img src={studio} alt="" />
          </div>
        </FadeIn>
      </div>
    </div>
    </div>
  );
};

export default Services;