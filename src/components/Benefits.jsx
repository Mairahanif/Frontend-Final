// Placeholder for Welcome.jsx (to be replaced with actual content)
import imgHeroImage from "figma:asset/27594e92b9b432843319210cddc6514b6ee87450.png";
import { useActiveBreakpoint } from "figma:react";

function TextDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start justify-start leading-[0] pl-0 pr-[400px] py-0 relative text-[#ffffff] text-left w-full">
          <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] tracking-[-0.12px] w-[575.566px]">
            <p className="adjustLetterSpacing block leading-[1.4]">
              Section: services we offer.
            </p>
          </div>
          <div
            className="font-['Crimson_Text:Regular',_sans-serif] min-w-full not-italic relative shrink-0 text-[60px] tracking-[-1.8px]"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[0.9]">
              We’ve cracked the code.
            </p>
          </div>
          <div
            className="font-['DM_Sans:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[15px] tracking-[-0.075px]"
            style={{
              width: "min-content",
              fontVariationSettings: "'opsz' 14",
            }}
          >
            <p className="block leading-[1.4]">
              We deliver to you a multi-agent hospitality
              assistant now at the palm of your hand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1Desktop() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 1"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">
          Amplify Insights (something)
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Unlock data-driven decisions with comprehensive
          analytics, revealing key opportunities for strategic
          regional growth.
        </p>
      </div>
    </div>
  );
}

function IconLockup1Desktop() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-[265px] relative shrink-0"
      data-name="Icon lockup 1"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-inherit pl-0 pr-5 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Cable icon"
          >
            <div
              className="absolute bottom-[10.365%] left-[7.544%] right-[7.519%] top-[10.364%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text1Desktop />
        </div>
      </div>
    </div>
  );
}

function Text2Desktop() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 2"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">Wait-For-Me</p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Join the virtual queue through our website, leave the
          immediate area and wait wherever you choose, like in
          your vehicle or while running other errands, and
          receive notifications for when your turn arrives.
        </p>
      </div>
    </div>
  );
}

function IconLockup2Desktop() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-[265px] relative shrink-0"
      data-name="Icon lockup 2"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start min-w-inherit pl-0 pr-5 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Earth icon"
          >
            <div
              className="absolute bottom-[8.333%] left-[8.333%] right-[8.333%] top-[8.333%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text2Desktop />
        </div>
      </div>
    </div>
  );
}

function Text3Desktop() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 3"
    >
      <div
        className="font-['Crimson_Text:Regular',_sans-serif] min-w-full not-italic relative shrink-0 text-[18px] tracking-[-0.54px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-none">
          Remove Language Barriers
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal h-[105px] relative shrink-0 text-[15px] tracking-[-0.075px] w-[245px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="adjustLetterSpacing block leading-[1.4]">
          Experience seamless communication with with built-in
          localization for clarity and enhanced user experience.
        </p>
      </div>
    </div>
  );
}

function IconLockup3Desktop() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-[265px] relative shrink-0"
      data-name="Icon lockup 3"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-inherit pl-0 pr-10 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Account icon"
          >
            <div
              className="absolute bottom-[12.5%] left-[4.167%] right-[4.141%] top-[8.334%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text3Desktop />
        </div>
      </div>
    </div>
  );
}

function Text4Desktop() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 4"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">
          Visualize Growth (something)
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Generate precise, visually compelling reports that
          illustrate your growth trajectories across all
          regions.
        </p>
      </div>
    </div>
  );
}

function IconLockup4Desktop() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-[265px] relative shrink-0"
      data-name="Icon lockup 4"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-inherit pl-0 pr-10 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Chart icon"
          >
            <div
              className="absolute bottom-[25%] left-[4.167%] right-[4.167%] top-[25%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text4Desktop />
        </div>
      </div>
    </div>
  );
}

function IconsModuleDesktop() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Icons module"
    >
      <div className="relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-5 items-start justify-start pb-0 pt-10 px-0 relative w-full">
          <IconLockup1Desktop />
          <IconLockup2Desktop />
          <IconLockup3Desktop />
          <IconLockup4Desktop />
        </div>
      </div>
    </div>
  );
}

function HeadlineAndIconsDesktop() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Headline and icons"
    >
      <div className="absolute border-[#ffffff] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start justify-start pb-[60px] pt-20 px-0 relative w-full">
          <TextDesktop />
          <IconsModuleDesktop />
        </div>
      </div>
    </div>
  );
}

function HeroImageDesktop() {
  return (
    <div
      aria-label="A image that shows a mountain range"
      className="bg-center bg-cover bg-no-repeat h-[620px] rounded-[30px] shrink-0 w-full"
      data-name="Hero Image"
      style={{ backgroundImage: `url('${imgHeroImage}')` }}
    />
  );
}

