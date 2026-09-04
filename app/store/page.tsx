import type { Metadata } from "next";
import Link from "next/link";
import LoopVideo from "@/components/LoopVideo";

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
    media: { type: "image" as const, src: "/images/gym-coaches.jpg" },
  },
  {
    featured: false,
    meta: "Standalone guide",
    title: "Guide To Recovery",
    price: "£50",
    copy: "How to recover properly so the work you put in actually sticks.",
    media: { type: "video" as const, src: "/videos/alex.mp4" },
  },
  {
    featured: false,
    meta: "Standalone guide",
    title: "The Eating Out Guide",
    price: "£80",
    copy: "Stay on track without living in a Tupperware box.",
    media: { type: "image" as const, src: "/images/hero-run.jpg" },
  },
  {
    featured: true,
    meta: "Performance resource",
    title: "Human Performance Optimisation",
    price: "£250",
    copy: "The Auric approach to sleep, load, fuel and output — in one resource.",
    media: { type: "video" as const, src: "/videos/coaches.mp4" },
  },
  {
    featured: false,
    meta: "Standalone plan",
    title: "Mobility And Flexibility Plan",
    price: "£180",
    copy: "Move better, lift better, stay available for the work that matters.",
    media: { type: "video" as const, src: "/videos/lift.mp4" },
  },
  {
    featured: false,
    meta: "Workout resource",
    title: "Lack Of Time Workouts",
    price: "£120",
    copy: "Short, structured sessions for weeks when the diary is full.",
    media: { type: "video" as const, src: "/videos/bike.mp4" },
  },
  {
    featured: false,
    meta: "Workout resource",
    title: "Minimal Kit Workouts",
    price: "£120",
    copy: "Train properly when equipment is limited, at home or on the road.",
    media: { type: "video" as const, src: "/videos/box.mp4" },
  },
];

export default function StorePage() {
  return (
    <main>
      <section className="page-hero store-hero">
        <LoopVideo src="/videos/plates.mp4" />
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
                {product.media.type === "video" ? (
                  <LoopVideo src={product.media.src} />
                ) : (
                  <img src={product.media.src} alt="" />
                )}
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
