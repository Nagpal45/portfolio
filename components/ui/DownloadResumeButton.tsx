"use client";

import Image from "next/image";

export default function DownloadResumeButton() {
  return (
    <a
      className="downloadResume"
      href="https://drive.google.com/file/d/1YPxXMm0OHIJ-C-kvs0CpGbt24o2VBQKU/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Resume"
      style={{ display: 'flex', textDecoration: 'none' }}
    >
      <Image src="/download.png" className="downloadIcon" alt="" width={20} height={20} aria-hidden="true" />
      <div className="resume">Resume</div>
    </a>
  );
}