function BenefitsSectionDesktop() {
  return (
    <div
      className="relative size-full"
      data-name="Benefits section"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit pb-[120px] pt-0 px-0 relative size-full">
          <HeadlineAndIconsDesktop />
          <HeroImageDesktop />
        </div>
      </div>
    </div>
  );
}

function TextTablet() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start justify-start leading-[0] pl-0 pr-[200px] py-0 relative text-[#ffffff] text-left w-full">
          <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] tracking-[-0.12px] w-[575.566px]">
            <p className="adjustLetterSpacing block leading-[1.4]">
              Section: services we offer.
            </p>
          </div>
          <div
            className="font-['Crimson_Text:Regular',_sans-serif] min-w-full not-italic relative shrink-0 text-[60px] tracking-[-1.8px]"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[0.9]">
              We’ve cracked the code.
            </p>
          </div>
          <div
            className="font-['DM_Sans:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[15px] tracking-[-0.075px]"
            style={{
              width: "min-content",
              fontVariationSettings: "'opsz' 14",
            }}
          >
            <p className="block leading-[1.4]">
              We deliver to you a multi-agent hospitality
              assitant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1Tablet() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 1"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">
          Amplify Insights (something)
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Unlock data-driven decisions with comprehensive
          analytics, revealing key opportunities for strategic
          regional growth.
        </p>
      </div>
    </div>
  );
}

function IconLockup1Tablet() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-[265px] relative shrink-0"
      data-name="Icon lockup 1"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-inherit pl-0 pr-5 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Cable icon"
          >
            <div
              className="absolute bottom-[10.365%] left-[7.544%] right-[7.519%] top-[10.364%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text1Tablet />
        </div>
      </div>
    </div>
  );
}

function Text2Tablet() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 2"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">Wait-For-Me</p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Join the virtual queue through our website, leave the
          immediate area and wait wherever you choose, like in
          your vehicle or while running other errands, and
          recieve a notificatiion when your turn arrives.
        </p>
      </div>
    </div>
  );
}

function IconLockup2Tablet() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-[265px] relative shrink-0"
      data-name="Icon lockup 2"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start min-w-inherit pl-0 pr-5 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Earth icon"
          >
            <div
              className="absolute bottom-[8.333%] left-[8.333%] right-[8.333%] top-[8.333%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text2Tablet />
        </div>
      </div>
    </div>
  );
}

function Text3Tablet() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 3"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">
          Remove Language Barriers
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Experience seamless communication with multilingual
          support, tailored for clarity and connection across
          languages. with built-in localization for clear
          communication and enhanced user experience.
        </p>
      </div>
    </div>
  );
}

function IconLockup3Tablet() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-[265px] relative shrink-0"
      data-name="Icon lockup 3"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-inherit pl-0 pr-10 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Account icon"
          >
            <div
              className="absolute bottom-[12.5%] left-[4.167%] right-[4.141%] top-[8.334%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text3Tablet />
        </div>
      </div>
    </div>
  );
}

function Text4Tablet() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 4"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">
          Visualize Growth (something)
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Generate precise, visually compelling reports that
          illustrate your growth trajectories across all
          regions.
        </p>
      </div>
    </div>
  );
}

function IconLockup4Tablet() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-[265px] relative shrink-0"
      data-name="Icon lockup 4"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-inherit pl-0 pr-10 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Chart icon"
          >
            <div
              className="absolute bottom-[25%] left-[4.167%] right-[4.167%] top-[25%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text4Tablet />
        </div>
      </div>
    </div>
  );
}

function IconsModuleTablet() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Icons module"
    >
      <div className="relative size-full">
        <div className="[flex-flow:wrap] box-border content-start flex gap-5 items-start justify-start pb-0 pt-10 px-0 relative w-full">
          <IconLockup1Tablet />
          <IconLockup2Tablet />
          <IconLockup3Tablet />
          <IconLockup4Tablet />
        </div>
      </div>
    </div>
  );
}

function HeadlineAndIconsTablet() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Headline and icons"
    >
      <div className="absolute border-[#ffffff] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start justify-start pb-[60px] pt-20 px-0 relative w-full">
          <TextTablet />
          <IconsModuleTablet />
        </div>
      </div>
    </div>
  );
}

function HeroImageTablet() {
  return (
    <div
      aria-label="A image that shows a mountain range from above"
      className="bg-center bg-cover bg-no-repeat h-[600px] rounded-[30px] shrink-0 w-full"
      data-name="Hero Image"
      style={{ backgroundImage: `url('${imgHeroImage}')` }}
    />
  );
}

function BenefitsSectionTablet() {
  return (
    <div
      className="relative size-full"
      data-name="Benefits section"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit pb-[120px] pt-0 px-0 relative size-full">
          <HeadlineAndIconsTablet />
          <HeroImageTablet />
        </div>
      </div>
    </div>
  );
}

