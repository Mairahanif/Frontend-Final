import React from "react";
import "./CSS/Navigation.css";

import { useActiveBreakpoint } from "figma:react";

function NavItemsDesktop() {
  return (
    <div
      className="backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.4)] relative rounded-[100px] size-full"
      data-name="Nav Items"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch cursor-pointer flex flex-row font-['DM_Sans:Bold',_sans-serif] font-bold gap-[27px] items-center justify-start leading-[0] overflow-clip px-6 py-5 relative size-full text-[#ffffff] text-[14px] text-center text-nowrap tracking-[-0.35px]">
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              About us
            </p>
          </button>
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">{`Chat  bot`}</p>
          </button>
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              How-to
            </p>
          </button>
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              Contact Us
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

function NavItemsTablet() {
  return (
    <div
      className="backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.4)] relative rounded-[100px] size-full"
      data-name="Nav Items"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch cursor-pointer flex flex-row font-['DM_Sans:Bold',_sans-serif] font-bold gap-[27px] items-center justify-start leading-[0] overflow-clip px-6 py-5 relative size-full text-[#ffffff] text-[14px] text-center text-nowrap tracking-[-0.35px]">
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              About us
            </p>
          </button>
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              Specifications
            </p>
          </button>
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              How-to
            </p>
          </button>
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              Contact Us
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

function NavItemsMobile() {
  return (
    <div
      className="backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.4)] relative rounded-[100px] size-full"
      data-name="Nav Items"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch cursor-pointer flex flex-row font-['DM_Sans:Bold',_sans-serif] font-bold gap-[27px] items-center justify-start leading-[0] overflow-clip px-6 py-5 relative size-full text-[#000000] text-[14px] text-center text-nowrap tracking-[-0.35px]">
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              About us
            </p>
          </button>
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              Specifications
            </p>
          </button>
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              How-to
            </p>
          </button>
          <button
            className="[white-space-collapse:collapse] block relative shrink-0"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.4] text-nowrap whitespace-pre">
              Contact Us
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

function NavItems() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <NavItemsMobile />;
  }
  if (width < 1280) {
    return <NavItemsTablet />;
  }
  return <NavItemsDesktop />;
}

export default NavItems;