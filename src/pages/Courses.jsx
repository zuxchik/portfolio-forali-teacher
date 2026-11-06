
import "./Courses.css";

const courses = [
  {
    number: "01",
    title: "English Language",
    description:
      "Improve your English grammar, vocabulary, and communication skills.",
    level: "Beginner to Advanced",
  },
  {
    number: "02",
    title: "IELTS Preparation",
    description:
      "Build your skills in listening, reading, writing, and speaking.",
    level: "Exam Preparation",
  },
  {
    number: "03",
    title: "Personal Development",
    description:
      "Develop better learning habits and work towards your goals.",
    level: "All Levels",
  },
];

function Courses() {
  return (
    <main className="courses-page">
      <section className="courses-heading">
        <span className="courses-eyebrow">OUR COURSES</span>
        <h1>
          Learn something <span>new.</span>
        </h1>
        <p>
          Explore our learning programs and find the right
          path for your goals.
        </p>
      </section>

      <section className="courses-grid">
        {courses.map((course) => (
          <article className="course-card" key={course.number}>
            <span className="course-number">{course.number}</span>

            <h2>{course.title}</h2>

            <p>{course.description}</p>

            <span className="course-level">{course.level}</span>

            <a href="/contact" className="course-link">
              Learn more <span>↗</span>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Courses;
