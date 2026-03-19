import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Building2, Scale, Heart, Award, Target, Users2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StatsBar from "@/components/StatsBar";
import HeroContent from "@/components/HeroContent";

const subsidiaries = [
  {
    icon: Building2,
    title: "JCM Franchise Development",
    description:
      "Full-service sell-side consulting for franchise owners - facilitating complex multi-unit transactions across the QSR space.",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: TrendingUp,
    title: "JCM Finance",
    description:
      "Sourcing qualified lenders and arranging credit for franchise acquisitions, real estate developments, and business expansions.",
    accent: "from-emerald-500/20 to-green-500/10",
  },
  {
    icon: Scale,
    title: "JCM Opportunity Fund",
    description:
      "A private equity investment fund targeting real estate developments and QSR opportunities with strong projected returns.",
    accent: "from-amber-500/20 to-yellow-500/10",
  },
  {
    icon: Shield,
    title: "JCM Trust Services",
    description:
      "Comprehensive trust and estate planning services for high-net-worth individuals and closely-held corporations.",
    accent: "from-violet-500/20 to-purple-500/10",
  },
];

const expertise = [
  { icon: Shield, label: "Asset Protection" },
  { icon: Award, label: "Estate Planning" },
  { icon: Target, label: "Family Ventures" },
  { icon: Users2, label: "Corporate Advisory" },
];

