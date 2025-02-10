import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
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
          setIsSubmitted(true); // Mark the form as submitted
          setFormData({ name: "", email: "", message: "" }); // Clear form data

          setTimeout(() => {
            setIsSubmitted(false); // Reset the form after 3 seconds
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
      className="w-full h-screen flex justify-center items-center p-4 "
    >
      <div className="flex flex-col max-w-[600px] w-full bg-white p-8  rounded-lg">
        <div className="pb-8 flex flex-col justify-center w-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-800">
            Contact
          </p>
          <p className="text-gray-800 py-4">Send me a message</p>
        </div>

        {isSubmitted ? (
          <div className="text-center">
            <p className="text-xl text-green-500">
              Your message has been sent!
            </p>
            <p className="text-gray-500 mt-2">
              We will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              className="bg-slate-400  p-2 rounded-lg shadow-xl"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className="my-4 p-2 bg-slate-400 rounded-lg shadow-xl"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              className="bg-slate-400  p-2 rounded-lg shadow-xl"
              name="message"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-slate-400  text-white border-1 shadow-xl hover:bg-gray-500 hover:border-slate-800 rounded-lg px-4 py-2 my-7 mx-auto flex items-center"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
