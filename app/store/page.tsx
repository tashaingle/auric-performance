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
    copy: "A standalone Auric Performance nutrition plan.",
  },
  {
    featured: false,
    meta: "Standalone guide",
    title: "Guide To Recovery",
    price: "£50",
    copy: "A standalone Auric Performance guide to recovery.",
  },
  {
    featured: false,
    meta: "Standalone guide",
    title: "The Eating Out Guide",
    price: "£80",
    copy: "A standalone Auric Performance eating out guide.",
  },
  {
    featured: true,
    meta: "Performance resource",
    title: "Human Performance Optimisation",
    price: "£250",
    copy: "A standalone Auric Performance human performance optimisation resource.",
  },
  {
    featured: false,
    meta: "Standalone plan",
    title: "Mobility And Flexibility Plan",
    price: "£180",
    copy: "A standalone Auric Performance mobility and flexibility plan.",
  },
  {
    featured: false,
    meta: "Workout resource",
    title: "Lack Of Time Workouts",
    price: "£120",
    copy: "A standalone Auric Performance workout resource for time-limited training.",
  },
  {
    featured: false,
    meta: "Workout resource",
    title: "Minimal Kit Workouts",
    price: "£120",
    copy: "A standalone workout resource built for training when equipment is limited.",
  },
];

export default function StorePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <div className="kicker">Store</div>
          <h1 className="display">
            Plans and resources. <span>No coaching required.</span>
          </h1>
          <p className="lead">
            Standalone nutrition, recovery, mobility and training resources
            from Auric Performance. Enquire to purchase.
          </p>
        </div>
      </section>

      <section className="wrap offer-section">
        <div className="offer-grid">
          {products.map((product) => (
            <article
              className={product.featured ? "offer-card is-featured" : "offer-card"}
              key={product.title}
            >
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
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
