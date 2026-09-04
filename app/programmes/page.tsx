import type { Metadata } from "next";
import Link from "next/link";
import LoopVideo from "@/components/LoopVideo";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Auric Performance coaching programmes: Hybrid Athlete Base Builder, Advanced Hybrid Athlete, Female Hybrid Athlete, The Tactical Athlete and The Auric Performance Athlete.",
};

const programmes = [
  {
    id: "hybrid-athlete-base-builder",
    kicker: "Programme 01 · 12 week 1-2-1 coaching",
    title: "Hybrid Athlete Base Builder",
    video: "/videos/coaches.mp4",
    price: "£600 upfront or £50 per week",
    intro:
      "For clients with 12 months or less gym experience who want structured individual coaching and a strong performance foundation.",
    points: [
      "12 weeks of 1-2-1 coaching",
      "Weekly check-ins via WhatsApp",
      "For 12 months or less gym experience",
      "Free Nutrition Plan when paid upfront",
    ],
  },
  {
    id: "advanced-hybrid-athlete",
    kicker: "Programme 02 · 12 week 1-2-1 coaching",
    title: "Advanced Hybrid Athlete",
    video: "/videos/lift.mp4",
    price: "£600 upfront or £50 per week",
    intro:
      "For clients with 12 or more months of gym experience who are ready for a more advanced individual coaching approach.",
    points: [
      "12 weeks of 1-2-1 coaching",
      "Weekly check-ins via WhatsApp",
      "For 12+ months gym experience",
      "Free Nutrition Plan when paid upfront",
    ],
  },
  {
    id: "female-hybrid-athlete",
    kicker: "Programme 03 · 12 week 1-2-1 coaching",
    title: "Female Hybrid Athlete",
    video: "/videos/run.mp4",
    price: "£600 upfront or £50 per week",
    intro:
      "Individualised 1-2-1 coaching for women with or without previous gym experience.",
    points: [
      "Suitable with or without gym experience",
      "Each programme tailored to the individual",
      "Weekly check-ins via WhatsApp",
      "Free Nutrition Plan when paid upfront",
    ],
  },
  {
    id: "the-tactical-athlete",
    kicker: "Programme 04 · 12 week 1-2-1 coaching",
    title: "The Tactical Athlete",
    video: "/videos/bike.mp4",
    price: "£600 upfront or £50 per week",
    intro:
      "For serving tactical athletes across the military and blue-light services. This is not a pre-joining programme.",
    points: [
      "For serving military and blue-light personnel",
      "12 weeks of 1-2-1 coaching",
      "Weekly check-ins via WhatsApp",
      "Free Nutrition Plan when paid upfront",
    ],
  },
  {
    id: "the-auric-performance-athlete",
    kicker: "Programme 05 · Full service 1-2-1 coaching",
    title: "The Auric Performance Athlete",
    video: "/videos/box.mp4",
    price: "£400 per month or £100 per week",
    intro:
      "For clients who want the complete Auric Performance coaching service, with or without previous gym experience.",
    points: [
      "Weekly check-ins via WhatsApp",
      "Free personalised T-shirt",
      "Nutrition Plan included with weekly option",
      "One sponsored competition entry per year after 6 months, capped at £800",
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
            Five coaching programmes. Choose the route that matches your
            experience, then get on with the work.
          </p>
        </div>
      </section>

      <section className="wrap program-list" id="plans">
        <aside className="notice-bar">
          <div>
            <div className="kicker">Coaching update</div>
            <h3>Current programme spaces are full</h3>
            <p>
              New coaching spaces will open soon. Compare the programmes below,
              then book a call or register your interest.
            </p>
          </div>
          <Link href="/contact" className="btn btn-gold">
            Register interest
          </Link>
        </aside>

        {programmes.map((programme) => (
          <article className="program-row" id={programme.id} key={programme.id}>
            <div className="program-visual">
              <LoopVideo src={programme.video} />
            </div>
            <div className="program-copy">
              <div className="kicker">{programme.kicker}</div>
              <h2>{programme.title}</h2>
              <p className="price-note">{programme.price}</p>
              <p>{programme.intro}</p>
              <ul>
                {programme.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="price-note">Currently full · more spaces soon</p>
              <Link href="/contact" className="btn btn-gold">
                Register interest
              </Link>
            </div>
          </article>
        ))}

        <aside className="notice-bar">
          <div>
            <div className="kicker">12 week coaching guarantee</div>
            <h3>Show up. Check in. Back yourself.</h3>
            <p>
              All 12-week coaching programmes paid upfront include a money-back
              guarantee. Complete the 12 weeks, show up to your workouts, check
              in every week. If you are not happy after 12 weeks, your upfront
              coaching fee will be refunded.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Enquire
          </Link>
        </aside>
      </section>
    </main>
  );
}
