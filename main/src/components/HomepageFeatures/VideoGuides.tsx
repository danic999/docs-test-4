import React from "react";
import ReactPlayer from "react-player";

export default function VideoGuides({ guides }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
      {guides.map((video, index) => (
        <div
          key={index}
          className="flex flex-col gap-[16px] w-[400px] p-[32px] border border-solid border-gray rounded-xl shadow-cardHover overflow-hidden"
        >
          <div className="flex flex-col gap-[8px]">
            <span className="uppercase text-gray-600 text-xs">
              {video.title}
            </span>
            <span className="text-base text-dark-blue font-medium">
              {video.subtitle}
            </span>
          </div>
          <ReactPlayer
            width={335}
            className="rounded-lg overflow-hidden"
            controls={true}
            url={video.link}
          ></ReactPlayer>
        </div>
      ))}
    </div>
  );
}
