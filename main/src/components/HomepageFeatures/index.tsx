import React from "react";
import BlinkReceipt from "./BlinkReceipt";
import BlinkId from "./BlinkId";
import BlinkCard from "./BlinkCard";
import BlinkVerify from "./BlinkVerify";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="w-full px-[16px]">
      {/*   <div className="text-center pt-[60px]"></div> */}
      <div className="max-w-[1216px] mx-auto py-[24px] lg:py-[60px]">
        <div className="grid grid-cols-2 justify-around gap-[32px] text-center mx-auto md:mx-0">
          <BlinkId></BlinkId>
          <BlinkVerify></BlinkVerify>
          <BlinkCard></BlinkCard>
          <BlinkReceipt></BlinkReceipt>
        </div>
      </div>
    </section>
  );
}
