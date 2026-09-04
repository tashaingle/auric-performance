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
    image: "/images/store-nutrition.jpg",
    alt: "High-protein meal in a black and gold bowl",
  },
  {
    featured: false,
    meta: "Standalone guide",
    title: "Guide To Recovery",
    price: "£50",
    copy: "How to recover properly so the work you put in actually sticks.",
    image: "/images/store-recovery.jpg",
    alt: "Foam roller, towel and recovery drink on a gym bench",
  },
  {
    featured: false,
    meta: "Standalone guide",
    title: "The Eating Out Guide",
    price: "£80",
    copy: "Stay on track without living in a Tupperware box.",
    image: "/images/store-eating.jpg",
    alt: "Steak and salad at a dark restaurant table",
  },
  {
    featured: true,
    meta: "Performance resource",
    title: "Human Performance Optimisation",
    price: "£250",
    copy: "The Auric approach to sleep, load, fuel and output — in one resource.",
    image: "/images/store-hpo.jpg",
    alt: "Stopwatch, notebook and training shoes",
  },
  {
    featured: false,
    meta: "Standalone plan",
    title: "Mobility And Flexibility Plan",
    price: "£180",
    copy: "Move better, lift better, stay available for the work that matters.",
    image: "/images/store-mobility.jpg",
    alt: "Yoga mat, resistance bands and water bottle",
  },
  {
    featured: false,
    meta: "Workout resource",
    title: "Lack Of Time Workouts",
    price: "£120",
    copy: "Short, structured sessions for weeks when the diary is full.",
    image: "/images/store-time.jpg",
    alt: "Kettlebell and timer on a gym floor",
  },
  {
    featured: true,
    meta: "Workout resource",
    title: "Minimal Kit Workouts",
    price: "£120",
    copy: "Train properly when equipment is limited, at home or on the road.",
    image: "/images/store-minimal.jpg",
    alt: "A single dumbbell on a wooden floor",
  },
];

export default function StorePage() {
  return (
    <main>
      <section className="page-hero store-hero">
        <img src="/images/store-hpo.jpg" alt="" />
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
              <div className="store-card-media">
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
