// Placeholder for test.jsx (to be replaced with actual content)
import svgPaths from "./svg-xoeeukhm5n";
import img from "figma:asset/329c3445f431c5f68b2856d27980c56ed4974af2.png";
import img1 from "figma:asset/3be40f5cedc436e558720fb4cc391a78df9b6292.png";
import img2 from "figma:asset/59d8f7e934db11a36b1ce1b6acedbc508350e6b5.png";
import { useActiveBreakpoint } from "figma:react";

function InnerScreenDesktop() {
  return (
    <div
      aria-label="Data points on top of landscape"
      className="[background-size:100%_100%] absolute bg-no-repeat bg-top-left h-[607.439px] left-1/2 rounded-2xl top-[18.504px] translate-x-[-50%] w-[869.742px]"
      data-name="Inner screen"
      style={{ backgroundImage: `url('${img}')` }}
    />
  );
}

function IpadDesktop() {
  return (
    <div
      className="absolute bg-[#000000] h-[644px] rounded-3xl top-1/2 translate-x-[-50%] translate-y-[-50%] w-[907px]"
      data-name="Ipad"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <div className="h-[644px] overflow-clip relative w-[907px]">
        <InnerScreenDesktop />
      </div>
      <div className="absolute border-[2px_2px_0px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeroSectionDesktop() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-60 items-start justify-start p-0 relative size-full"
      data-name="Hero section"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#8e9c78] text-[160px] text-center tracking-[-6.8px] w-full">
        <p className="block leading-[0.9]">
          Hospitality Assistant
        </p>
      </div>
      <div
        className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full"
        data-name="Hero image"
      >
        <IpadDesktop />
      </div>
    </div>
  );
}

function InnerScreenTablet() {
  return (
    <div
      aria-label="Data points on top of landscape"
      className="[background-size:100%_100%] absolute bg-no-repeat bg-top-left h-[453.1px] left-1/2 rounded-[11.9347px] top-[13.802px] translate-x-[-50%] w-[648.757px]"
      data-name="Inner screen"
      style={{ backgroundImage: `url('${img}')` }}
    />
  );
}

function IpadTablet() {
  return (
    <div
      className="absolute bg-[#000000] h-[422.936px] rounded-tl-[17.9021px] rounded-tr-[17.9021px] translate-x-[-50%] translate-y-[-50%] w-[676.548px]"
      data-name="Ipad"
      style={{
        top: "calc(50% - 29.532px)",
        left: "calc(50% + 0.2742px)",
      }}
    >
      <div className="h-[422.936px] overflow-clip relative w-[676.548px]">
        <InnerScreenTablet />
      </div>
      <div className="absolute border-[#8e9c78] border-[1.49184px_1.49184px_0px] border-solid inset-0 pointer-events-none rounded-tl-[17.9021px] rounded-tr-[17.9021px] shadow-[0px_-2.98368px_14.9184px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeroSectionTablet() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[140px] items-start justify-start p-0 relative size-full"
      data-name="Hero section"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#8e9c78] text-[160px] text-center tracking-[-6.8px] w-full">
        <p className="block leading-[0.9]">
          Hospitality Assistant
        </p>
      </div>
      <div
        className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full"
        data-name="Hero image"
      >
        <IpadTablet />
      </div>
    </div>
  );
}

function UiElementsMobile() {
  return (
    <div
      className="absolute h-[22.195px] left-[20.198px] top-[8.06px] w-[207.243px]"
      data-name="UI elements"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 208 23"
      >
        <g id="UI elements">
          <path
            d={svgPaths.p1c1c9700}
            fill="var(--fill-0, black)"
            id="Mockup elements 08"
          />
          <g id="Mockup elements 07">
            <path
              d={svgPaths.p18cd2400}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p18437400}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p1a8dd800}
              fill="var(--fill-0, white)"
            />
            <path
              d={svgPaths.p3c7f6e00}
              fill="var(--fill-0, white)"
            />
          </g>
          <path
            d={svgPaths.pa05cf00}
            id="Mockup elements 06"
            stroke="var(--stroke-0, white)"
            strokeWidth="0.63413"
          />
          <path
            d={svgPaths.p29544880}
            fill="var(--fill-0, white)"
            id="Mockup elements 05"
          />
          <path
            d={svgPaths.p2cfbce70}
            fill="var(--fill-0, white)"
            id="Mockup elements 04"
          />
          <path
            d={svgPaths.p2aa86600}
            fill="var(--fill-0, white)"
            id="Mockup elements 03"
          />
          <path
            d={svgPaths.p591e1c0}
            fill="var(--fill-0, white)"
            id="Mockup elements 02"
          />
          <path
            d={svgPaths.p1e661e00}
            fill="var(--fill-0, white)"
            id="Mockup elements 01"
          />
        </g>
      </svg>
    </div>
  );
}

function InnerScreenMobile() {
  return (
    <div
      className="[background-size:cover,_auto,_cover] absolute bg-[position:50%_50%,_0%_0%,_50%_50%] h-[521.757px] left-[10.946px] overflow-clip right-[10.946px] rounded-[27.3649px] top-[10.034px]"
      data-name="Inner screen"
      style={{
        backgroundImage: `url('${img1}'), linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url('${img2}')`,
      }}
    >
      <UiElementsMobile />
    </div>
  );
}

function IPhoneMobile() {
  return (
    <div
      className="absolute bg-[#000000] h-[541.824px] rounded-[34.6622px] translate-x-[-50%] translate-y-[-50%] w-[270px]"
      data-name="iPhone"
      style={{
        top: "calc(50% + 41px)",
        left: "calc(50% + 0.5px)",
      }}
    >
      <div className="h-[541.824px] overflow-clip relative w-[270px]">
        <InnerScreenMobile />
      </div>
      <div className="absolute border border-[#8e9c78] border-solid inset-0 pointer-events-none rounded-[34.6622px] shadow-[0px_-2.34173px_11.7087px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeroSectionMobile() {
  return (
    <div
      className="relative size-full"
      data-name="Hero section"
    >
      <div className="flex flex-col items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[120px] items-center justify-start max-w-inherit pb-0 pt-[120px] px-4 relative size-full">
          <div className="font-['Crimson_Text:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#8e9c78] text-[160px] text-center tracking-[-6.8px] w-full">
            <p className="block leading-[0.9]">
              Hospitality Assistant
            </p>
          </div>
          <div
            className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full"
            data-name="Hero image"
          >
            <IPhoneMobile />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <HeroSectionMobile />;
  }
  if (width < 1280) {
    return <HeroSectionTablet />;
  }
  return <HeroSectionDesktop />;
}

export default HeroSection;