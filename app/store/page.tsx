import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Auric Performance store: nutrition, recovery, mobility and training resources.",
};

const products = [
  {
    featured: true,
    meta: "Standalone plan",
    title: "Nutrition Plan",
    price: "£250",
    copy: "A personalised Auric nutrition plan, built around your training, schedule and goal.",
    image: "/images/gym-coaches.jpg",
    alt: "Alex and Courtney in the gym",
    pos: "center 28%",
  },
  {
    featured: false,
    meta: "Standalone guide",
    title: "Guide To Recovery",
    price: "£50",
    copy: "How to recover properly so the work you put in actually sticks.",
    image: "/images/alex.jpg",
    alt: "Alex Peterson",
    pos: "center 18%",
  },
  {
    featured: false,
    meta: "Standalone guide",
    title: "The Eating Out Guide",
    price: "£80",
    copy: "Stay on track without living in a Tupperware box.",
    image: "/images/together.jpg",
    alt: "Alex and Courtney between sessions",
    pos: "center 52%",
  },
  {
    featured: true,
    meta: "Performance resource",
    title: "Human Performance Optimisation",
    price: "£250",
    copy: "The Auric approach to sleep, load, fuel and output — in one resource.",
    image: "/images/outperform.jpg",
    alt: "Log carry performance training",
    pos: "center 55%",
  },
  {
    featured: false,
    meta: "Standalone plan",
    title: "Mobility And Flexibility Plan",
    price: "£180",
    copy: "Move better, lift better, stay available for the work that matters.",
    image: "/images/outlift.jpg",
    alt: "Strength and movement work outdoors",
    pos: "center 62%",
  },
  {
    featured: false,
    meta: "Workout resource",
    title: "Lack Of Time Workouts",
    price: "£120",
    copy: "Short, structured sessions for weeks when the diary is full.",
    image: "/images/outrun.jpg",
    alt: "Conditioning on the rower",
    pos: "center 40%",
  },
  {
    featured: true,
    meta: "Workout resource",
    title: "Minimal Kit Workouts",
    price: "£120",
    copy: "Train properly when equipment is limited, at home or on the road.",
    image: "/images/minimal-kit.jpg",
    alt: "Single dumbbell training outdoors",
    pos: "center 48%",
  },
];

export default function StorePage() {
  return (
    <main>
      <section className="page-hero store-hero">
        <img src="/images/together.jpg" alt="" />
        <div className="wrap">
          <div className="kicker">Store</div>
          <h1 className="display">
            <span className="hero-line">Plans and resources.</span>
            <span className="hero-line">No coaching required.</span>
          </h1>
          <p className="lead">
            Standalone nutrition, recovery, mobility and training resources
            from Auric Performance. Enquire to purchase.
          </p>
        </div>
      </section>

      <section className="wrap offer-section">
        <div className="store-grid">
          {products.map((product) => (
            <article
              className={product.featured ? "store-card is-featured" : "store-card"}
              key={product.title}
            >
              <div
                className="store-card-media"
                style={{ ["--pos" as string]: product.pos }}
              >
                <img src={product.image} alt={product.alt} />
              </div>
              <div className="store-card-body">
                <div className="kicker">{product.meta}</div>
                <h3>{product.title}</h3>
                <span className="offer-price">{product.price}</span>
                <p>{product.copy}</p>
                <Link
                  href={`/contact?subject=${encodeURIComponent(product.title)}`}
                  className="btn btn-gold"
                >
                  Enquire to purchase
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
