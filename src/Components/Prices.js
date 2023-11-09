import { pricesTitle,prices } from "./data"
import FadeIn from "./FadeIn"


const Pricing = props => {
  return (
   
     <div
      id="prices"
      className="flex flex-col 2xl:flex-row gap-[128px] 2xl:gap-2 2xl:justify-between mt-[160px] 2xl:mt-[270px] mb-[160px] max-w-[1490px]
        mx-auto px-10 w-full"
    >
      <FadeIn delay={0.2} direction="right">
        <div className="flex flex-col">
          <h1 className="text-center 2xl:text-start text-fontBlack text-5xl lg:text-[64px] font-medium mb-6">
            {pricesTitle}
          </h1>
        </div>
      </FadeIn>

      <div className="w-full flex flex-col md:flex-row gap-[160px] md:gap-6">
        {prices.map((price, i) => (
          <FadeIn key={i} delay={(i + 1) * 0.2} direction="left" fullWidth>
            <div className="h-[510px] relative flex-1 bg-[#C1D0E4] rounded-[50px] max-w-[500px]">
              <img
                src={price.img}
                alt=""
                className="absolute -top-[100px] left-1/2 -translate-x-1/2"
              />
              <div className="absolute bottom-0 w-full bg-white h-[260px] rounded-[50px] shadow-md px-8 py-[26px] flex flex-col justify-between">
                <div>
                  <h2 className="mb-2 text-fontBlack text-3xl lg:text-[32px] font-medium">
                    {price.title}
                  </h2>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-fontBlack text-2xl lg:text-xl font-medium">
                    {price.price}
                  </h3>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Pricing