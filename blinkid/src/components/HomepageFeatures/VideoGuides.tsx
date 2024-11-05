import React from "react";
import ReactPlayer from "react-player";

export default function VideoGuides({ guides }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
      {guides.map((video, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col max-w-[400px] gap-[16px] mx-auto lg:mx-0 p-[32px] border border-solid border-gray rounded-xl shadow-cardHover overflow-hidden"
        >
          <div className="flex flex-col gap-[8px]">
            <span className="uppercase text-gray-600 text-xs">
              {video.subtitle}
            </span>
            <span className="text-base text-dark-blue font-medium">
              {video.title}
            </span>
          </div>
          <ReactPlayer
            width={335}
            className="rounded-lg overflow-hidden"
            light={true}
            playing={true}
            controls={false}
            url={video.link}
          ></ReactPlayer>
        </div>
      ))}
    </div>
  );
}
