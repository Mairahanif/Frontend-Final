import { useActiveBreakpoint } from "figma:react";

function TextContentDesktop() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-10 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Text content"
    >
      <div
        className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[12px] text-center tracking-[-0.12px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.4]">Specs</p>
      </div>
      <div
        className="font-['Crimson_Text:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[60px] text-center tracking-[-1.8px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[0.9]">
          Short story about the service, vision, and values
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[15px] text-center tracking-[-0.075px]"
        style={{
          width: "min-content",
          fontVariationSettings: "'opsz' 14",
        }}
      >
        <p className="block leading-[1.4]">{`You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. `}</p>
      </div>
      <a
        className="bg-[#485c11] cursor-pointer relative rounded-[1000px] shrink-0"
        data-name="Button"
        href="https://www.figma.com/sites"
      >
        <div className="flex flex-col items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[22px] py-3.5 relative">
            <div
              className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[-0.35px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                learn more about the values...
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function ContentDesktop() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Content"
    >
      <div className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start px-60 py-20 relative w-full">
          <TextContentDesktop />
        </div>
      </div>
    </div>
  );
}

function TableItemDesktop() {
  return (
    <div
      className="h-24 relative shrink-0 w-full"
      data-name="table item"
    >
      <div className="absolute border-[#485c11] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-24 items-start justify-center px-[30px] py-10 relative w-full">
          <div
            className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8e9c78] text-[25.7143px] text-left text-nowrap tracking-[-2.05714px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
              Our App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column1Desktop() {
  return (
    <div
      className="basis-0 bg-[#cecece] grow min-h-px min-w-[200px] relative rounded-[20px] shrink-0"
      data-name="Column 1"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start min-w-inherit overflow-clip p-0 relative w-full">
        <TableItemDesktop />
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Ultra-fast browsing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   style={
  {
    "--fill-0": "rgba(0, 0, 0, 1)",
  }
                    }
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Advanced AI insights
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Seamless integration
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Advanced AI insights
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Ultra-fast browsing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Full UTF-8 support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function TableItemDesktop1() {
  return (
    <div
      className="h-24 relative shrink-0 w-full"
      data-name="table item"
    >
      <div className="absolute border-[#8e9c78] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-24 items-start justify-center px-[30px] py-10 relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8e9c78] text-[22.8571px] text-left text-nowrap tracking-[-1.82857px]">
            <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
              Yelp/AI agents out there
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2Desktop() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-[200px] p-0 relative shrink-0"
      data-name="Column 2"
    >
      <TableItemDesktop1 />
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Fast browsing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Basic AI recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Restricts customization
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Basic AI insights
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Fast browsing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Potential display errors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableItemDesktop2() {
  return (
    <div
      className="h-24 relative shrink-0 w-full"
      data-name="table item"
    >
      <div className="absolute border-[#8e9c78] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-24 items-start justify-center px-[30px] py-10 relative w-full">
          <div className="flex flex-col font-['Reddit_Mono:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8e9c78] text-[21.6541px] text-left text-nowrap tracking-[-1.73233px]">
            <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
              Other Websites
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column3Desktop() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-[200px] p-0 relative shrink-0"
      data-name="Column 3"
    >
      <TableItemDesktop2 />
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Moderate speeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                No AI assistance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Steep learning curve
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                No AI assistance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Moderate speeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Partial UTF-8 support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableDesktop() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start overflow-x-auto overflow-y-clip p-0 relative rounded-[20px] shrink-0 w-full"
      data-name="Table"
    >
      <Column1Desktop />
      <Column2Desktop />
      <Column3Desktop />
    </div>
  );
}

function SpecificationsTableDesktop() {
  return (
    <div
      className="relative size-full"
      data-name="Specifications table"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start max-w-inherit pb-[120px] pt-0 px-0 relative size-full">
          <ContentDesktop />
          <TableDesktop />
        </div>
      </div>
    </div>
  );
}

function TextContentTablet() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-10 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Text content"
    >
      <div
        className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[12px] text-center tracking-[-0.12px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.4]">Specs</p>
      </div>
      <div
        className="font-['Crimson_Text:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[60px] text-center tracking-[-1.8px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[0.9]">
          Short story about the service, vision, and values
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[15px] text-center tracking-[-0.075px]"
        style={{
          width: "min-content",
          fontVariationSettings: "'opsz' 14",
        }}
      >
        <p className="block leading-[1.4]">{`You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. `}</p>
      </div>
      <a
        className="bg-[#485c11] cursor-pointer relative rounded-[1000px] shrink-0"
        data-name="Button"
        href="https://www.figma.com/sites"
      >
        <div className="flex flex-col items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[22px] py-3.5 relative">
            <div
              className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[-0.35px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                learn more about the values...
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function ContentTablet() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Content"
    >
      <div className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start p-[80px] relative w-full">
          <TextContentTablet />
        </div>
      </div>
    </div>
  );
}

function TableItemTablet() {
  return (
    <div
      className="h-24 relative shrink-0 w-full"
      data-name="table item"
    >
      <div className="absolute border-[#485c11] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-24 items-start justify-center px-[30px] py-10 relative w-full">
          <div
            className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8e9c78] text-[25.7143px] text-left text-nowrap tracking-[-2.05714px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
              Our App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column1Tablet() {
  return (
    <div
      className="basis-0 bg-[#cecece] grow min-h-px min-w-[200px] relative rounded-[20px] self-stretch shrink-0"
      data-name="Column 1"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start min-w-inherit overflow-clip p-0 relative size-full">
        <TableItemTablet />
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Ultra-fast browsing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Advanced AI insights
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Seamless integration
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Advanced AI insights
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Ultra-fast browsing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Full UTF-8 support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function TableItemTablet1() {
  return (
    <div
      className="h-24 relative shrink-0 w-full"
      data-name="table item"
    >
      <div className="absolute border-[#8e9c78] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-24 items-start justify-center px-[30px] py-10 relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8e9c78] text-[22.8571px] text-left text-nowrap tracking-[-1.82857px]">
            <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
              Yelp/AI agents out there
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2Tablet() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-[200px] p-0 relative shrink-0"
      data-name="Column 2"
    >
      <TableItemTablet1 />
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Fast browsing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Basic AI recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Restricts customization
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Basic AI insights
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Fast browsing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Potential display errors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableItemTablet2() {
  return (
    <div
      className="h-24 relative shrink-0 w-full"
      data-name="table item"
    >
      <div className="absolute border-[#8e9c78] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-24 items-start justify-center px-[30px] py-10 relative w-full">
          <div className="flex flex-col font-['Reddit_Mono:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8e9c78] text-[21.6541px] text-left text-nowrap tracking-[-1.73233px]">
            <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
              Other Websites
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column3Tablet() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-[200px] p-0 relative self-stretch shrink-0"
      data-name="Column 3"
    >
      <TableItemTablet2 />
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Moderate speeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                No AI assistance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Steep learning curve
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                No AI assistance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Moderate speeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-5 py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Partial UTF-8 support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableTablet() {
  return (
    <div
      className="relative rounded-[20px] shrink-0 w-full"
      data-name="Table"
    >
      <div className="overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-[2px] relative w-full">
          <Column1Tablet />
          <Column2Tablet />
          <Column3Tablet />
        </div>
      </div>
    </div>
  );
}

function SpecificationsTableTablet() {
  return (
    <div
      className="relative size-full"
      data-name="Specifications table"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start max-w-inherit pb-[120px] pt-0 px-0 relative size-full">
          <ContentTablet />
          <TableTablet />
        </div>
      </div>
    </div>
  );
}

function TextContentMobile() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Text content"
    >
      <div
        className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[12px] text-center tracking-[-0.12px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.4]">Specs</p>
      </div>
      <div
        className="font-['Crimson_Text:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[60px] text-center tracking-[-1.8px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[0.9]">
          Short story about the service, vision, and values
        </p>
      </div>
      <div
        className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[15px] text-center tracking-[-0.075px]"
        style={{
          width: "min-content",
          fontVariationSettings: "'opsz' 14",
        }}
      >
        <p className="block leading-[1.4]">{`You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. `}</p>
      </div>
      <a
        className="bg-[#485c11] cursor-pointer relative rounded-[1000px] shrink-0"
        data-name="Button"
        href="https://www.figma.com/sites"
      >
        <div className="flex flex-col items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[22px] py-3.5 relative">
            <div
              className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[-0.35px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                learn more about the values...
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function ContentMobile() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Content"
    >
      <div className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start px-4 py-20 relative w-full">
          <TextContentMobile />
        </div>
      </div>
    </div>
  );
}

function TableItemMobile() {
  return (
    <div
      className="h-24 relative shrink-0 w-full"
      data-name="table item"
    >
      <div className="absolute border-[#485c11] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-24 items-start justify-center px-[30px] py-10 relative w-full">
          <div
            className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8e9c78] text-[25.7143px] text-left text-nowrap tracking-[-2.05714px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
              Our App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column1Mobile() {
  return (
    <div
      className="bg-[#cecece] min-w-[200px] relative rounded-[20px] shrink-0 w-[200px]"
      data-name="Column 1"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start min-w-inherit overflow-clip p-0 relative w-[200px]">
        <TableItemMobile />
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Ultra-fast browsing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Advanced AI insights
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Seamless integration
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Advanced AI insights
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Ultra-fast browsing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative shrink-0 w-full"
          data-name="Table item"
        >
          <div className="absolute border-[#000000] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
              <div
                className="overflow-clip relative shrink-0 size-3.5"
                data-name="Check icon"
              >
                <div
                  className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
                  data-name="Vector"
                >
                  <div
                    className="absolute inset-0"
                   // ...existing code...
style={{
  "--fill-0": "rgba(0, 0, 0, 1)",
}}
// ...existing code...
                  />
                </div>
              </div>
              <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap tracking-[-0.12px]">
                <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                  Full UTF-8 support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function TableItemMobile1() {
  return (
    <div
      className="h-24 relative shrink-0 w-full"
      data-name="table item"
    >
      <div className="absolute border-[#8e9c78] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-24 items-start justify-center px-[30px] py-10 relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8e9c78] text-[22.8571px] text-left text-nowrap tracking-[-1.82857px]">
            <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
              Yelp/AI agents out there
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2Mobile() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start min-w-[200px] p-0 relative self-stretch shrink-0 w-[200px]"
      data-name="Column 2"
    >
      <TableItemMobile1 />
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Fast browsing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Basic AI recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Restricts customization
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Basic AI insights
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Check icon"
            >
              <div
                className="absolute bottom-[20.833%] left-[14.583%] right-[12.5%] top-[23.292%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Fast browsing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Potential display errors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableItemMobile2() {
  return (
    <div
      className="h-24 relative shrink-0 w-full"
      data-name="table item"
    >
      <div className="absolute border-[#8e9c78] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-24 items-start justify-center px-[30px] py-10 relative w-full">
          <div className="flex flex-col font-['Reddit_Mono:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8e9c78] text-[21.6541px] text-left text-nowrap tracking-[-1.73233px]">
            <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
              Other Websites
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column3Mobile() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start min-w-[200px] p-0 relative self-stretch shrink-0 w-[200px]"
      data-name="Column 3"
    >
      <TableItemMobile2 />
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Moderate speeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                No AI assistance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Steep learning curve
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                No AI assistance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Moderate speeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Table item"
      >
        <div className="absolute border-[#ffffff] border-[0px_0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-[30px] py-8 relative w-full">
            <div
              className="overflow-clip relative shrink-0 size-3.5"
              data-name="Close icon"
            >
              <div
                className="absolute inset-[20.833%]"
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
            <div className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[-0.12px]">
              <p className="adjustLetterSpacing block leading-[1.4] whitespace-pre">
                Partial UTF-8 support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableMobile() {
  return (
    <div
      className="relative rounded-[20px] shrink-0 w-full"
      data-name="Table"
    >
      <div className="overflow-x-auto overflow-y-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start pl-2 pr-0 py-0 relative w-full">
          <Column1Mobile />
          <Column2Mobile />
          <Column3Mobile />
        </div>
      </div>
    </div>
  );
}

function SpecificationsTableMobile() {
  return (
    <div
      className="relative size-full"
      data-name="Specifications table"
    >
      <div className="max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start max-w-inherit pb-[120px] pt-0 px-0 relative size-full">
          <ContentMobile />
          <TableMobile />
        </div>
      </div>
    </div>
  );
}

function SpecificationsTable() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <SpecificationsTableMobile />;
  }
  if (width < 1280) {
    return <SpecificationsTableTablet />;
  }
  return <SpecificationsTableDesktop />;
}

export default SpecificationsTable;