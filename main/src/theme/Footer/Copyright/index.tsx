type FooterItem = {
  title: string;
  url: string;
};

const FooterList: FooterItem[] = [
  {
    title: "Privacy Policy",
    url: "https://microblink.com/legal/#privacy-policy",
  },
  {
    title: "Legal",
    url: "https://microblink.com/legal/",
  },
  {
    title: "Security & Privacy",
    url: "https://microblink.com/security-and-privacy/",
  },
];

import React from "react";
import type { Props } from "@theme/Footer/Copyright";

export default function FooterCopyright({ copyright }: Props): JSX.Element {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="border-t-[1px] border-solid border-[#9CA3AF] my-[40px]"></div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-center md:text-left">
          <span>{copyright}</span>
          {FooterList.map((item, index) => (
            <React.Fragment key={index}>
              <a className="px-[4px] text-white" href={item.url}>
                {item.title}
              </a>
              {index !== FooterList.length - 1 && "|"}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-row gap-[24px] mx-auto pt-[16px] md:pt-0 md:m-0">
          <a href="https://www.linkedin.com/company/microblink//">
            <img
              src={require("../../../../docs/assets/linkedin.png").default}
              width="24px"
              height="24px"
              alt=""
            />
          </a>
          <a href="https://www.twitter.com/microblink">
            <img
              src={require("../../../../docs/assets/twitter.png").default}
              width="24px"
              height="24px"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/microblink">
            <img
              src={require("../../../../docs/assets/facebook.png").default}
              width="24px"
              height="24px"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