export default function HomePage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/JCM_HQ_lr.jpg"
          alt="Joyal Capital Management Headquarters"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-[var(--color-navy-dark)]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-navy-dark)]/50 to-[var(--color-navy-dark)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-dark)]/40 to-transparent" />

        {/* Animated decorative elements */}
        <div className="absolute top-[15%] left-[8%] w-72 h-72 bg-[var(--color-gold)]/8 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-[var(--color-navy-light)]/15 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-[40%] right-[20%] w-48 h-48 bg-[var(--color-gold)]/5 rounded-full blur-[80px] animate-float-reverse" />

        {/* Rotating ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] animate-spin-slow">
          <div className="absolute inset-0 rounded-full border border-[var(--color-gold)]" />
          <div className="absolute inset-8 rounded-full border border-[var(--color-gold)]" />
        </div>

        <HeroContent />

        {/* Bottom sweep */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-warm-white)] to-transparent" />
      </section>

      {/* ════ ABOUT ════ */}
      <section className="py-28 bg-[var(--color-warm-white)] bg-dots relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image side */}
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Stacked frame effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent rounded-3xl" />
                <div className="absolute -inset-2 bg-[var(--color-warm-white)] rounded-2xl" />
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/photos/Gary-Joyal-2.jpg"
                    alt="Gary Joyal - CEO of Joyal Capital Management"
                    width={540}
                    height={650}
                    className="w-full object-cover"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/20 to-transparent" />
                </div>
                {/* Floating accent elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[var(--color-gold)]/30 to-transparent rounded-2xl animate-float-slow -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-[var(--color-gold)]/15 rounded-2xl animate-float -z-10" />
              </div>
            </ScrollReveal>

            {/* Content side */}
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-dark)] uppercase tracking-[0.15em] text-xs font-bold mb-5">
                  About
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-navy)] mb-4 leading-tight">
                  About Gary Joyal
                </h2>
                <span className="accent-line mb-7" />
                <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                  Gary Joyal is the Founder, Chief Executive Officer and Managing
                  Director of Joyal Capital Management, LLC. With over two and a
                  half decades of experience in the financial field, he is a
                  leading industry expert.
                </p>
                <p className="text-gray-500 leading-relaxed mb-5">
                  Gary specializes in the sub-sectors related to asset protection,
                  estate planning and family-owned ventures. His skillset is
                  wide-reaching, covering everything from estate taxation on
                  high-net-worth individuals to closely-held corporations.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Joyal Capital Management currently works with over 500 clients
                  spanning 30 states nationwide. The company has expanded its
                  in-house capabilities to include taxation, legal issues
                  management, and risk evaluation.
                </p>

                {/* Expertise pills */}
                <div className="flex flex-wrap gap-3">
                  {expertise.map((e) => (
                    <div key={e.label} className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--color-navy)]/5 hover:bg-[var(--color-gold)]/10 transition-colors duration-300 cursor-default">
                      <e.icon size={14} className="text-[var(--color-gold-dark)] group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold text-[var(--color-navy)] tracking-wide">{e.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════ STATS ════ */}
      <StatsBar />

      {/* ════ SUBSIDIARIES ════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-gold)]/[0.03] rounded-full blur-[100px]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-dark)] uppercase tracking-[0.15em] text-xs font-bold mb-5">
                Our Divisions
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-navy)] mb-4 leading-tight">
                Companies Founded <br className="hidden md:block" />by Gary
              </h2>
              <span className="accent-line-center mb-6" />
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                These subsidiaries enable JCM to serve as the back-end support
                for the Private Client Group.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidiaries.map((sub, i) => (
              <ScrollReveal key={sub.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="card-premium group p-8 md:p-10 h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sub.accent} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-400`}>
                    <sub.icon
                      size={24}
                      className="icon-hover text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3 group-hover:text-[var(--color-navy-light)] transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {sub.description}
                  </p>
                  {/* Hover arrow */}
                  <div className="mt-5 flex items-center gap-1.5 text-[var(--color-gold-dark)] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CHARITABLE WORK ════ */}
      <section className="relative py-28 overflow-hidden noise-overlay" style={{
        background: "linear-gradient(160deg, var(--color-navy-dark) 0%, var(--color-navy) 50%, var(--color-navy-light) 100%)",
      }}>
        {/* Decorative elements */}
        <div className="absolute top-20 right-[10%] w-80 h-80 bg-[var(--color-gold)]/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-10 left-[5%] w-64 h-64 bg-[var(--color-gold)]/5 rounded-full blur-[100px] animate-float-slow" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 text-[var(--color-gold)] uppercase tracking-[0.15em] text-xs font-bold mb-5">
                  Community
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Charitable Work
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full mb-7" />
                <p className="text-white/60 leading-relaxed text-lg mb-5">
                  Although Gary&apos;s primary career focus is the financial betterment
                  of his clients, he feels a strong tie to the local communities in
                  which JCM has a presence.
                </p>
                <p className="text-white/50 leading-relaxed mb-8">
                  It&apos;s because of this sense of community and his desire to
                  facilitate philanthropic involvement that Gary established the
                  Joyal Capital Management Foundation, Inc.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Foundation card */}
                <div className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Heart size={22} className="text-[var(--color-gold)]" />
                  </div>
                  <h3 className="text-white font-bold mb-2">JCM Foundation</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Facilitating philanthropic involvement in local communities where JCM has a presence.
                  </p>
                </div>
                {/* $100 for 100 card */}
                <div className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Award size={22} className="text-[var(--color-gold)]" />
                  </div>
                  <h3 className="text-white font-bold mb-2">$100 for 100</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Thousands of underprivileged children have benefited through this charitable program.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════ LEADERSHIP ════ */}
      <section className="py-28 bg-[var(--color-warm-white)] bg-diagonal relative section-fade-top">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left column - heading */}
            <ScrollReveal direction="left" className="lg:col-span-2 lg:sticky lg:top-24">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-dark)] uppercase tracking-[0.15em] text-xs font-bold mb-5">
                Leadership
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-navy)] mb-4 leading-tight">
                Leading With Vision
              </h2>
              <span className="accent-line mb-6" />
              <p className="text-gray-500 leading-relaxed">
                Gary has efficiently established himself as a leading financial
                expert in New England and beyond.
              </p>
            </ScrollReveal>

            {/* Right column - feature blocks */}
            <div className="lg:col-span-3 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="glass-light rounded-2xl p-7 group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-navy)]/8 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold)]/15 transition-colors">
                      <TrendingUp size={18} className="text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-navy)] mb-2">Diversified Growth</h3>
                      <p className="text-gray-500 leading-relaxed">
                        One of the key inputs that enabled Gary to grow his brand is the
                        diversification of his investments. Gary has grown JCM to almost
                        20 employees since its foundation as a sole venture in 1982.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="glass-light rounded-2xl p-7 group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-navy)]/8 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold)]/15 transition-colors">
                      <Users2 size={18} className="text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-navy)] mb-2">Client-Centered Leadership</h3>
                      <p className="text-gray-500 leading-relaxed">
                        As the CEO of a well-established, multi-state company, Gary
                        manages everything from one-on-one client engagements to large
                        corporate projects.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="glass-light rounded-2xl p-7 group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-navy)]/8 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold)]/15 transition-colors">
                      <Target size={18} className="text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-navy)] mb-2">Future Forward</h3>
                      <p className="text-gray-500 leading-relaxed">
                        Gary plans to continue to grow JCM and its clientele
                        through hard work, dedication and an eye for growth and
                        diversification across New England and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="relative py-32 overflow-hidden noise-overlay">
        {/* Animated gradient background */}
        <div className="absolute inset-0 animate-gradient-shift" style={{
          background: "linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 25%, var(--color-navy-light) 50%, var(--color-navy) 75%, var(--color-navy-dark) 100%)",
          backgroundSize: "300% 300%",
        }} />

        {/* Large decorative orbs */}
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-[var(--color-gold)]/[0.04] rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-[var(--color-gold)]/[0.03] rounded-full blur-[120px] animate-float-slow" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-dots opacity-50" />

        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block px-5 py-2 rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/10 backdrop-blur-sm text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-6">
              Get Started
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to <span className="text-gradient">Connect?</span>
            </h2>
            <p className="text-white/45 max-w-lg mx-auto mb-10 text-lg">
              For more information about Joyal Capital Management and its
              services, reach out using the contact form.
            </p>
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center gap-3 px-10 py-4.5 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-[var(--color-navy)] font-bold text-sm uppercase tracking-wider rounded-full shadow-2xl shadow-[var(--color-gold)]/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Gary <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
