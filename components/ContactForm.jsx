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
        <div class="mb-8 mt-1 md:mt-0">
          <h1 class="text-2xl md:text-3xl font-bold text-super_black text-center">
            Get In Touch With Me
          </h1>
        </div>

        <div class="mb-6 flex gap-4">
          <div class="w-1/2">
            <label
              class="block text-gray-700  text-sm font-bold mb-3"
              for="firstName">
              First Name
            </label>
            <input
              type="text"
              value={formData.firstName}
              id="firstName"
              onChange={handleChange}
              name="firstName"
              class="px-3 py-2 border rounded w-full"
              required
            />
          </div>
          <div class="w-1/2">
            <label
              class="block text-gray-700  text-sm font-bold mb-3"
              for="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
              class="px-3 py-2 border rounded w-full"
              required
            />
          </div>
        </div>

        <div class="mb-6 w-full">
          <label
            class="block text-gray-700  text-sm font-bold mb-3"
            for="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            class="px-3 py-2 border rounded w-full"
            required
          />
        </div>
        <div class="mb-6 w-full">
          <label
            class="block text-gray-700  text-sm font-bold mb-3"
            for="email">
            Phone Number
          </label>
          <input
            type="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            class="px-3 py-2 border rounded w-full"
            required
          />
        </div>
        <div class="mb-6 w-full flex-grow">
          <label
            class="block text-gray-700  text-sm font-bold mb-3"
            for="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            class="px-3 py-2 border rounded w-full h-full"
            required></textarea>
        </div>
        <div class="w-full flex justify-end mt-8">
          <button
            onClick={handleSubmit}
            class="px-4 py-2 border border-transparent hover:text-indigo-500 hover:border-indigo-400 rounded-md transition-colors duration-500 ease-in-out">
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
