import imgLogo from "figma:asset/7e2cb6a493f6974234a10a9155f5a9e61358668d.png";
import imgLogo1 from "figma:asset/4ec63af28a6d626d15af88690afce1177f7da2aa.png";
import imgLogo2 from "figma:asset/22502dfc1e4e8a242285d42db1a38e6e853633fc.png";
import imgLogo3 from "figma:asset/ab60fb89b643e72e94769301b2a7ea53c2788495.png";
import imgLogo4 from "figma:asset/5353f37898f8daa86c3f3f525e94362e62de8b6a.png";
import imgLogo5 from "figma:asset/262ae2257b7f47685a1fd90f0f27d6372a2bca23.png";
import { useActiveBreakpoint } from "figma:react";

function LogoDesktop() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo}')` }}
    />
  );
}

function Logo1Desktop() {
  return (
    <div
      className="h-[84px] relative shrink-0 w-[154px]"
      data-name="Logo 1"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[84px] items-start justify-center p-[20px] relative w-[154px]">
          <LogoDesktop />
        </div>
      </div>
    </div>
  );
}

function LogoDesktop1() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo1}')` }}
    />
  );
}

function Logo2Desktop() {
  return (
    <div
      className="h-[84px] relative shrink-0 w-[154px]"
      data-name="Logo 2"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[84px] items-start justify-center p-[20px] relative w-[154px]">
          <LogoDesktop1 />
        </div>
      </div>
    </div>
  );
}

function LogoDesktop2() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo2}')` }}
    />
  );
}

function Logo3Desktop() {
  return (
    <div
      className="h-[84px] relative shrink-0 w-[154px]"
      data-name="Logo 3"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[84px] items-start justify-center p-[20px] relative w-[154px]">
          <LogoDesktop2 />
        </div>
      </div>
    </div>
  );
}

function LogoDesktop3() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo3}')` }}
    />
  );
}

function Logo4Desktop() {
  return (
    <div
      className="h-[84px] relative shrink-0 w-[154px]"
      data-name="Logo 4"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[84px] items-start justify-center p-[20px] relative w-[154px]">
          <LogoDesktop3 />
        </div>
      </div>
    </div>
  );
}

function LogoDesktop4() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo4}')` }}
    />
  );
}

function Logo5Desktop() {
  return (
    <div
      className="h-[84px] relative shrink-0 w-[154px]"
      data-name="Logo 5"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[84px] items-start justify-center p-[20px] relative w-[154px]">
          <LogoDesktop4 />
        </div>
      </div>
    </div>
  );
}

function LogoDesktop5() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo5}')` }}
    />
  );
}

function Logo6Desktop() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 6"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoDesktop5 />
        </div>
      </div>
    </div>
  );
}

function LogoRowDesktop() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-10 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Logo Row"
    >
      <Logo1Desktop />
      <Logo2Desktop />
      <Logo3Desktop />
      <Logo4Desktop />
      <Logo5Desktop />
      <Logo6Desktop />
    </div>
  );
}

function LogoCloudDesktop() {
  return (
    <div className="relative size-full" data-name="Logo cloud">
      <div className="flex flex-col items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start max-w-inherit px-0 py-[50px] relative size-full">
          <div
            className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap tracking-[-0.075px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
              Created by/Partners:
            </p>
          </div>
          <LogoRowDesktop />
        </div>
      </div>
    </div>
  );
}

function LogoTablet() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo}')` }}
    />
  );
}

function Logo1Tablet() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 1"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoTablet />
        </div>
      </div>
    </div>
  );
}

function LogoTablet1() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo1}')` }}
    />
  );
}

function Logo2Tablet() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 2"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoTablet1 />
        </div>
      </div>
    </div>
  );
}

function LogoTablet2() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo2}')` }}
    />
  );
}

function Logo3Tablet() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 3"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoTablet2 />
        </div>
      </div>
    </div>
  );
}

function LogoTablet3() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo3}')` }}
    />
  );
}

function Logo4Tablet() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 4"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoTablet3 />
        </div>
      </div>
    </div>
  );
}

function LogoTablet4() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo4}')` }}
    />
  );
}

function Logo5Tablet() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 5"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoTablet4 />
        </div>
      </div>
    </div>
  );
}

function LogoTablet5() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo5}')` }}
    />
  );
}

function Logo6Tablet() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 6"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoTablet5 />
        </div>
      </div>
    </div>
  );
}

function LogoRowTablet() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-10 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Logo Row"
    >
      <Logo1Tablet />
      <Logo2Tablet />
      <Logo3Tablet />
      <Logo4Tablet />
      <Logo5Tablet />
      <Logo6Tablet />
    </div>
  );
}

function LogoCloudTablet() {
  return (
    <div className="relative size-full" data-name="Logo cloud">
      <div className="flex flex-col items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start max-w-inherit px-0 py-[50px] relative size-full">
          <div
            className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap tracking-[-0.075px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
              Created by/Partners:
            </p>
          </div>
          <LogoRowTablet />
        </div>
      </div>
    </div>
  );
}

function LogoMobile() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo}')` }}
    />
  );
}

function Logo1Mobile() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 1"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoMobile />
        </div>
      </div>
    </div>
  );
}

function LogoMobile1() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo1}')` }}
    />
  );
}

function Logo2Mobile() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 2"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoMobile1 />
        </div>
      </div>
    </div>
  );
}

function LogoMobile2() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo2}')` }}
    />
  );
}

function Logo3Mobile() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 3"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoMobile2 />
        </div>
      </div>
    </div>
  );
}

function LogoMobile3() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo3}')` }}
    />
  );
}

function Logo4Mobile() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 4"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoMobile3 />
        </div>
      </div>
    </div>
  );
}

function LogoMobile4() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo4}')` }}
    />
  );
}

function Logo5Mobile() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 5"
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoMobile4 />
        </div>
      </div>
    </div>
  );
}

function LogoMobile5() {
  return (
    <div
      className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px mix-blend-exclusion opacity-60 shrink-0 w-full"
      data-name="Logo"
      style={{ backgroundImage: `url('${imgLogo5}')` }}
    />
  );
}

function Logo6Mobile() {
  return (
    <div
      className="h-[81.818px] relative shrink-0 w-[150px]"
      data-name="Logo 6"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[81.818px] items-start justify-center p-[20px] relative w-[150px]">
          <LogoMobile5 />
        </div>
      </div>
    </div>
  );
}

function LogoRowMobile() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-10 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Logo Row"
    >
      <Logo1Mobile />
      <Logo2Mobile />
      <Logo3Mobile />
      <Logo4Mobile />
      <Logo5Mobile />
      <Logo6Mobile />
    </div>
  );
}

function LogoCloudMobile() {
  return (
    <div className="relative size-full" data-name="Logo cloud">
      <div className="flex flex-col items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start max-w-inherit px-4 py-[50px] relative size-full">
          <div
            className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap tracking-[-0.075px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
              Created by/Partners:
            </p>
          </div>
          <LogoRowMobile />
        </div>
      </div>
    </div>
  );
}

function LogoCloud() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <LogoCloudMobile />;
  }
  if (width < 1280) {
    return <LogoCloudTablet />;
  }
  return <LogoCloudDesktop />;
}

export default LogoCloud;