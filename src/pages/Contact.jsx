import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    console.log({
      firstName,
      lastName,
      phone,
      email,
      message,
    });

    alert(`Thank you, ${firstName}! Your message has been received.`);
    navigate("/");
  }

  return (
    <main>
      <h1 className="page-title">Contact Me</h1>

      <p className="page-intro">
        Thank you for visiting my portfolio. I am interested in opportunities
        to learn, collaborate, and gain professional experience in software
        development, web development, databases, and artificial intelligence.
        Please feel free to contact me using the form below or connect with me
        through LinkedIn.
      </p>

      <div className="contact-layout">
        <aside className="card contact-info">
          <h2>Contact Information</h2>

          <ul>
            <li>
              <strong>Name:</strong> Sanjeda Sharmin
            </li>

            <li>
              <strong>Location:</strong> Toronto, Ontario, Canada
            </li>

            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:sshar731@my.centennialcollege.ca">
                sshar731@my.centennialcollege.ca
              </a>
            </li>

            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </aside>

        <section className="card contact-form">
          <h2>Send Me a Message</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first-name">First Name *</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Last Name *</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Contact Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              />
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;