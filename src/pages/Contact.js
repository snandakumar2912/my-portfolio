import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs
      .send(
        "service_001",
        "template_001",
        {
          name: name,
          email: email,
          message: message,
        },
        "OhT6WutZWTbaUFTp0"
      )
      .then(
        function (response) {
          console.log("Email sent!", response);
          alert("Email sent successfully!");
        },
        function (error) {
          console.error("Email sending failed:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div>
      <center>
        <section id="contact">
          <h2><strong>Contact Me</strong></h2>

          <form id="contactForm">
            <input type="text" id="name" placeholder="Your Name" required />
            <br />
            <br />
            <input type="email" id="email" placeholder="Your Email" required />
            <br />
            <br />
            <textarea
              id="message"
              placeholder="Your Message"
              required
            ></textarea>
            <br />
            <br />
            <button
              className="mt-4 px-4 py-2 text-white rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              type="button"
              onClick={sendEmail}
              style={{ backgroundColor: "black" }}
            >
              Send Message
            </button>
          </form>
        </section>
      </center>
    </div>
  );
};

export default Contact;
