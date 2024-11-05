import clsx from "clsx";
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures/index";
import Heading from "@theme/Heading";
import Footer from "../components/HomepageFeatures/Footer";
import styles from "./index.module.css";
import hero from "../../docs/assets/Vector.png";
import VerifyFeatures from "../components/HomepageFeatures/VerifyFeatures";
const features = [
  {
    title: "Advanced data integrity verification",
    description:
      "BlinkID Verify authenticates documents with unmatched precision, and thwarts advanced fraud attempts with sophisticated cross-matching technology.",
  },
  {
    title: "Enhanced security and liveness detection",
    description:
      "BlinkID Verify improves the verification process by establishing the presence of the document holder and confirming the authenticity of documents.",
  },
  {
    title: "Cutting-edge forgery and fraud detection",
    description:
      "Our advanced platform and ML models detect and prevent document fraud, safeguarding against sophisticated forgeries and ensuring real-time presence during identity verification.",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="w-full px-[16px]">
      <img
        className="hidden md:flex absolute right-0 max-w-[380px] md:max-w-[45%] lg:max-w-[40%] z-[-1]"
        src={hero}
        alt=""
      />
      <div className="max-w-[1216px] mx-auto py-[40px] md:py-[60px] lg:pt-[80px] lg:pb-[60px]">
        <div className="flex flex-col gap-[24px] text-left lg:text-center">
          <div>
            <span className="text-3xl lg:text-5xl font-medium text-dark-blue dark:text-[#E7F0FF]">
              {siteConfig.title}{" "}
            </span>
            <span className="text-3xl lg:text-5xl font-medium text-royal-blue">
              Docs
            </span>
          </div>
          <span className="text-base lg:text-lg max-w-[600px] text-dark-blue-2 dark:text-[#E7F0FF] lg:mx-auto">
            {siteConfig.tagline}
          </span>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Microblink Documentation"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}