function TextMobile() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start leading-[0] pl-0 pr-5 py-0 relative text-[#ffffff] text-left w-full">
          <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] tracking-[-0.12px] w-full">
            <p className="block leading-[1.4]">
              Section: services we offer.
            </p>
          </div>
          <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[60px] tracking-[-1.8px] w-full">
            <p className="block leading-[0.9]">
              We’ve cracked the code.
            </p>
          </div>
          <div
            className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="block leading-[1.4]">
              We deliver to you a multi-agent hospitality
              assitant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1Mobile() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 1"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">
          Amplify Insights (something)
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Unlock data-driven decisions with comprehensive
          analytics, revealing key opportunities for strategic
          regional growth.
        </p>
      </div>
    </div>
  );
}

function IconLockup1Mobile() {
  return (
    <div
      className="min-w-[265px] relative shrink-0 w-full"
      data-name="Icon lockup 1"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-inherit pl-0 pr-5 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Cable icon"
          >
            <div
              className="absolute bottom-[10.365%] left-[7.544%] right-[7.519%] top-[10.364%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text1Mobile />
        </div>
      </div>
    </div>
  );
}

function Text2Mobile() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 2"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">Wait-For-Me</p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Join the virtual queue through our website, leave the
          immediate area and wait wherever you choose, like in
          your vehicle or while running other errands, and
          recieve a notificatiion when your turn arrives.
        </p>
      </div>
    </div>
  );
}

function IconLockup2Mobile() {
  return (
    <div
      className="min-w-[265px] relative shrink-0 w-full"
      data-name="Icon lockup 2"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start min-w-inherit pl-0 pr-5 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Earth icon"
          >
            <div
              className="absolute bottom-[8.333%] left-[8.333%] right-[8.333%] top-[8.333%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text2Mobile />
        </div>
      </div>
    </div>
  );
}

function Text3Mobile() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 3"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">
          Remove Language Barriers
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Experience seamless communication with multilingual
          support, tailored for clarity and connection across
          languages. with built-in localization for clear
          communication and enhanced user experience.
        </p>
      </div>
    </div>
  );
}

function IconLockup3Mobile() {
  return (
    <div
      className="min-w-[265px] relative shrink-0 w-full"
      data-name="Icon lockup 3"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-inherit pl-0 pr-10 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Account icon"
          >
            <div
              className="absolute bottom-[12.5%] left-[4.167%] right-[4.141%] top-[8.334%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text3Mobile />
        </div>
      </div>
    </div>
  );
}

function Text4Mobile() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left w-full"
      data-name="Text 4"
    >
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[18px] tracking-[-0.54px] w-full">
        <p className="block leading-none">
          Visualize Growth (something)
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[15px] tracking-[-0.075px] w-full"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="block leading-[1.4]">
          Generate precise, visually compelling reports that
          illustrate your growth trajectories across all
          regions.
        </p>
      </div>
    </div>
  );
}

function IconLockup4Mobile() {
  return (
    <div
      className="min-w-[265px] relative shrink-0 w-full"
      data-name="Icon lockup 4"
    >
      <div className="absolute border-[#ffffff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start min-w-inherit pl-0 pr-10 py-10 relative w-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Chart icon"
          >
            <div
              className="absolute bottom-[25%] left-[4.167%] right-[4.167%] top-[25%]"
              data-name="Vector"
            >
              <div
                className="absolute inset-0"
                style={
                  {
                    "--fill-0": "rgba(255, 255, 255, 1)",
                  } // ...existing code...

                }
              />
            </div>
          </div>
          <Text4Mobile />
        </div>
      </div>
    </div>
  );
}

function IconsModuleMobile() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Icons module"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start pb-0 pt-10 px-0 relative w-full">
          <IconLockup1Mobile />
          <IconLockup2Mobile />
          <IconLockup3Mobile />
          <IconLockup4Mobile />
        </div>
      </div>
    </div>
  );
}

function HeadlineAndIconsMobile() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Headline and icons"
    >
      <div className="absolute border-[#ffffff] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start justify-start pb-[60px] pt-20 px-0 relative w-full">
          <TextMobile />
          <IconsModuleMobile />
        </div>
      </div>
    </div>
  );
}

function HeroImageMobile() {
  return (
    <div
      aria-label="A image that shows a mountain range"
      className="bg-center bg-cover bg-no-repeat h-[600px] rounded-[30px] shrink-0 w-full"
      data-name="Hero Image"
      style={{ backgroundImage: `url('${imgHeroImage}')` }}
    />
  );
}

function BenefitsSectionMobile() {
  return (
    <div
      className="relative size-full"
      data-name="Benefits section"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit pb-[100px] pt-0 px-4 relative size-full">
          <HeadlineAndIconsMobile />
          <HeroImageMobile />
        </div>
      </div>
    </div>
  );
}

function BenefitsSection() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <BenefitsSectionMobile />;
  }
  if (width < 1280) {
    return <BenefitsSectionTablet />;
  }
  return <BenefitsSectionDesktop />;
}

export default BenefitsSection;