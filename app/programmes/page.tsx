import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Auric Performance programmes: 1:1 Coaching, Outrun, Outlift and Outperform.",
};

const programmes = [
  {
    id: "one-to-one",
    kicker: "Programme 01",
    title: "1:1 Coaching",
    image: "/images/gym-coaches.jpg",
    alt: "Alex and Courtney coaching in the gym",
    intro:
      "Individual coaching built around your goal, role and starting point. Assessment-led, reviewed, and written for the standard you need to reach.",
    points: [
      "Individualised strength, conditioning and performance development",
      "Built around your schedule, training history and current capacity",
      "Regular review so the plan moves as you do",
    ],
  },
  {
    id: "outrun",
    kicker: "Programme 02",
    title: "Outrun",
    image: "/images/outrun.jpg",
    alt: "Auric Performance running and conditioning work",
    intro:
      "Running fitness without losing strength. Outrun builds aerobic capacity, speed and repeatability while protecting the qualities that keep you robust.",
    points: [
      "Progressive running and conditioning structure",
      "Intensity and volume managed so strength does not drop off",
      "Built for people who need to run well and still perform",
    ],
  },
  {
    id: "outlift",
    kicker: "Programme 03",
    title: "Outlift",
    image: "/images/outlift.jpg",
    alt: "Strength training with Auric Performance",
    intro:
      "Progressive strength work with a clear destination. Outlift is for people who want to lift heavier, move better and stay consistent.",
    points: [
      "Strength foundations through to performance outcomes",
      "Simple weekly structure you can actually follow",
      "Standards, progression and no wasted sessions",
    ],
  },
  {
    id: "outperform",
    kicker: "Programme 04",
    title: "Outperform",
    image: "/images/outperform.jpg",
    alt: "Hybrid performance training outdoors",
    intro:
      "Hybrid performance for people who need to be strong, fit and durable at the same time. Strength, conditioning and work capacity in one system.",
    points: [
      "Train how your coaches train: strength, running and work capacity",
      "Community challenges and clear weekly direction",
      "Built for demanding roles, events and long-term capability",
    ],
  },
];

export default function ProgrammesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="kicker">Programmes</div>
          <h1 className="display">
            Train with intent. <span>Nothing extra.</span>
          </h1>
          <p className="lead">
            Four programmes. That is the whole menu. Choose the work that
            matches the outcome you want, then get on with it.
          </p>
        </div>
      </section>

      <section className="wrap program-list">
        {programmes.map((programme) => (
          <article className="program-row" id={programme.id} key={programme.id}>
            <div className="program-visual">
              <Image
                src={programme.image}
                alt={programme.alt}
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="program-copy">
              <div className="kicker">{programme.kicker}</div>
              <h2>{programme.title}</h2>
              <p className="price-note">Pricing and full wording to follow</p>
              <p>{programme.intro}</p>
              <ul>
                {programme.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-gold">
                Enquire
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
