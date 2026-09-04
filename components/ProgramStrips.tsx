"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const programmes = [
  {
    href: "/programmes#one-to-one",
    title: "1:1 Coaching",
    copy: "Individual programming built around your goal, role and baseline.",
    video: "/videos/coaches.mp4",
  },
  {
    href: "/programmes#outrun",
    title: "Outrun",
    copy: "Build running fitness without giving up strength.",
    video: "/videos/run.mp4",
  },
  {
    href: "/programmes#outlift",
    title: "Outlift",
    copy: "Progressive strength work with clear standards to chase.",
    video: "/videos/lift.mp4",
  },
  {
    href: "/programmes#outperform",
    title: "Outperform",
    copy: "Hybrid performance: strength, conditioning and work capacity.",
    video: "/videos/bike.mp4",
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
        <h2 className="display">Four ways to train. Nothing extra.</h2>
        <p>
          Give someone too much choice and they choose nothing. Auric is
          stripped back to the work that matters: one-to-one coaching, run,
          lift, and perform.
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
              Programmes {step} / 04
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
