import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { MyEmail } from "../../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailValidation(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Provide immediate feedback and open mail client fallback
    setTimeout(() => {
      setSuccessMsg(
        `Thank you, ${formData.username}! Your message has been prepared. Opening your default mail client...`
      );
      
      const mailtoLink = `mailto:${MyEmail}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi Niraj,\n\n${formData.message}\n\nFrom: ${formData.username}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber || "N/A"}`
      )}`;
      
      window.location.href = mailtoLink;

      setFormData({
        username: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <Title
        title="Get In Touch"
        des="Let's Discuss Your Next Project"
        subtitle="Have an open engineering role, a technical consultation inquiry, or an ambitious project to build? Send a message below."
      />

      <div className="w-full flex flex-col lgl:flex-row gap-8 justify-between items-stretch">
        {/* Left Information Card */}
        <ContactLeft />

        {/* Right Form Card */}
        <div className="w-full lgl:w-3/5 portfolioCard flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 sm:gap-6" noValidate>
            <div>
              <h3 className="text-xl font-bold font-titleFont text-slate-900 dark:text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Fill out the details and I will reply promptly within 24 hours.
              </p>
            </div>

            {/* Success Alert */}
            {successMsg && (
              <div
                className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5"
                role="alert"
              >
                <FiCheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Name and Phone Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-username"
                  className="text-xs uppercase font-semibold text-slate-600 dark:text-slate-400"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className={`contactInput ${
                    errors.username ? "border-red-500 dark:border-red-500" : ""
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.username}
                />
                {errors.username && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <FiAlertCircle className="w-3 h-3" />
                    {errors.username}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-phone"
                  className="text-xs uppercase font-semibold text-slate-600 dark:text-slate-400"
                >
                  Phone Number (Optional)
                </label>
                <input
                  id="contact-phone"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="contactInput"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="text-xs uppercase font-semibold text-slate-600 dark:text-slate-400"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                className={`contactInput ${
                  errors.email ? "border-red-500 dark:border-red-500" : ""
                }`}
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <FiAlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-subject"
                className="text-xs uppercase font-semibold text-slate-600 dark:text-slate-400"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Senior React Developer Opportunity / New Project"
                className={`contactInput ${
                  errors.subject ? "border-red-500 dark:border-red-500" : ""
                }`}
                aria-required="true"
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <FiAlertCircle className="w-3 h-3" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs uppercase font-semibold text-slate-600 dark:text-slate-400"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your team, tech stack, and goals..."
                className={`contactTextArea ${
                  errors.message ? "border-red-500 dark:border-red-500" : ""
                }`}
                aria-required="true"
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <FiAlertCircle className="w-3 h-3" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="primaryBtn w-full mt-2"
            >
              <FiSend className="w-4 h-4" />
              <span>{isSubmitting ? "Processing..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
