import React from "react";
import ReactPlayer from 'react-player'


export default function VideoPlayer({ type, padding, centred }) {

  return (
    <div
      className={`flex flex-col gap-[12px] ${
        padding !== "no" ? "py-[34px]" : "pt-[12px]"
      }`}
    >
      <ReactPlayer url='https://vimeo.com/1024160996' controls={true} />
    </div>
  );
}
