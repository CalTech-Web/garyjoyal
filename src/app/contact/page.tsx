import type { Metadata } from "next";
import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Gary Joyal and Joyal Capital Management. For inquiries about asset protection, estate planning, franchise development, or investment opportunities.",
  alternates: {
    canonical: "https://garyjoyal.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[var(--color-navy)] to-[var(--color-navy-dark)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            Reach Out
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[var(--color-warm-white)]">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)]/10 flex items-center justify-center">
                  <Mail size={18} className="text-[var(--color-navy)]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--color-navy)]">
                    Send a Message
                  </h2>
                  <p className="text-gray-500 text-sm">
                    We will get back to you as soon as possible.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                For more information, please contact Gary using the form below
                and thank you for your inquiry.
              </p>

              <ContactForm />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
