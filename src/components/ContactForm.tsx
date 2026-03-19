"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://forms.caltechweb.com/api/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            site: "garyjoyal.com",
            FORM_RECEIVER_EMAIL: "saif@caltechweb.com",
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
            source: "contact-page",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    "w-full px-4 py-3.5 rounded-xl border bg-[var(--color-warm-white)]/50 text-sm focus:outline-none focus:bg-white transition-all duration-300 placeholder:text-gray-400";

  const borderClass = (field: string) =>
    focused === field
      ? "border-[var(--color-gold)] ring-2 ring-[var(--color-gold)]/20 shadow-sm"
      : "border-gray-200/80 hover:border-gray-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-[var(--color-navy)] uppercase tracking-wider mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            className={`${inputBase} ${borderClass("name")}`}
            placeholder="Full name"
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[var(--color-navy)] uppercase tracking-wider mb-2">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`${inputBase} ${borderClass("email")}`}
            placeholder="you@example.com"
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold text-[var(--color-navy)] uppercase tracking-wider mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={`${inputBase} ${borderClass("subject")}`}
          placeholder="How can we help?"
          onFocus={() => setFocused("subject")}
          onBlur={() => setFocused(null)}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[var(--color-navy)] uppercase tracking-wider mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputBase} ${borderClass("message")} resize-none`}
          placeholder="Tell us more about your inquiry..."
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-navy-light)] text-white text-sm font-bold uppercase tracking-wider rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[var(--color-navy)]/15"
      >
        <span className="relative z-10 flex items-center gap-2">
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </span>
      </button>

      {success && (
        <div className="flex items-center gap-3 text-green-700 bg-green-50 border border-green-200/80 rounded-xl px-5 py-4 text-sm">
          <CheckCircle size={18} />
          <span>Thank you! Your message has been sent successfully.</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 text-red-700 bg-red-50 border border-red-200/80 rounded-xl px-5 py-4 text-sm">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}
    </form>
  );
}
