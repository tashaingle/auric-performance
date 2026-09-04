"use client";

import { useEffect, useState } from "react";

const slides = [
  "/videos/run.mp4",
  "/videos/alex-bar.mp4",
  "/videos/lift.mp4",
  "/videos/alex-row.mp4",
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-media">
      {slides.map((src, i) => (
        <video
          key={src}
          className={i === index ? "is-active" : ""}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
        />
      ))}
      <div className="hero-dots" aria-hidden="true">
        {slides.map((src, i) => (
          <button
            key={src}
            className={i === index ? "is-active" : ""}
            onClick={() => setIndex(i)}
            type="button"
            aria-label={`Show clip ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
