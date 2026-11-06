
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    telegram: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    setSending(true);
    setStatus("");
  
    try {
      const response = await fetch(
        "http://localhost:3000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Message failed");
      }
  
      setStatus("Message sent successfully!");
  
      setForm({
        name: "",
        telegram: "",
        message: "",
      });
  
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-heading">
        <span className="contact-eyebrow">GET IN TOUCH</span>
        <h1>
          Let's start a <span>conversation.</span>
        </h1>
        <p>
          Have a question about a course? Send a message
          and let's discuss your learning goals.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <h2>Contact information</h2>
          <p className="contact-info-description">
            Choose the way that works best for you.
          </p>

          <div className="contact-info-item">
            <span className="contact-icon"><Mail size={20} /></span>
            <div>
              <h3>Email</h3>
              <p>Contact us by email</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-icon"><Phone size={20} /></span>
            <div>
              <h3>Phone</h3>
              <p>Ask about available courses</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-icon"><MapPin size={20} /></span>
            <div>
              <h3>Location</h3>
              <p>Online learning</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-telegram">Telegram account</label>
          <input
            id="contact-telegram"
            name="telegram"
            type="text"
            placeholder="@username"
            value={form.telegram}
            onChange={handleChange}
            pattern="@?[a-zA-Z0-9_]{5,32}"
            title="Enter your Telegram username, e.g. @ali_teacher"
            required
          />

          <label htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="How can we help you?"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send message"}
            <Send size={16} />
          </button>

          {status && <p role="status">{status}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;