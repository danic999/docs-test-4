import React from "react";
import UpperLinks from "@site/src/components/HomepageFeatures/UpperLinks";
import Layout from "@theme/Layout";

const BlinkId = ({}) => {
  return (
    <Layout title="BlinkID" description="Description of the Blink Verify page">
      <div className="w-full px-[16px]">
        <div className="max-w-[1216px] mx-auto flex flex-col">
          <div className="pageHeader">
            <button className="blueBtn"> BlinkID </button>
          </div>
          <div className="spacer"></div>

          <div className="pt-[16px] max-w-[850px]">
            <h1>Mobile SDKs</h1>
            <p>
              Turn any mobile device into an AI-powered identity document
              scanner.
            </p>
          </div>
          <UpperLinks type="blinkid" />

          <div className="flex flex-col max-w-[850px]">
            <h1>Web Solutions</h1>
            <p>
              Add ID scanning to your website, web app or even custom hardware.
              BlinkID runs everywhere - in the cloud, on your own
              infrastructure, inside a browser or on bare metal.
            </p>
          </div>
          <UpperLinks type="blinkid_web" />
        </div>
      </div>
    </Layout>
  );
};
export default BlinkId;
