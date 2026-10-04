import profileImage from "../images/profile.png";
import resumePDF from "../files/Sanjeda_Sharmin_Resume.pdf";

function About() {
  return (
    <main>
      <h1 className="page-title">About Me</h1>
      <p className="page-intro">A little bit about who I am.</p>

      <section className="card about-layout">
        <div className="about-photo">
          <img src={profileImage} alt="Sanjeda Sharmin" />
        </div>

        <div className="about-text">
          <h2>Sanjeda Sharmin</h2>

          <p>
            My name is Sanjeda Sharmin, and I am currently studying Artificial
            Intelligence – Software Engineering Technology at Centennial College.
            My academic background includes a Bachelor of Science in Mathematics
            and a Master of Science in Environmental Science and Management.
          </p>

          <p>
            Through my current studies, I have developed experience with
            programming, web development, databases, software requirements, and
            object-oriented programming. I have worked with technologies such as
            C#, Python, Java, JavaScript, HTML, CSS, PHP, SQL, Oracle SQL
            Developer, and Unix/Linux.
          </p>

          <p>
            I enjoy learning new technologies, solving problems, and working
            collaboratively with others. My goal is to begin my career in
            software and AI development and continue building practical technical
            skills through real-world projects and professional experience.
          </p>

          <a className="btn" href={resumePDF} target="_blank">
            View My Resume
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;