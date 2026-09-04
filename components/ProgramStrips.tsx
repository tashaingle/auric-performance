"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const programmes = [
  {
    href: "/programmes#hybrid-athlete-base-builder",
    title: "Hybrid Athlete Base Builder",
    copy: "Structured 1-2-1 coaching for 12 months or less gym experience.",
    video: "/videos/coaches.mp4",
  },
  {
    href: "/programmes#advanced-hybrid-athlete",
    title: "Advanced Hybrid Athlete",
    copy: "1-2-1 coaching for 12+ months gym experience.",
    video: "/videos/alex-bar.mp4",
  },
  {
    href: "/programmes#female-hybrid-athlete",
    title: "Female Hybrid Athlete",
    copy: "Individualised 1-2-1 coaching for women, at any training age.",
    video: "/videos/run.mp4",
  },
  {
    href: "/programmes#the-tactical-athlete",
    title: "The Tactical Athlete",
    copy: "For serving military and blue-light athletes. Not a pre-joining programme.",
    video: "/videos/alex-row.mp4",
  },
  {
    href: "/programmes#the-auric-performance-athlete",
    title: "The Auric Performance Athlete",
    copy: "The complete Auric 1-2-1 service, with or without gym experience.",
    video: "/videos/box.mp4",
  },
];

export default function ProgramStrips() {
  const storyRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;

    const updateStory = () => {
      const rect = story.getBoundingClientRect();
      const available = story.offsetHeight - window.innerHeight;
      let progress = -rect.top / available;
      progress = Math.max(0, Math.min(0.999, progress));
      const next = Math.min(
        programmes.length - 1,
        Math.floor(progress * programmes.length)
      );
      setIndex(next);
    };

    window.addEventListener("scroll", updateStory, { passive: true });
    updateStory();
    return () => window.removeEventListener("scroll", updateStory);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index]);

  const current = programmes[index];
  const step = String(index + 1).padStart(2, "0");

  return (
    <>
      <div className="wrap program-strips-intro">
        <div className="kicker">Programmes</div>
        <h2 className="display">Five programmes. Nothing extra.</h2>
        <p>
          Choose the 1-2-1 route that matches your experience. Then get on
          with the work.
        </p>
      </div>

      <section className="program-story" ref={storyRef}>
        <div className="program-story-sticky">
          <div className="program-story-bg">
            {programmes.map((programme, i) => (
              <video
                key={programme.video}
                ref={(node) => {
                  videoRefs.current[i] = node;
                }}
                className={i === index ? "is-active" : ""}
                src={programme.video}
                muted
                loop
                playsInline
                preload="metadata"
              />
            ))}
          </div>

          <div className="wrap program-story-inner">
            <div className="kicker">
              Programmes {step} / 05
            </div>

            <div className="program-story-text">
              {programmes.map((programme, i) => (
                <h2
                  key={programme.title}
                  className={i === index ? "is-active" : ""}
                >
                  {programme.title}
                </h2>
              ))}

              <div className="program-story-number" aria-hidden="true">
                {step}
              </div>

              {programmes.map((programme, i) => (
                <p
                  key={programme.copy}
                  className={i === index ? "is-active" : ""}
                >
                  {programme.copy}
                </p>
              ))}
            </div>

            <Link href={current.href} className="program-strip-link">
              Explore {current.title} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
