"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactInquiry } from "@/lib/firebase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim() ?? "";
    const email = (formData.get("email") as string)?.trim() ?? "";
    const phone = (formData.get("phone") as string) ?? "";
    const message = (formData.get("message") as string) ?? "";

    if (!name) {
      setStatus("error");
      setErrorMessage("Name is required.");
      return;
    }
    if (!email) {
      setStatus("error");
      setErrorMessage("Email is required.");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await submitContactInquiry({ name, email, phone: phone || null, message: message || null });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  const inputClass =
    "w-full border border-accent/30 bg-navy-light/50 backdrop-blur-sm px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-navy-light";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm text-gray-300">
          Name *
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          className={inputClass}
          placeholder="Your name"
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm text-gray-300">
          Email *
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          className={inputClass}
          placeholder="your@email.com"
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-1 block text-sm text-gray-300">
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          className={inputClass}
          placeholder="+27 ..."
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm text-gray-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Your message"
          disabled={status === "loading"}
        />
      </div>

      {status === "success" && (
        <p className="text-sm text-green-400">Thanks! We&apos;ll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="modern-button w-full py-3 font-semibold text-navy focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </motion.form>
  );
}
