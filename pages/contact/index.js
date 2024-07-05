import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import Circles from "/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setIsLoading(true);

    const { name, email, message } = formData;
    const sanitizedData = {
      name: DOMPurify.sanitize(name),
      email: DOMPurify.sanitize(email),
      message: DOMPurify.sanitize(message),
    };

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    emailjs
      .send(serviceID, templateID, sanitizedData, userID)
      .then((response) => {
        console.log("Email is sent successfully!", response.text);
        setFormData(initialState);
        setErrors({});
        setIsSent(true);
      })
      .catch((error) => {
        console.error("Email sending failed", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Le nom est requis";
    }

    if (!email.trim()) {
      errors.email = "L'email est requis";
    } else if (!isValidEmail(email)) {
      errors.email = "Format email invalide";
    }

    if (!message.trim()) {
      errors.message = "Un message est requis";
    }

    return errors;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="h-full bg-primary/30 overflow-auto">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s connect <span className="text-blue">.</span>
          </motion.h2>
          {!isSent ? (
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`input ${errors.name ? "error" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`input ${errors.email ? "error" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className={`textarea ${errors.message ? "error" : ""}`}
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
              ></textarea>
              <button
                type="submit"
                disabled={isLoading}
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-blue group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {isLoading ? "En cours..." : "Let's talk"}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </motion.form>
          ) : (
            <div className="success-message text-center">
              <p>Yeah ❤️</p>
              <p>Votre message a été envoyé avec succès!</p>
              <p>Vous pouvez continuer à explorer.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
