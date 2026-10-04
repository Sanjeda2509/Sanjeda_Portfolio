import programmingIcon from "../images/programming_icon.webp";
import webDevelopmentIcon from "../images/webdevelopment_icon.webp";
import databaseIcon from "../images/database-development_icon.png";
import softwareRequirementIcon from "../images/Software-requirement-icon.webp";
import aiIcon from "../images/AI-technology-icon.jpg";

function Services() {
  return (
    <main>
      <h1 className="page-title">My Services</h1>

      <p className="page-intro">
        A selection of technical services and skills I can offer.
      </p>

      <div className="grid">
        <article className="card">
          <img src={programmingIcon} alt="Programming service icon" />

          <h3>Programming</h3>

          <p>
            I can develop basic software applications using programming
            languages such as C#, Python, Java, and JavaScript. I enjoy solving
            programming problems and applying object-oriented programming
            concepts.
          </p>
        </article>

        <article className="card">
          <img
            src={webDevelopmentIcon}
            alt="Web development service icon"
          />

          <h3>Web Development</h3>

          <p>
            I can create responsive and user-friendly web pages using HTML, CSS,
            JavaScript, and React. I also have experience working with PHP and
            XAMPP for basic web development projects.
          </p>
        </article>

        <article className="card">
          <img
            src={databaseIcon}
            alt="Database development service icon"
          />

          <h3>Database Development</h3>

          <p>
            I can design relational databases, create tables and relationships,
            write SQL queries, and work with Oracle SQL Developer. I also have
            experience creating ERDs and defining primary and foreign keys.
          </p>
        </article>

        <article className="card">
          <img
            src={softwareRequirementIcon}
            alt="Software requirements and design service icon"
          />

          <h3>Software Requirements and Design</h3>

          <p>
            I can create software requirement models and UML diagrams,
            including use case diagrams, sequence diagrams, state diagrams, and
            process flowcharts.
          </p>
        </article>

        <article className="card">
          <img
            src={aiIcon}
            alt="Artificial intelligence service icon"
          />

          <h3>Basic AI and Technical Solutions</h3>

          <p>
            As an Artificial Intelligence student, I am developing knowledge of
            AI concepts and Python programming and continuing to build my skills
            in software and AI-based solutions.
          </p>
        </article>
      </div>
    </main>
  );
}

export default Services;