import React from "react";
import UpperLinks from "./UpperLinks";
const BlinkId: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col h-fit rounded-5xl px-[34px] py-[32px] border bg-white dark:bg-transparent border-gray border-solid shadow group hover:cursor-pointer mx-auto w-full">
      <div className="text-center">
        <span className="uppercase text-gray-400 font-medium text-sm md:text-base">
          DOCUMENT SCANNING
        </span>
      </div>
      <div className="flex flex-col md:flex-wrap  gap-[18px] pt-[24px]">
        <a
          href="https://docs.microblink.com/blinkid/"
          className="flex flex-row items-center justify-center gap-[8px] text-base font-medium text-royal-blue !no-underline"
        >
          <span className="text-2xl md:text-3xl font-medium text-royal-blue relative transition-all duration-500 left-[20px] group-hover:left-0 no-underline">
            BlinkID docs
          </span>
          <svg
            className="rtl:rotate-180 fill-royal-blue opacity-0 group-hover:opacity-100 transition-all duration-500"
            width="40"
            height="40"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.91058 4.41083C7.23602 4.08539 7.76366 4.08539 8.08909 4.41083L13.0891 9.41083C13.4145 9.73626 13.4145 10.2639 13.0891 10.5893L8.08909 15.5893C7.76366 15.9148 7.23602 15.9148 6.91058 15.5893C6.58514 15.2639 6.58514 14.7363 6.91058 14.4108L11.3213 10.0001L6.91058 5.58934C6.58514 5.2639 6.58514 4.73626 6.91058 4.41083Z"
            />
          </svg>
        </a>
        <span className="text-base md:text-lg text-dark-blue-2 dark:text-[#E7F0FF]">
          Scan and extract data from identity document
        </span>
      </div>
      {/*<div
        className={`flex flex-col [&>div]:md:grid [&>div]:md:grid-cols-2 [&>div]:lg:flex [&>div]:lg:flex-col`}
      >
        <UpperLinks
          type="blinkid_hero"
          centred="true"
          padding="no"
        ></UpperLinks>
      </div>*/}
    </div>
  );
};

export default BlinkId;
