import Image from "next/image";
import type { Metadata } from "next";
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
  title: "Press",
  description:
    "Press releases and news from Gary Joyal and Joyal Capital Management - featuring investments in The St. Regis Residences Boston, Edge College Hill, franchise financing, and real estate private equity.",
  alternates: {
    canonical: "https://garyjoyal.vercel.app/press",
  },
  openGraph: {
    title: "Press | Gary Joyal",
    description:
      "Press releases and news from Gary Joyal and Joyal Capital Management - featuring investments, franchise financing, and real estate private equity.",
    images: [
      {
        url: "https://garyjoyal.vercel.app/photos/JCM-St-Regis.jpg",
        width: 1200,
        height: 630,
        alt: "Joyal Capital Management Press",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press | Gary Joyal",
    description:
      "Press releases and news from Gary Joyal and Joyal Capital Management.",
    images: ["https://garyjoyal.vercel.app/photos/JCM-St-Regis.jpg"],
  },
};

const pressReleases = [
  {
    id: "st-regis",
    date: "October 2018",
    title: "The St. Regis Residences, Boston",
    subtitle:
      "The JCM Opportunity Fund I, LLC is pleased to announce the closing of its latest investment.",
    image: "/photos/JCM-St-Regis.jpg",
    content: [
      "This prestigious development marks the eighth investment for the Fund, which has committed $36 million of invested equity into the project in partnership with The Cronin Group, LLC, a Boston-based commercial and residential real estate developer.",
      "The St. Regis Residences, Boston represents only the second all-residential property under the St. Regis banner worldwide, and it brings luxury residential living and the finest amenities available to the Seaport.",
      'The 22-story tower, which is projected to have a $500 million stabilized market value, features 114 condominium units, below-ground valet parking, an onsite fine dining restaurant, fitness amenities and professional services. Its striking, innovative design by Elkus Manfredi Architects reflects the nautical origins of the Seaport District and is destined to become a landmark of the Boston skyline.',
    ],
    quote:
      '"It is a privilege for my firm to invest in a project that the city of Boston will be proud of. The core principles of excellence and best-in-class service that define The St. Regis Residences, Boston are the same principles that my team at Joyal Capital Management have delivered to clients for nearly thirty years."',
  },
  {
    id: "edge-college-hill",
    date: "October 2018",
    title: "Edge College Hill",
    subtitle:
      "Seventh Private Equity Fund Investment is in Student Housing in Providence, RI.",
    image: "/photos/EdgeStillFromVid.png",
    content: [
      "Joyal Capital Management, LLC said today that its private equity investment fund, JCM Opportunity Fund I, LLC, has invested $11.5 million in Edge College Hill, in Providence, R.I., marking the fund's seventh investment.",
      "Edge College Hill is a 226-unit, 237-bed student housing facility, the first purpose-built student housing in historic College Hill in Providence, and serves the student populations of Brown University, Rhode Island School of Design (RISD) and Johnson & Wales University.",
      'The development is centrally located, readily accessible to the city\'s many cultural and entertainment offerings. Constructed in only 12 months, with fully furnished apartments, a 24/7 fitness center, controlled building access and a rooftop lounge.',
    ],
    quote:
      '"Our partnership with Rick and Mary Shaffer of Vision Properties continues to produce an exceptional student housing product that fills a vacuum that has existed for decades."',
  },
  {
    id: "franchise-financing",
    date: "August 2018",
    title: "Navigating Franchise Financing",
    subtitle:
      "CEO Gary F. Joyal offers insight into the best ways to maintain strong financial standing.",
    content: [
      "The foundation of franchising starts with the financing behind it. From real estate and rent to initial franchise fees and equipment, the costs required to launch a franchise business can add up quickly, and at times can seem overwhelming and confusing.",
      "Companies such as Joyal Capital Management Franchise Development, a subsidiary of Joyal Capital Management, LLC., strive to create a seamless selling process in what otherwise could be a stressful experience.",
      "With over 250 franchisee clients representing 2,000 locations, JCM Franchise Development is built on the foundation of providing differentiated, value-added services to its clients on complex strategic decisions and transactions.",
    ],
    quote:
      '"JCM encourages franchisees to work with a lending partner who is ready and willing to grow with them. It is recommended to be proactive in arranging a line of credit so the franchisee knows that funds are available as growth opportunities develop."',
  },
  {
    id: "dunkin-donuts",
    date: "January 2018",
    title: "Record Dunkin' Donuts Network Sale",
    subtitle:
      "JCM Franchise Development records the single largest sale of a Dunkin' Donuts franchisee-owned network in the firm's 30-year history.",
    image: "/photos/Joyal_DD_Pike.png",
    content: [
      "JCMFD was able to deploy its entire suite of sell-side consulting services to their client, who is a long-time Dunkin' franchisee in greater Chicago, on the sale of the 67-store network and corresponding SDA.",
      "Over the course of five separate closings which involved seven purchasing groups, JCMFD was able to lead the facilitation, coordination and closing of a very complex transaction while ultimately providing a seamless transition among all parties.",
      "Additionally, JCM Finance sourced qualified lenders within its network of financial institutions to provide a conduit for potential buyers.",
    ],
    quote:
      '"We are extremely proud to be part of this historic transaction for our Dunkin\' Donuts franchisee client and moreover, to be able to demonstrate the various unique offerings our firm affords the QSR space."',
  },
  {
    id: "real-estate-2017-aug",
    date: "August 2017",
    title: "Real Estate Investments in Development",
    subtitle:
      "Recent real estate investments currently in development through the JCM Opportunity Fund.",
    content: [
      "The JCM Opportunity Fund has raised an $11,500,000 investment in The Edge at Merrimack River, a 147-unit, off-campus student housing complex serving the Lowell campus of the University of Massachusetts. At completion, the Fund expects the development to be worth $55,000,000.",
      "The Fund has also partnered with Megryco, Inc. on Pointe 1620, a 56-unit condominium development in Plymouth, MA. At completion, the Fund expects the development to be worth $21,000,000 with a Projected Annual Return of 29.70%.",
      "Most recently, The Fund has raised an $11,500,000 investment in Edge College Hill, a 247-unit, off-campus student housing development in Providence, RI. At completion, the Fund expects the development to be worth $65,000,000.",
    ],
    quote:
      '"We are very pleased to see growth in the Fund\'s real estate investment portfolio and to be associated with talented development teams like Vision and Megryco."',
  },
  {
    id: "real-estate-2017-jan",
    date: "January 2017",
    title: "Real Estate Private Equity Investments",
    subtitle:
      "The JCM Opportunity Fund I, LLC announces its most recent investments.",
    content: [
      "The Fund is partnering on a fifty-six unit condominium development in the rapidly-growing Plymouth, MA market with South Shore-based Megryco, Inc. The Fund has placed $3,500,000 of invested equity along with $14,500,000 of construction financing.",
      "The JCM Opportunity Fund I, LLC is also pleased to announce the closing of The Edge at Merrimack River in Lowell, MA - a 147-unit, 414 bed off-campus student housing complex serving UMass Lowell.",
    ],
    quote:
      '"These last two investments underscore the Fund\'s commitment to strategic real estate development in markets that are poised for growth and where certain demand segments are underserved."',
  },
  {
    id: "vision-properties",
    date: "August 2016",
    title: "Joyal Capital Management and Vision Properties",
    subtitle:
      "A rewarding partnership - the fifth successful collaboration between the two firms.",
    content: [
      "The JCM Opportunity Fund I, LLC recently completed an investment in a purpose-built, off-campus student housing project serving UMass Lowell. When completed, The Edge Lowell will offer 438 rentable bedrooms with unparalleled amenities.",
      "The first successful Edge investment was completed in 2015 - a five-story, 170-unit medical multifamily property adjacent to Wake Forest Baptist Medical Center. It was sold after development with an IRR of 21.1% and AAR of 22.04%.",
      "JCM's partnership with Vision extends beyond private equity to include insurance, estate planning and financing - exemplifying JCM's Total Plan Integration philosophy.",
    ],
    quote:
      '"JCM has enjoyed a long and wonderful relationship with Vision Development. Vision is a vertically integrated, best in class operation that we are proud to call both a client and a partner."',
  },
  {
    id: "inaugural-year",
    date: "June 2015",
    title: "Exciting Inaugural Year for the JCM Opportunity Fund",
    subtitle:
      "June 2015 marked the 1-year anniversary of the JCM Opportunity Fund I, LLC.",
    content: [
      "The Fund completed four investments in its first year: a real estate investment in an assisted living facility in Boca Raton, FL (43% Average Annual Return); a medical multifamily development in Winston-Salem, NC (25% Projected AAR); and two QSR investments in Miami, FL and Atlanta, GA.",
      "The Fund achieved a level of balance and diversification in its first four investments: 50% in real estate and 50% in Quick Service Restaurant execution.",
    ],
  },
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <HeroBackground />
        <div className="absolute top-10 right-[10%] w-80 h-80 bg-[var(--color-gold)]/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-5 py-2 rounded-full border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/10 backdrop-blur-sm text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-semibold mb-5">
            News &amp; Updates
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Press Releases</h1>
          <p className="text-white/40 max-w-lg mx-auto text-lg">
            Latest news and announcements from Joyal Capital Management.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 bg-[var(--color-warm-white)] bg-dots relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-[var(--color-gold)]/15 to-transparent" />

          <div className="space-y-16">
            {pressReleases.map((pr, i) => (
              <ScrollReveal key={pr.id} delay={i * 0.05}>
                <article className="card-premium overflow-hidden group">
                  {pr.image && (
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <Image
                        src={pr.image}
                        alt={pr.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent" />
                      {/* Date badge on image */}
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-[var(--color-gold)]/90 text-[var(--color-navy)] text-xs font-bold uppercase tracking-wider">
                          {pr.date}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-8 md:p-10">
                    {!pr.image && (
                      <span className="inline-block px-3 py-1.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold-dark)] text-xs font-bold uppercase tracking-wider mb-4">
                        {pr.date}
                      </span>
                    )}
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-3 leading-tight">
                      {pr.title}
                    </h2>
                    <p className="text-gray-500 font-medium mb-6 text-lg">
                      {pr.subtitle}
                    </p>
                    {pr.content.map((para, j) => (
                      <p key={j} className="text-gray-600 leading-relaxed mb-4">
                        {para}
                      </p>
                    ))}
                    {pr.quote && (
                      <blockquote className="relative mt-8 p-6 rounded-xl bg-[var(--color-warm-white)] border border-[var(--color-gold)]/10">
                        <div className="absolute top-4 left-4 text-[var(--color-gold)]/20 text-5xl font-serif leading-none">&ldquo;</div>
                        <p className="text-gray-500 italic leading-relaxed pl-6 relative z-10">
                          {pr.quote}
                        </p>
                        <footer className="mt-4 pl-6 text-sm font-bold text-[var(--color-navy)] not-italic">
                          Gary F. Joyal, CEO &amp; Managing Partner
                        </footer>
                      </blockquote>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-[var(--color-warm-gray)] relative section-fade-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400 leading-relaxed">
            The announcements above are for informational purposes only for the
            confidential use of the intended recipient. No announcement
            information may be construed as an offer of, solicitation of an offer
            to buy, recommendation of, representation of suitability or
            endorsement of, any security, investment fund, interest in real
            estate or other investment. Any such offering shall be made only to
            qualified investors by a private placement memorandum or a similar
            document containing risk factors and accompanied by other definitive
            offering documents, distributed by persons authorized by Joyal
            Capital Management, LLC, and only in those jurisdictions where
            permitted by applicable law.
          </p>
        </div>
      </section>
    </>
  );
}
