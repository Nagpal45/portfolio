"use client";

import Image from "next/image";

export default function DownloadResumeButton() {
  return (
    <button
      className="downloadResume"
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/1YPxXMm0OHIJ-C-kvs0CpGbt24o2VBQKU/view?usp=sharing",
        )
      }
    >
      <Image src="download.png" className="downloadIcon" alt="download" width={20} height={20} />
      <div className="resume">Resume</div>
    </button>
  );
}
