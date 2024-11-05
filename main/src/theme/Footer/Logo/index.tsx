import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import type { Props } from "@theme/Footer/Logo";

import styles from "./styles.module.css";

function LogoImage({ logo }: Props) {
  const { withBaseUrl } = useBaseUrlUtils();
  const sources = {
    light: withBaseUrl(logo.src),
    dark: withBaseUrl(logo.srcDark ?? logo.src),
  };
  return (
    <div className="flex flex-col min-w-[368px] gap-[24px] pl-[16px] lg:pl-0 lg:m-0">
      <ThemedImage
        className={clsx(logo.className)}
        alt={logo.alt}
        sources={sources}
        width={logo.width}
        height={logo.height}
        style={logo.style}
      />
      <span className="text-3xl text-white font-medium">Try it for free</span>
      <a href="https://microblink.com/free-plan/">
        <button className="bg-royal-blue border-none pr-[8px] pl-[12px] py-[6px] flex flex-row items-center rounded-full w-fit">
          <span className="text-white text-sm font-bold font-display">
            Start your free plan
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.36635 17.6487C9.14138 17.4236 9.015 17.1185 9.015 16.8003C9.015 16.4821 9.14138 16.1769 9.36635 15.9519L13.3179 12.0003L9.36635 8.04865C9.25173 7.93796 9.16032 7.80554 9.09742 7.65914C9.03453 7.51274 9.00143 7.35527 9.00005 7.19594C8.99866 7.0366 9.02902 6.87859 9.08936 6.73111C9.1497 6.58363 9.2388 6.44965 9.35147 6.33698C9.46414 6.22431 9.59813 6.13521 9.7456 6.07487C9.89308 6.01453 10.0511 5.98417 10.2104 5.98555C10.3698 5.98694 10.5272 6.02004 10.6736 6.08293C10.82 6.14582 10.9524 6.23724 11.0631 6.35186L15.8631 11.1519C16.0881 11.3769 16.2145 11.6821 16.2145 12.0003C16.2145 12.3185 16.0881 12.6236 15.8631 12.8487L11.0631 17.6487C10.8381 17.8736 10.5329 18 10.2147 18C9.89655 18 9.59138 17.8736 9.36635 17.6487Z"
              fill="white"
            />
          </svg>
        </button>
      </a>
    </div>
  );
}

export default function FooterLogo({ logo }: Props): JSX.Element {
  return logo.href ? <LogoImage logo={logo} /> : <LogoImage logo={logo} />;
}
