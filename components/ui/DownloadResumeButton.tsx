"use client";

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
      <img src="download.png" className="downloadIcon" alt="" />
      <div className="resume">Resume</div>
    </button>
  );
}
