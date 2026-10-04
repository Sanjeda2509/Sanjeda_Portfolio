import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to My Personal Portfolio!</h1>

        <p>
          My name is Sanjeda Sharmin, and I am a student in the Artificial
          Intelligence – Software Engineering Technology program at Centennial
          College. I am passionate about software development, web development,
          databases, and artificial intelligence. I enjoy learning new
          technologies and using my problem-solving skills to build practical
          and user-friendly applications.
        </p>

        <div className="hero-buttons">
          <Link className="btn" to="/about">
            About Me
          </Link>

          <Link className="btn btn-secondary" to="/projects">
            View My Projects
          </Link>

          <Link className="btn btn-secondary" to="/contact">
            Contact Me
          </Link>
        </div>
      </section>

      <section className="mission card">
        <h2>My Mission Statement</h2>

        <p>
          My goal is to continue developing my technical and professional skills
          and to build reliable software solutions that solve real-world
          problems. I am currently preparing for a co-op opportunity where I can
          apply my knowledge, gain industry experience, and continue growing as
          a software developer.
        </p>
      </section>
    </main>
  );
}

export default Home;