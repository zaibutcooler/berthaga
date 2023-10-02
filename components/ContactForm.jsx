"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

// Can save this into .env but up to you
const emailProps = {
  serviceID: "service_rify18f",
  templateID: "template_eo0grpe",
  userID: "WY1drciSR0B_bC_rw",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData === initialFormData) {
      return toast.error("Please Type in First!");
    }

    console.log(formData);
    emailjs
      .send(
        emailProps.serviceID,
        emailProps.templateID,
        formData,
        emailProps.userID
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setFormData(initialFormData);
          toast.success("Message Successfully Sent");
        },
        function (err) {
          console.log("FAILED...", err);
          toast.error("Failed");
        }
      );
  };

  return (
    <div className="h-full w-full border rounded-md p-6 md:p-8">
      <section>
        <div className="mb-8 mt-1 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold text-super_black text-center">
            Get In Touch With Me
          </h1>
        </div>

        <div className="mb-6 flex gap-4">
          <div className="w-1/2">
            <label
              className="block text-gray-700  text-sm font-bold mb-3"
              htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              value={formData.firstName}
              id="firstName"
              onChange={handleChange}
              name="firstName"
              className="px-3 py-2 border rounded w-full"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              className="block text-gray-700  text-sm font-bold mb-3"
              htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
              className="px-3 py-2 border rounded w-full"
              required
            />
          </div>
        </div>

        <div className="mb-6 w-full">
          <label
            className="block text-gray-700  text-sm font-bold mb-3"
            htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            className="px-3 py-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-6 w-full">
          <label
            className="block text-gray-700  text-sm font-bold mb-3"
            htmlFor="email">
            Phone Number
          </label>
          <input
            type="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            className="px-3 py-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-6 w-full flex-grow">
          <label
            className="block text-gray-700  text-sm font-bold mb-3"
            htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="px-3 py-2 border rounded w-full h-full"
            required></textarea>
        </div>
        <div className="w-full flex justify-end mt-8">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 border border-transparent hover:text-indigo-500 hover:border-indigo-400 rounded-md transition-colors duration-500 ease-in-out">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
