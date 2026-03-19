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
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy)]/80 via-[var(--color-navy-dark)]/75 to-[var(--color-navy-dark)]/95" />
        {/* Decorative orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-navy-light)]/20 rounded-full blur-3xl animate-float-slow" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <p className="text-gradient uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Joyal Capital Management
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
            Gary Joyal
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-3">
            Founder, CEO &amp; Managing Director
          </p>
          <p className="text-white/55 text-lg max-w-xl mx-auto mb-8">
            A leading industry expert with over two and a half decades in
            financial services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-lift inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-[var(--color-navy)] font-semibold text-sm uppercase tracking-wide rounded-lg shadow-lg shadow-[var(--color-gold)]/20"
            >
              Get in Touch
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-semibold text-sm uppercase tracking-wide rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              View Press
            </Link>
          </div>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-warm-white)] to-transparent" />
      </section>

      {/* About */}
      <section className="py-24 bg-[var(--color-warm-white)] bg-pattern relative">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gradient uppercase tracking-widest text-xs font-bold mb-3">
                  About
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
                  About Gary Joyal
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mb-6" />
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
              <div className="relative group">
                <Image
                  src="/photos/Gary-Joyal-2.jpg"
                  alt="Gary Joyal - CEO of Joyal Capital Management"
                  width={540}
                  height={650}
                  className="rounded-2xl shadow-2xl w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-br from-[var(--color-gold)]/25 to-[var(--color-gold-light)]/10 rounded-2xl -z-10 animate-float-slow" />
                <div className="absolute -top-4 -right-4 w-36 h-36 bg-gradient-to-br from-[var(--color-navy)]/10 to-[var(--color-navy-light)]/5 rounded-2xl -z-10 animate-float" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Subsidiaries */}
      <section className="py-24 bg-white bg-pattern relative">
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-gradient uppercase tracking-widest text-xs font-bold mb-3">
                Our Divisions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">
                Companies Founded by Gary
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mx-auto mb-5" />
              <p className="text-gray-500 max-w-2xl mx-auto">
                These subsidiaries enable JCM to serve as the back-end support
                for the Private Client Group - advising clients about sizable
                mergers and acquisitions, divestitures, credit lending, real
                estate and more.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {subsidiaries.map((sub, i) => (
              <ScrollReveal key={sub.title} delay={i * 0.1}>
                <div className="card-glow group bg-[var(--color-warm-white)] rounded-xl p-8 border border-gray-100/80 hover:-translate-y-1.5 transition-all duration-400">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-navy)]/10 to-[var(--color-navy)]/5 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-[var(--color-gold)]/20 group-hover:to-[var(--color-gold-light)]/10 group-hover:scale-110 transition-all duration-300">
                    <sub.icon
                      size={24}
                      className="icon-hover text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-navy)] mb-3 group-hover:text-[var(--color-navy-light)] transition-colors">
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
      <section className="py-24 bg-[var(--color-warm-gray)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        {/* Decorative background orb */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl" />
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gradient uppercase tracking-widest text-xs font-bold mb-3">
                Community
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
                Charitable Work
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mx-auto mb-6" />
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
      <section className="py-24 bg-white bg-pattern relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-gradient uppercase tracking-widest text-xs font-bold mb-3">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-6">
                Leading With Vision
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mb-6" />
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
      <section className="py-24 relative overflow-hidden animate-gradient-shift" style={{
        background: "linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 30%, var(--color-navy-light) 60%, var(--color-navy) 100%)",
        backgroundSize: "200% 200%",
      }}>
        {/* Decorative orbs */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-[var(--color-gold)]/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-3xl animate-float-slow" />
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <p className="text-gradient uppercase tracking-widest text-xs font-bold mb-3">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 drop-shadow-lg">
              Ready to Connect?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mx-auto mb-6" />
            <p className="text-white/55 max-w-xl mx-auto mb-8">
              For more information about Joyal Capital Management and its
              services, reach out using the contact form.
            </p>
            <Link
              href="/contact"
              className="btn-lift inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-[var(--color-navy)] font-semibold text-sm uppercase tracking-wide rounded-lg shadow-lg shadow-[var(--color-gold)]/20"
            >
              Contact Gary <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
