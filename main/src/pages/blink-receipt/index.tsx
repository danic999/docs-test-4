import React from "react";
import UpperLinks from "@site/src/components/HomepageFeatures/UpperLinks";
import Layout from "@theme/Layout";

const BlinkReceipt = ({}) => {
  return (
    <Layout
      title="BlinkReceipt"
      description="Description of the Blink Receipt page"
    >
      <div className="w-full px-[16px]">
        <div className="max-w-[1216px] mx-auto flex flex-col pb-[40px] md:pb-[60px] lg:pb-[80px]">
          <div className="pageHeader">
            <button className="blueBtn"> BlinkReceipt </button>
          </div>
          <div className="flex flex-col gap-[48px] pt-[26px]">
            <div className="flex flex-col gap-[26px]">
              <span className="text-5xl text-black font-bold dark:text-white ">
                Physical receipt integrations
              </span>
              <p className="text-base text-dark-blue-2 dark:text-[#E7F0FF]">
                Automatically capture first-party purchase data, wherever that
                purchase data lives.
              </p>
            </div>
            <div className="">
              <h3 className="text-3xl font-bold text-dark-blue-2 dark:text-[#E7F0FF]">
                Mobile SDKs
              </h3>
              <p>
                Capture and extract SKU-level purchase data from physical
                receipts.
              </p>
              <UpperLinks type="blinkreceipt" />
            </div>
            <div className="max-w-[850px]">
              <h3 className="text-3xl font-bold text-dark-blue-2 dark:text-[#E7F0FF]">
                Web Solutions
              </h3>
              <p>
                Send receipt images as API calls and get the parsed results back
              </p>
              <UpperLinks type="blinkreceipt_web" />
            </div>

            <span className="text-5xl text-black font-bold dark:text-white">
              Digital receipt integrations
            </span>
            <div className="">
              <h3 className="text-3xl font-bold text-dark-blue-2 dark:text-[#E7F0FF]">
                Mobile SDKs
              </h3>
              <p>
                Connect to users' email inboxes to extract first-party purchase
                data.
              </p>
              <UpperLinks type="blinkreceipt_digital" />
            </div>
            <div className="max-w-[850px]">
              <h3 className="text-3xl font-bold text-dark-blue-2 dark:text-[#E7F0FF]">
                More resources
              </h3>
              <p>Explore our API documentation</p>
              <UpperLinks type="blinkreceipt_digital_web" />
            </div>

            <span className="text-5xl text-black font-bold dark:text-white">
              Account linking
            </span>
            <div className="">
              <h3 className="text-3xl font-bold text-dark-blue-2 dark:text-[#E7F0FF]">
                Mobile SDKs
              </h3>
              <p>
                Connect to users' online merchant accounts to extract
                first-party purchase data.
              </p>
              <UpperLinks type="blinkreceipt_account" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlinkReceipt;
