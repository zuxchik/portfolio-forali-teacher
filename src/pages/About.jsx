
import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-heading">
        <span className="about-eyebrow">ABOUT ALI TEACHER</span>

        <h1>
          Education that <span>moves you forward.</span>
        </h1>

        <p>
          Learning is more than memorizing information.
          It is about building confidence, developing skills,
          and creating opportunities for the future.
        </p>
      </section>

      <section className="about-content">
        <div className="about-image-wrap">
          <img src="/ali.jpg" alt="Ali Teacher" />
        </div>

        <div className="about-text">
          <span className="about-section-label">THE TEACHER</span>

          <h2>Meet Ali Teacher</h2>

          <p>
            Welcome! I believe that every student can make
            progress with the right guidance, consistent
            practice, and a positive learning environment.
          </p>

          <p>
            My goal is to make learning clear, practical,
            and meaningful so students can work towards
            their personal and academic goals.
          </p>

          <div className="about-principles">
            <div className="about-principle">
              <span>01</span>
              <div>
                <h3>Clear explanations</h3>
                <p>Understand concepts step by step.</p>
              </div>
            </div>

            <div className="about-principle">
              <span>02</span>
              <div>
                <h3>Consistent progress</h3>
                <p>Improve through regular practice.</p>
              </div>
            </div>

            <div className="about-principle">
              <span>03</span>
              <div>
                <h3>Student focused</h3>
                <p>Learn with your goals in mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
