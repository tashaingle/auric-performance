import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-run.jpg"
          >
            <source src="/images/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="wrap hero-copy">
          <div className="kicker">Auric Performance</div>
          <h1 className="display">
            The gold standard in <span>physical performance</span>
          </h1>
          <p className="lead">
            Evidence-informed performance coaching engineered for the top 1%.
            Train with intent. Build strength, endurance and work capacity that
            transfers.
          </p>
          <div className="actions">
            <Link href="/contact" className="btn btn-gold">
              Book a call
            </Link>
            <Link href="/programmes" className="btn">
              View programmes
            </Link>
          </div>
          <p className="hero-note">
            Strength · Endurance · Work capacity · Measurable progress
          </p>
        </div>
      </section>

      <section className="section coaches">
        <div className="wrap">
          <div className="split-head">
            <div>
              <div className="kicker">The coaches</div>
              <h2 className="display" style={{ fontSize: "clamp(42px, 6vw, 76px)", marginTop: 8 }}>
                Alex and Courtney
              </h2>
            </div>
            <p>
              Two coaches. One standard. Auric Performance is built around
              assessment-led training, clear progression and the physical
              qualities that matter when the work gets hard. Specialising in
              tactical and hybrid performance, with 18+ years of British
              military experience in the coaching team.
            </p>
          </div>

          <div className="coach-grid">
            <figure className="coach-card">
              <Image
                src="/images/alex.jpg"
                alt="Alex Peterson, co-founder of Auric Performance"
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 18%" }}
              />
              <figcaption>
                <span className="role">Co-founder · Coach</span>
                <h3>Alex Peterson</h3>
                <p>
                  Strength, conditioning and standards-based coaching. Built
                  around your goal, your role and your starting point.
                </p>
              </figcaption>
            </figure>

            <figure className="coach-card">
              <Image
                src="/images/courtney.jpg"
                alt="Courtney, co-founder of Auric Performance"
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center 18%" }}
              />
              <figcaption>
                <span className="role">Co-founder · Coach</span>
                <h3>Courtney</h3>
                <p>
                  Hybrid performance, running and physical capability. Training
                  that is structured, repeatable and built to last.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Programmes</div>
            <h2>Four ways to train. Nothing extra.</h2>
            <p>
              Give someone too much choice and they choose nothing. Auric is
              stripped back to the work that matters: one-to-one coaching, run,
              lift, and perform.
            </p>
          </div>

          <div className="program-grid">
            <Link href="/programmes#one-to-one" className="program-tile">
              <Image src="/images/gym-coaches.jpg" alt="" fill sizes="50vw" />
              <div>
                <div className="kicker">01</div>
                <h3>1:1 Coaching</h3>
                <p>Individual programming built around your goal, role and baseline.</p>
              </div>
            </Link>
            <Link href="/programmes#outrun" className="program-tile">
              <Image src="/images/outrun.jpg" alt="" fill sizes="50vw" />
              <div>
                <div className="kicker">02</div>
                <h3>Outrun</h3>
                <p>Build running fitness without giving up strength.</p>
              </div>
            </Link>
            <Link href="/programmes#outlift" className="program-tile">
              <Image src="/images/outlift.jpg" alt="" fill sizes="50vw" />
              <div>
                <div className="kicker">03</div>
                <h3>Outlift</h3>
                <p>Progressive strength work with clear standards to chase.</p>
              </div>
            </Link>
            <Link href="/programmes#outperform" className="program-tile">
              <Image src="/images/outperform.jpg" alt="" fill sizes="50vw" />
              <div>
                <div className="kicker">04</div>
                <h3>Outperform</h3>
                <p>Hybrid performance: strength, conditioning and work capacity.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split-head">
            <div>
              <div className="kicker">Store and plans</div>
              <h2 className="display" style={{ fontSize: "clamp(42px, 6vw, 76px)", marginTop: 8 }}>
                Coaching plans and standalone resources
              </h2>
            </div>
            <p>
              12-week coaching plans live on the programmes page. Nutrition,
              recovery, mobility and workout resources live in the store. No
              extra pages, no extra noise.
            </p>
          </div>
          <div className="actions">
            <Link href="/programmes#plans" className="btn btn-gold">
              View plans
            </Link>
            <Link href="/store" className="btn">
              Visit the store
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <Image
          src="/images/hero-sandbag.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 22%" }}
        />
        <div className="wrap band-copy">
          <div className="kicker">Start here</div>
          <h2>
            Book a call with <span style={{ color: "var(--gold)" }}>Alex or Courtney</span>
          </h2>
          <p className="lead">
            Tell us what you are preparing for, recovering from, or trying to
            improve. We will point you to the right programme.
          </p>
          <div className="actions" style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn-gold">
              Book a call
            </Link>
            <a href="mailto:info@auricperformance.co.uk" className="btn">
              Email info@
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
