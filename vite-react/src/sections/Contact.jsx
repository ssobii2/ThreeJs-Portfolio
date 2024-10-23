import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setloading] = useState(false);
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setform({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
       await emailjs.send("service_8cs01j8", "template_0ar7w2r", {
            from_name: form.name,
            to_name: "Muhammad Subhan",
            from_email: form.email,
            to_email: "subhanimran4@gmail.com",
            message: form.message,
        }, 'JWCf33ZT9O3-uJ7q3');
        setloading(false);

        alert("Message sent successfully");

        setform({
            name: "",
            email: "",
            message: "",
        });
    } catch (error) {
        setloading(false);
        console.log(error);
        alert("Failed to send message");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Wether you are looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna give you a job ..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
