
import "./Home.css";

function Home() {
  return (
    <main className="home-page" id="home">
      <section className="home-hero">
        <div className="home-content">
          <span className="home-eyebrow">
            <span className="home-dot" />
            WELCOME TO ALI TEACHER
          </span>

          <h1>
            Learn with purpose.
            <br />
            <span>Grow with confidence.</span>
          </h1>

          <p className="home-description">
            Build your knowledge, develop new skills, and take
            the next step towards your goals with Ali Teacher.
          </p>

          <div className="home-actions">
            <a href="/courses" className="home-primary-button">
              Explore courses <span>↗</span>
            </a>

            <a href="/about" className="home-secondary-button">
              About the teacher <span>→</span>
            </a>
          </div>

          <div className="home-note">
            <span>✦</span>
            Every step forward matters.
          </div>
        </div>

        <div className="home-image-wrap">
          <div className="home-image-backdrop" />

          <img
            src="./ali.jpg"
            alt="Ali Teacher"
            className="home-image"
          />

          <div className="home-image-caption">
            <span className="home-caption-line" />
            <div>
              <span className="home-caption-label">
                YOUR TEACHER IS
              </span>
              <h2>Khurshid</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div>
          <span className="home-section-label">OUR APPROACH</span>
          <h2>Simple learning. Meaningful progress.</h2>
        </div>

        <p>
          A place to learn, improve your skills, and move
          towards your future one lesson at a time.
        </p>
      </section>

      <section className="home-values">
        <article className="home-value-card">
          <span className="home-value-number">01</span>
          <h3>Learn</h3>
          <p>Build your knowledge with clear learning goals.</p>
        </article>

        <article className="home-value-card">
          <span className="home-value-number">02</span>
          <h3>Practice</h3>
          <p>Turn what you learn into useful skills.</p>
        </article>

        <article className="home-value-card">
          <span className="home-value-number">03</span>
          <h3>Grow</h3>
          <p>Keep improving and celebrate your progress.</p>
        </article>
      </section>
    </main>
  );
}

export default Home;
