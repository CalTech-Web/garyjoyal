import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Gary Joyal and Joyal Capital Management. For inquiries about asset protection, estate planning, franchise development, or investment opportunities.",
  alternates: {
    canonical: "https://garyjoyal.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Gary Joyal",
    description:
      "Contact Gary Joyal and Joyal Capital Management for inquiries about asset protection, estate planning, franchise development, or investment opportunities.",
    images: [
      {
        url: "https://garyjoyal.vercel.app/photos/Gary-Joyal-2.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Gary Joyal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Gary Joyal",
    description:
      "Contact Gary Joyal and Joyal Capital Management for inquiries about financial services.",
    images: ["https://garyjoyal.vercel.app/photos/Gary-Joyal-2.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" style={{
        background: "linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 50%, var(--color-navy-dark) 100%)",
      }}>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p className="text-gradient uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            Reach Out
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Contact
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mx-auto mt-5" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[var(--color-warm-white)] bg-pattern">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-glow bg-white rounded-2xl shadow-lg shadow-black/[0.03] border border-gray-100/80 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-navy)]/10 to-[var(--color-navy)]/5 flex items-center justify-center">
                  <Mail size={20} className="text-[var(--color-navy)]" />
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
