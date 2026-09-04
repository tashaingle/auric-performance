import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Auric Performance programmes and coaching plans: 1:1 Coaching, Outrun, Outlift, Outperform, plus 12-week hybrid athlete plans.",
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

      <section className="wrap offer-section" id="plans">
        <div className="section-head">
          <div className="kicker">Coaching plans</div>
          <h2>12-week and full-service plans</h2>
          <p>
            Individual coaching plans with weekly WhatsApp check-ins. Current
            spaces are full while the offering is being updated. Register your
            interest and we will get you in when capacity opens.
          </p>
        </div>

        <aside className="notice-bar">
          <div>
            <div className="kicker">Coaching update</div>
            <h3>Current programme spaces are full</h3>
            <p>
              New coaching spaces will open soon. Compare the plans below, then
              book a call or register your interest.
            </p>
          </div>
          <Link href="/contact" className="btn btn-gold">
            Register interest
          </Link>
        </aside>

        <div className="offer-grid">
          {plans.map((plan) => (
            <article
              className={plan.featured ? "offer-card is-featured" : "offer-card"}
              key={plan.title}
            >
              {plan.full ? (
                <span className="offer-stamp">
                  Currently
                  <br />
                  full
                </span>
              ) : null}
              <div className="kicker">{plan.meta}</div>
              <h3>{plan.title}</h3>
              <span className="offer-price">{plan.price}</span>
              <p>{plan.copy}</p>
              <ul>
                {plan.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn">
                {plan.full ? "Register interest" : "Enquire"}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const plans = [
  {
    featured: true,
    full: true,
    meta: "12 week 1-2-1 coaching",
    title: "Hybrid Athlete Base Builder",
    price: "£600 upfront or £50 per week",
    copy: "For clients with 12 months or less gym experience who want structured individual coaching and a strong performance foundation.",
    points: [
      "12 weeks of 1-2-1 coaching",
      "Weekly check-ins via WhatsApp",
      "For 12 months or less gym experience",
      "Free Nutrition Plan when paid upfront",
    ],
  },
  {
    featured: false,
    full: true,
    meta: "12 week 1-2-1 coaching",
    title: "Advanced Hybrid Athlete",
    price: "£600 upfront or £50 per week",
    copy: "For clients with 12 or more months of gym experience who are ready for a more advanced individual coaching approach.",
    points: [
      "12 weeks of 1-2-1 coaching",
      "Weekly check-ins via WhatsApp",
      "For 12+ months gym experience",
      "Free Nutrition Plan when paid upfront",
    ],
  },
  {
    featured: false,
    full: true,
    meta: "12 week 1-2-1 coaching",
    title: "Female Hybrid Athlete",
    price: "£600 upfront or £50 per week",
    copy: "Individualised 1-2-1 coaching for women with or without previous gym experience.",
    points: [
      "Suitable with or without gym experience",
      "Each programme tailored to the individual",
      "Weekly check-ins via WhatsApp",
      "Free Nutrition Plan when paid upfront",
    ],
  },
  {
    featured: true,
    full: true,
    meta: "12 week 1-2-1 coaching",
    title: "The Tactical Athlete",
    price: "£600 upfront or £50 per week",
    copy: "For serving tactical athletes across the military and blue-light services. This is not a pre-joining programme.",
    points: [
      "For serving military and blue-light personnel",
      "12 weeks of 1-2-1 coaching",
      "Weekly check-ins via WhatsApp",
      "Free Nutrition Plan when paid upfront",
    ],
  },
  {
    featured: false,
    full: true,
    meta: "Full service 1-2-1 coaching",
    title: "The Auric Performance Athlete",
    price: "£400 per month or £100 per week",
    copy: "For clients who want the complete Auric Performance coaching service, with or without previous gym experience.",
    points: [
      "Weekly check-ins via WhatsApp",
      "Free personalised T-shirt",
      "Nutrition Plan included with weekly option",
      "One sponsored competition entry per year after 6 months, capped at £800",
    ],
  },
  {
    featured: false,
    full: false,
    meta: "12 week coaching guarantee",
    title: "Show up. Check in. Back yourself.",
    price: "Money back guarantee",
    copy: "All 12-week coaching programmes paid upfront include a money-back guarantee.",
    points: [
      "Complete the 12-week programme",
      "Show up to your workouts",
      "Check in every week",
      "If you are not happy after 12 weeks, your upfront coaching fee will be refunded",
    ],
  },
];
