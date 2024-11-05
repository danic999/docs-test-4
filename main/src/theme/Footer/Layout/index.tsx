import React from "react";
import { useLocation } from "react-router-dom";

import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";
import GetStarted from "@site/src/components/HomepageFeatures/GetStarted";
import GotQuestion from "@site/src/components/HomepageFeatures/GotQuestion";

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  const location = useLocation();

  const isBlinkId = location.pathname.startsWith("/docs/blinkid");
  const isBlinkCard = location.pathname.startsWith("/docs/blink-card");
  const isBlinkVerify = location.pathname.startsWith("/docs/blinkid-verify");
  const isHomepage = location.pathname === "/";

  const getStarted = {
    title: "Build fantastic user experiences with Microblink",
    features: [
      {
        title: "Sign up for an account",
        description: "No credit card required",
      },
      {
        title: "Generate and manage licenses",
        description: "Try 30 days free for all our products",
      },
      {
        title: "Integrate and start building",
        description: "Well-documented integration guidelines",
      },
    ],
    link: {
      title: "Create a Microblink Account",
      url: "https://developer.microblink.com/register",
    },
  };

  return (
    <div>
      <div className="before-footer w-full">
        {isHomepage && <GetStarted props={getStarted} />}
        <GotQuestion></GotQuestion>
      </div>
      <footer
        className={clsx("footer", {
          "footer--dark": style === "dark",
        })}
      >
        <div className="max-w-[1216px] mx-auto flex flex-col px-[8px]">
          <div className="flex flex-col lg:flex-row justify-between gap-[32px] w-full">
            {logo}
            {links}
          </div>
          {copyright && <div className="footer__bottom">{copyright}</div>}
        </div>
      </footer>
    </div>
  );
}
