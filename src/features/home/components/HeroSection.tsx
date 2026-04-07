import profileImg from "@/assets/tinu-pic.png";
import { heroData } from "@/features/home/data/homeData";
import {
  DisplayText,
  LeadText,
  LabelText,
} from "@/features/shared/components/Typography";

export default function HeroSection() {
  return (
    <section className="w-full xl:min-h-[calc(100vh-64px)] min-h-auto bg-background px-6 py-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center">
        <div className="text-center flex flex-col justify-center">
          <LabelText className="mb-2 md:mb-4 !text-xl md:!text-2xl lg:!text-3xl tracking-wide">
            {heroData.introLabel}
          </LabelText>

          <DisplayText>{heroData.name}</DisplayText>
        </div>

        <div
          className="
          grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr]
          items-center md:items-end
          gap-0 md:gap-12 lg:gap-16
          text-center md:text-left
          xl:min-h-0
          md:mt-8 mt-4
          "
        >
          <div className="order-1 md:order-1 md:flex md:items-end md:justify-end md:pb-8">
            <LeadText className="!text-lg lg:!text-2xl">
              {heroData.roles[0]}
            </LeadText>
          </div>

          <div className="order-3 md:order-2 flex justify-center">
            <div className="flex justify-center w-full">
              <img
                src={profileImg}
                alt={heroData.imageAlt}
                className="
                  block
                  w-full
                  max-w-[250px]
                  sm:max-w-[300px]
                  md:max-w-[360px]
                  lg:max-w-[440px]
                  xl:max-w-[520px]
                  2xl:max-w-[620px]
                  pt-10 md:pt-0
                  h-auto
                  object-contain
                "
                loading="eager"
              />
            </div>
          </div>

          <div className="order-2 md:order-3 md:flex md:items-end md:justify-start md:pb-8">
            <LeadText className="!text-lg lg:!text-2xl">
              {heroData.roles[1]}
            </LeadText>
          </div>
        </div>
      </div>
    </section>
  );
}
