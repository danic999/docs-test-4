import React from "react";
import styles from "./styles.module.css";
import { useLocation } from "@docusaurus/router";

type CTAItem = {
  title: string;
  Image: React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>>;
  description: JSX.Element;
  link: {
    text: string;
    url: string;
  };
};

const CTAListClassic: CTAItem[] = [
  {
    title: "Support team",
    Image: require("../../../docs/assets/contact-support.png").default,
    description: (
      <>Technical issue? Get in touch with a Microblink specialist.</>
    ),
    link: {
      text: "Get support now",
      url: "https://help.microblink.com/s/submit-request",
    },
  },
  {
    title: "Sales team",
    Image: require("../../../docs/assets/contact-sales.png").default,
    description: (
      <>Talk with a representative to explore our pricing options.</>
    ),
    link: {
      text: "Get in touch",
      url: "https://microblink.com/contact-us/",
    },
  },
];

const CTAListHomepage: CTAItem[] = [
  {
    title: "Contact sales",
    Image: require("../../../docs/assets/contact-sales.png").default,
    description: (
      <>Talk with an expert to put our AI to work at your business.</>
    ),
    link: {
      text: "",
      url: "https://help.microblink.com/s/submit-request",
    },
  },
  {
    title: "Help Center",
    Image: require("../../../docs/assets/help-center.png").default,
    description: <>Browse through our knowledge base and other resources.</>,
    link: {
      text: "",
      url: "https://microblink.com/contact-us/",
    },
  },
  {
    title: "Contact Support",
    Image: require("../../../docs/assets/contact-support.png").default,
    description: (
      <>Technical issue? Get in touch with a Microblink specialist.</>
    ),
    link: {
      text: "",
      url: "https://microblink.com/contact-us/",
    },
  },
];

function CTA({
  title,
  Image,
  description,
  link,
  isHomepage,
}: CTAItem & { isHomepage: boolean }) {
  return (
    <div className="flex flex-1 flex-col p-[16px] lg:p-[32px] text-center">
      <div className="flex flex-col gap-[8px]">
        <img src={Image} className="w-[48px] h-[48px] mx-auto" role="img" />
        <span className="text-xl font-medium text-dark-blue dark:text-[#E7F0FF]">
          {title}
        </span>
        <span>{description}</span>
      </div>

      <a href={link.url}>
        <button
          className={`border-none  flex flex-row items-center rounded-full w-fit mx-auto my-[16px] ${
            isHomepage
              ? "bg-royal-blue p-[10px]"
              : "bg-transparent pr-[16px] pl-[20px] py-[12px]"
          }`}
        >
          <span
            className={`text-base font-medium font-display ${
              isHomepage ? "text-white" : "text-royal-blue"
            }`}
          >
            {link.text}
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={isHomepage ? "fill-white" : "fill-royal-blue"}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.36635 17.6487C9.14138 17.4236 9.015 17.1185 9.015 16.8003C9.015 16.4821 9.14138 16.1769 9.36635 15.9519L13.3179 12.0003L9.36635 8.04865C9.25173 7.93796 9.16032 7.80554 9.09742 7.65914C9.03453 7.51274 9.00143 7.35527 9.00005 7.19594C8.99866 7.0366 9.02902 6.87859 9.08936 6.73111C9.1497 6.58363 9.2388 6.44965 9.35147 6.33698C9.46414 6.22431 9.59813 6.13521 9.7456 6.07487C9.89308 6.01453 10.0511 5.98417 10.2104 5.98555C10.3698 5.98694 10.5272 6.02004 10.6736 6.08293C10.82 6.14582 10.9524 6.23724 11.0631 6.35186L15.8631 11.1519C16.0881 11.3769 16.2145 11.6821 16.2145 12.0003C16.2145 12.3185 16.0881 12.6236 15.8631 12.8487L11.0631 17.6487C10.8381 17.8736 10.5329 18 10.2147 18C9.89655 18 9.59138 17.8736 9.36635 17.6487Z"
            />
          </svg>
        </button>
      </a>
    </div>
  );
}
export default function GotQuestion(): JSX.Element {
  const location = useLocation();

  const isHomepage = location.pathname === "/";

  const CTAList = isHomepage ? CTAListHomepage : CTAListClassic;

  return (
    <section className="max-w-[1216px] py-[40px] lg:py-[80px] mx-auto flex flex-col gap-[40px]">
      <div className="text-center">
        <span className="text-3xl font-medium text-dark-blue dark:text-[#E7F0FF]">
          Got questions? We've got answers!
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-[24px] justify-center w-full">
        {CTAList.map((props, idx) => (
          <CTA key={idx} {...props} isHomepage={isHomepage} />
        ))}
      </div>
    </section>
  );
}
