import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Building2, Scale } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StatsBar from "@/components/StatsBar";

const subsidiaries = [
  {
    icon: Building2,
    title: "JCM Franchise Development",
    description:
      "Full-service sell-side consulting for franchise owners - facilitating complex multi-unit transactions across the QSR space.",
  },
  {
    icon: TrendingUp,
    title: "JCM Finance",
    description:
      "Sourcing qualified lenders and arranging credit for franchise acquisitions, real estate developments, and business expansions.",
  },
  {
    icon: Scale,
    title: "JCM Opportunity Fund",
    description:
      "A private equity investment fund targeting real estate developments and QSR opportunities with strong projected returns.",
  },
  {
    icon: Shield,
    title: "JCM Trust Services",
    description:
      "Comprehensive trust and estate planning services for high-net-worth individuals and closely-held corporations.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/JCM_HQ_lr.jpg"
          alt="Joyal Capital Management Headquarters"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy)]/80 to-[var(--color-navy-dark)]/90" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Joyal Capital Management
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Gary Joyal
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-3">
            Founder, CEO &amp; Managing Director
          </p>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            A leading industry expert with over two and a half decades in
            financial services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold text-sm uppercase tracking-wide rounded hover:bg-[var(--color-gold-light)] transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 border-2 border-white/30 text-white font-semibold text-sm uppercase tracking-wide rounded hover:bg-white/10 transition-colors"
            >
              View Press
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-[var(--color-warm-white)]">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <p className="text-[var(--color-gold-dark)] uppercase tracking-widest text-xs font-bold mb-3">
                  About
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
                  About Gary Joyal
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Gary Joyal is the Founder, Chief Executive Officer and Managing
                  Director of Joyal Capital Management, LLC. With over two and a
                  half decades of experience in the financial field, he is a
                  leading industry expert.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Gary specializes in the sub-sectors related to asset protection,
                  estate planning and family-owned ventures. His skillset is
                  wide-reaching, covering everything from estate taxation on
                  high-net-worth individuals to closely-held corporations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Joyal Capital Management currently works with over 500 clients
                  spanning 30 states nationwide. The company has expanded its
                  in-house capabilities to include taxation, legal issues
                  management, and risk evaluation.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/photos/Gary-Joyal-2.jpg"
                  alt="Gary Joyal - CEO of Joyal Capital Management"
                  width={540}
                  height={650}
                  className="rounded-xl shadow-2xl w-full object-cover"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--color-gold)]/20 rounded-xl -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[var(--color-navy)]/10 rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Subsidiaries */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-[var(--color-gold-dark)] uppercase tracking-widest text-xs font-bold mb-3">
                Our Divisions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">
                Companies Founded by Gary
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                These subsidiaries enable JCM to serve as the back-end support
                for the Private Client Group - advising clients about sizable
                mergers and acquisitions, divestitures, credit lending, real
                estate and more.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidiaries.map((sub, i) => (
              <ScrollReveal key={sub.title} delay={i * 0.1}>
                <div className="group bg-[var(--color-warm-white)] rounded-xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-navy)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-gold)]/20 group-hover:scale-110 transition-all duration-300">
                    <sub.icon
                      size={22}
                      className="text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-navy)] mb-3">
                    {sub.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Charitable Work */}
      <section className="py-20 bg-[var(--color-warm-gray)]">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[var(--color-gold-dark)] uppercase tracking-widest text-xs font-bold mb-3">
                Community
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
                Charitable Work
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Although Gary&apos;s primary career focus is the financial betterment
                of his clients, he feels a strong tie to the local communities in
                which JCM has a presence. It&apos;s because of this sense of community
                and his desire to facilitate philanthropic involvement that Gary
                established the Joyal Capital Management Foundation, Inc.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Courtesy of his efforts, thousands of underprivileged children
                have benefited through the &ldquo;$100 for 100&rdquo; program.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Leadership & Future */}
      <section className="py-20 bg-white">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[var(--color-gold-dark)] uppercase tracking-widest text-xs font-bold mb-3">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
                Leading With Vision
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                One of the key inputs that enabled Gary to grow his brand is the
                diversification of his investments. Gary has grown JCM to almost
                20 employees since its foundation as a sole venture in 1982.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                As the CEO of a well-established, multi-state company, Gary
                manages everything from one-on-one client engagements to large
                corporate projects.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As demonstrated by his experiences thus far, Gary has efficiently
                established himself as a leading financial expert in New England
                and beyond. Gary plans to continue to grow JCM and its clientele
                through hard work, dedication and an eye for growth and
                diversification.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 50%, var(--color-navy-light) 100%)",
        }}
      >
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[var(--color-gold)] uppercase tracking-widest text-xs font-bold mb-3">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Ready to Connect?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              For more information about Joyal Capital Management and its
              services, reach out using the contact form.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold text-sm uppercase tracking-wide rounded hover:bg-[var(--color-gold-light)] transition-colors"
            >
              Contact Gary <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
