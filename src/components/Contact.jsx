import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_o9cfyxm",      // 🔁 replace
        "template_mmzsbfm",     // 🔁 replace
        form.current,
        "ZworGvssOETGbxlB8"       // 🔁 replace
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 bg-white dark:bg-darkBg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-accent">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600 dark:text-darkText/70">
            Get in touch with us for inquiries and consultations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-darkText mb-2">
                Address
              </h3>
              <p className="text-gray-600 dark:text-darkText/70">
                TRINITY ROUNDABOUT, ADJCENT TRINITY PLAZA,
                OJO TERMINAL, IBADAN, OYO STATE.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-darkText mb-2">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-darkText/70">
                +234 701 463 0910 <br />
                +234 802 342 9388 <br />
                +234 814 628 7665
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-darkText mb-2">
                Email
              </h3>
              <p className="text-gray-600 dark:text-darkText/70">
                ajkgreensportshomesandgarden@gmail.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-cream dark:bg-darkCard p-8 rounded-2xl shadow-md space-y-6"
          >

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-darkText">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-darkBorder
                bg-white dark:bg-darkBg
                text-gray-800 dark:text-darkText
                focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-darkText">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-darkBorder
                bg-white dark:bg-darkBg
                text-gray-800 dark:text-darkText
                focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-darkText">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-darkBorder
                bg-white dark:bg-darkBg
                text-gray-800 dark:text-darkText
                focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white dark:bg-accent dark:text-darkBg
              py-3 rounded-lg font-semibold
              hover:scale-105 active:scale-95
              transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                ✅ Message sent successfully!
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;