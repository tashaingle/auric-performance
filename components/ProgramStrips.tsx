import Link from "next/link";
import LoopVideo from "@/components/LoopVideo";

const programmes = [
  {
    href: "/programmes#one-to-one",
    index: "01",
    title: "1:1 Coaching",
    copy: "Individual programming built around your goal, role and baseline.",
    video: "/videos/coaches.mp4",
  },
  {
    href: "/programmes#outrun",
    index: "02",
    title: "Outrun",
    copy: "Build running fitness without giving up strength.",
    video: "/videos/run.mp4",
  },
  {
    href: "/programmes#outlift",
    index: "03",
    title: "Outlift",
    copy: "Progressive strength work with clear standards to chase.",
    video: "/videos/lift.mp4",
  },
  {
    href: "/programmes#outperform",
    index: "04",
    title: "Outperform",
    copy: "Hybrid performance: strength, conditioning and work capacity.",
    video: "/videos/bike.mp4",
  },
];

export default function ProgramStrips() {
  return (
    <section className="program-strips">
      <div className="wrap program-strips-intro">
        <div className="kicker">Programmes</div>
        <h2 className="display">Four ways to train. Nothing extra.</h2>
        <p>
          Give someone too much choice and they choose nothing. Auric is
          stripped back to the work that matters: one-to-one coaching, run,
          lift, and perform.
        </p>
      </div>

      {programmes.map((programme) => (
        <Link
          href={programme.href}
          className="program-strip"
          key={programme.title}
        >
          <LoopVideo src={programme.video} />
          <div className="wrap program-strip-copy">
            <div className="kicker">
              {programme.index} / 04
            </div>
            <h3>{programme.title}</h3>
            <p>{programme.copy}</p>
            <span className="program-strip-link">Explore {programme.title} →</span>
          </div>
        </Link>
      ))}
    </section>
  );
}
