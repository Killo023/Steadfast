"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactInquiry } from "@/lib/firebase";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
    "w-full border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-slate-500 transition-all duration-300 focus:border-accent/60 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="readout mb-1.5 block text-slate-400">
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
          <label htmlFor="contact-phone" className="readout mb-1.5 block text-slate-400">
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
      </div>
      <div>
        <label htmlFor="contact-email" className="readout mb-1.5 block text-slate-400">
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
        <label htmlFor="contact-message" className="readout mb-1.5 block text-slate-400">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Which course are you interested in? Preferred dates?"
          disabled={status === "loading"}
        />
      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden />
            Thanks! Your message is in. We&apos;ll be in touch soon.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
          >
            <AlertCircle className="h-4 w-4" aria-hidden />
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full text-sm disabled:cursor-not-allowed disabled:opacity-60"
        whileHover={status !== "loading" ? { scale: 1.02 } : undefined}
        whileTap={status !== "loading" ? { scale: 0.98 } : undefined}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
