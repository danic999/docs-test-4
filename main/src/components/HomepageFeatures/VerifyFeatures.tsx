import React from "react";
import rightarr from "../../../docs/assets/arrow-right.svg";
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

function VerifyFeatures() {
  return (
    <div className="w-full px-[16px]">
      <div className="max-w-[1216px] mx-auto py-[80px] relative">
        <div className="absolute top-[17px] w-full h-[2px] bg-gray"></div>
        <div className="flex flex-row mx-auto">
          {features &&
            features.map((feature) => (
              <div className="flex-1 flex flex-col gap-[24px] px-[16px] md:px-[40px] py-[40px] text-center">
                <span className="text-dark-blue dark:text-[#e3e3e3] font-medium text-2xl py-[12px] ">
                  {feature.title}
                </span>
                <div className="w-[100px] h-[2px] rounded-full bg-gradient-yellow-blue mx-auto"></div>
                <span className="text-dark-blue-2 dark:text-[#E7F0FF] text-lg">
                  {feature.description}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default VerifyFeatures;
