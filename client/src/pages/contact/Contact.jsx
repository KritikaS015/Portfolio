import React, { useState } from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message, clear form)
        console.log("Message sent successfully");

        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully", {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
        });
      } else {
        // Handle error
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="bg-black text-white py-10 md:-mt-24" id="contact">
        <div className="relative mx-auto px-8 md:px-16 lg:px-24 md:-mt-10">
          <h2 className="text-2xl md:text-4xl -mt-6 md:mt-0 font-bold text-center mb-10 text-transparent bg-clip-text text-white">
            Contact me
          </h2>
          {/* Background Text */}
          <div className="absolute inset-x-0 top-[-28px] md:top-[-1px] flex justify-center">
            <h1 className="mt-7 md:mt-0 text-[12vw] md:text-[8vw] sm:text-[6vw] text-white/10 font-extrabold text-center">
              Contact
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-12 mt-16 md:pt-16 md:mt-14">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text mb-4 bg-gradient-to-r from-green-400 to-blue-500">
                Let's Connect
              </h3>
              <p>
                I'm always eager to explore new projects and opportunities,{" "}
                <br />
                or simply engage in a meaningful conversation. Feel free to
                reach out!
              </p>
              <div className="mb-4 mt-4">
                <FaEnvelope className="inline-block text-green-300 mr-2" />
                <NavLink to="">kritika8939g@gmail.com</NavLink>
              </div>
              <div className="mb-4">
                <FaPhone className="inline-block text-green-300 mr-2" />
                <NavLink to="">+90 6302124828</NavLink>
              </div>
              <div className="mb-4">
                <FaLocationPin className="inline-block text-green-300 mr-2" />
                <NavLink to="https://www.google.com/maps/place/Deeksha+Ladies+PG/@12.9639331,77.7098779,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae139d2496e9e7:0xbace60a31aa26d5d!8m2!3d12.9639331!4d77.7124528!16s%2Fg%2F11gmzq18z6?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D">
                  Deeksha Ladies PG 60 Feet Main Road, AECS Layout, Kundalahalli
                  Brookefield, Bengaluru, Karnataka 560037
                </NavLink>
              </div>
            </div>

            <div className="flex-1 w-full border-solid border-2 border-green-200 p-3 rounded">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-[#374d5d] border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-[#374d5d] border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-[#374d5d] border border-gray-600 focus:outline-none focus:border-green-400"
                    rows={5}
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className=" w-28 bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
