import libraryImage from "../images/library.webp";
import studyGroupImage from "../images/study_group.webp";
import javaProjectImage from "../images/java_project.webp";

function Projects() {
  return (
    <main>
      <h1 className="page-title">My Projects</h1>

      <p className="page-intro">
        Academic projects that show my technical and teamwork skills.
      </p>

      <div className="grid">
        <article className="card">
          <img
            src={libraryImage}
            alt="Library Management System project"
          />

          <h3>Library Management System</h3>

          <p className="tech">
            Oracle SQL Developer | SQL | Database Design | ERD
          </p>

          <p>
            <strong>Description:</strong> The Library Management System was a
            three-member group project developed as part of my Database course.
            The purpose of the project was to design a structured database
            system that could manage library members, books, borrowing records,
            returns, fines, wishlists, and other related information.
          </p>

          <p>
            <strong>My Role:</strong> My main responsibilities included
            designing the Entity Relationship Diagram (ERD), identifying primary
            and foreign keys, defining relationships between tables, and helping
            create the database structure.
          </p>

          <p>
            <strong>Outcome:</strong> The final database included 12
            interconnected tables and demonstrated how relational databases can
            be used to organize and manage real-world information efficiently.
          </p>
        </article>

        <article className="card">
          <img
            src={studyGroupImage}
            alt="Smart Study Group Finder project"
          />

          <h3>Smart Study Group Finder</h3>

          <p className="tech">
            UML | Lucidchart | Requirements Analysis | Use Case Diagram
          </p>

          <p>
            <strong>Description:</strong> The Smart Study Group Finder was a
            group project completed as part of my Software Requirements
            Engineering course. The purpose of the system was to help students
            find and connect with suitable study groups based on their academic
            needs and interests.
          </p>

          <p>
            <strong>My Role:</strong> I created the Use Case Diagram and
            contributed to other system-design activities, including the state
            diagram, sequence diagram, and process flowchart.
          </p>

          <p>
            <strong>Outcome:</strong> The project helped me develop practical
            experience in software requirements, system modelling, user
            interactions, and teamwork.
          </p>
        </article>

        <article className="card">
          <img
            src={javaProjectImage}
            alt="Java Employee Calculator project"
          />

          <h3>Java Employee Calculator</h3>

          <p className="tech">
            Java | Arrays | Loops | Static Methods | Method Overloading
          </p>

          <p>
            <strong>Description:</strong> The Java Employee Calculator is a
            console-based application developed to manage and process employee
            salary information. The program stores salaries in an array and
            calculates information such as average salary and employee bonuses.
          </p>

          <p>
            <strong>My Role:</strong> I developed the program using Java and
            implemented methods for calculating average salary and employee
            bonuses. I also used static variables, arrays, loops, and method
            overloading.
          </p>

          <p>
            <strong>Outcome:</strong> This project strengthened my understanding
            of Java programming, arrays, loops, static methods, method
            overloading, and object-oriented programming concepts.
          </p>
        </article>
      </div>
    </main>
  );
}

export default Projects;