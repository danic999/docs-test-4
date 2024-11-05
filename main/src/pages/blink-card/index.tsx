import React from "react";
import UpperLinks from "@site/src/components/HomepageFeatures/UpperLinks";
import Layout from "@theme/Layout";

const BlinkCard = ({}) => {
  return (
    <Layout
      title="BlinkCard"
      description="Description of the Blink Verify page"
    >
      <div className="w-full px-[16px]">
        <div className="max-w-[1216px] mx-auto flex flex-col">
          <div className="pageHeader">
            <button className="blueBtn"> BlinkCard </button>
          </div>
          <div className="spacer"></div>

          <div className="pt-[16px] max-w-[850px]">
            <h1>Mobile SDKs</h1>
            <p>
              Enhance your Android or iOS app with AI-driven credit card
              scanning. You'll find the sample code, release notes and
              everything else you need to integrate the SDK in the repositories
              below.
            </p>
          </div>
          <UpperLinks type="blinkcard" />

          <div className="max-w-[850px]">
            <h1>Web Solutions</h1>
            <p>
              Integrate credit card scanning on the backend or frontend of your
              web app. You’ll find the JavaScript libraries, sample requests, as
              well as the integration guide for the API in the documentation
              below.
            </p>
          </div>
          <UpperLinks type="blinkcard_web" />
        </div>
      </div>
    </Layout>
  );
};
export default BlinkCard;
