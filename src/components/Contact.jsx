import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mxr11i5",
        "template_ksnq0yr",
        e.target,
        "pcFrE1VnblVpeeYsF"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen flex justify-center items-center pt-20 bg-gradient-to-b from-zinc-300 to-white text-gray-900"
    >
      <div className="flex flex-col max-w-[980px] w-full bg-white p-8 rounded-lg shadow-lg drop-shadow-lg">
        {/* Title */}
        <div className="pb-8 flex flex-col justify-center w-full items-center">
          <p className="text-4xl sm:text-5xl font-extrabold text-gray-900 inline border-b-4 border-orange-500">
            {t("contact")}
          </p>
          <p className="text-lg sm:text-xl text-gray-800 font-medium py-3 max-w-xl text-center">
            {t("subContact") ||
              "Feel free to reach out! I usually reply within 24 hours."}
          </p>
        </div>

        {/* Form */}
        {isSubmitted ? (
          <div className="text-center py-8">
            <p className="text-xl font-bold text-green-700">
              {t("messageSent") || "Your message has been sent!"}
            </p>
            <p className="text-gray-600 mt-2 font-medium">
              {t("messageResponse") || "We will get back to you shortly."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <input
              className="bg-gray-100 border border-gray-300 p-3 rounded-md shadow-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="bg-gray-100 border border-gray-300 p-3 rounded-md shadow-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="bg-gray-100 border border-gray-300 p-3 rounded-md shadow-sm font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              name="message"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md shadow-md transition"
            >
              {t("formButton") || "Send Message"}
            </button>
          </form>
        )}

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-10">
          <a
            href="https://www.linkedin.com/in/dimitris-vortelinas-757025269/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:text-cyan-800 transition text-3xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/jvorte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition text-3xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-rose-600 hover:text-rose-800 transition text-3xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
