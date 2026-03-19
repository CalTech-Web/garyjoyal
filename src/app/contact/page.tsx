import Image from "next/image";
import type { Metadata } from "next";
import { Mail, Clock, Globe } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

function HeroBackground() {
  return (
    <>
      <Image
        src="/photos/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
        priority
      />
      <div className="absolute inset-0 bg-[var(--color-navy-dark)]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-dark)]/40 via-transparent to-[var(--color-navy-dark)]/60" />
    </>
  );
}

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

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send a message and we'll respond promptly.",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Monday - Friday, 9:00 AM - 5:00 PM EST",
  },
  {
    icon: Globe,
    title: "Nationwide Service",
    description: "Serving clients across 30+ states.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <HeroBackground />
        <div className="absolute top-10 right-[10%] w-80 h-80 bg-[var(--color-gold)]/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-10 left-[5%] w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-5 py-2 rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/10 backdrop-blur-sm text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-5">
            Reach Out
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/40 max-w-lg mx-auto text-lg">
            For more information about Joyal Capital Management and its services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[var(--color-warm-white)] bg-dots relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map((info, i) => (
                <ScrollReveal key={info.title} delay={i * 0.1} direction="left">
                  <div className="glass-light rounded-2xl p-6 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-navy)]/10 to-[var(--color-navy)]/5 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold)]/15 transition-colors duration-300">
                        <info.icon size={18} className="text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--color-navy)] mb-1">{info.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="card-premium p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-gold)]/15 to-[var(--color-gold)]/5 flex items-center justify-center">
                    <Mail size={20} className="text-[var(--color-gold-dark)]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[var(--color-navy)]">
                      Send a Message
                    </h2>
                    <p className="text-gray-400 text-sm">
                      We will get back to you as soon as possible.
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
