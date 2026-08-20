export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string; // lucide icon name
  tagline: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedLocations: string[];
  relatedBlogSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "radon-testing",
    title: "Radon Testing",
    shortTitle: "Radon Testing",
    icon: "FlaskConical",
    tagline: "Know your number before you decide.",
    excerpt:
      "Short-term and long-term radon testing for foothills homes — accurate, EPA-compliant, and the honest first step before any system gets installed.",
    metaTitle: "Radon Testing in Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Professional radon testing for Jefferson & Park County homes. Short-term & long-term EPA-compliant kits. Get your real number before you mitigate. Free estimates.",
    intro:
      "You can't see, smell, or taste radon — and in the Colorado foothills, the only way to know your level is to test. Foothills Radon Testing and Mitigation offers both short-term and long-term testing using EPA-approved continuous monitors and passive devices, so you get a real number, not a guess. We test for homeowners, buyers, sellers, and real estate transactions across the HWY 285 corridor.",
    sections: [
      {
        heading: "Why testing matters in the foothills",
        body: "Colorado sits in EPA Radon Zone 1 — the highest risk category — and the average Colorado home tests at 6.4 pCi/L, nearly five times the national average of 1.3 pCi/L. Roughly half of all Colorado homes come in above the EPA action level of 4.0 pCi/L. Jefferson County and Park County foothills homes, built on granite and uranium-bearing rock, tend to test on the upper end of the state range. If you live in Evergreen, Conifer, Pine, Bailey, or anywhere along the Front Range, testing isn't optional due diligence — it's essential.",
      },
      {
        heading: "Short-term vs. long-term testing",
        body: "Short-term tests run 2 to 7 days using a continuous radon monitor that records hourly readings, ideal for real estate transactions on a tight timeline. Long-term tests run 90+ days with an alpha-track device and give the most accurate picture of your year-round exposure, since radon fluctuates with seasons, weather, and ventilation. For a home you're staying in, we usually recommend a long-term test. For a closing deadline, short-term gets you a defensible number fast.",
      },
      {
        heading: "What your results mean",
        body: "The EPA action level is 4.0 pCi/L — above that, mitigation is strongly recommended. Many professionals, including us, suggest mitigation above 2.0 pCi/L because there is no truly safe level of radon exposure, and radon is the second leading cause of lung cancer in the United States behind smoking. We hand you a clear written report with your number, what it means, and a plain-English recommendation — no pressure, no upsell.",
      },
      {
        heading: "What's included",
        body: "Every Foothills Radon test includes placement of an EPA-approved device, closed-house conditions guidance, retrieval, lab analysis, and a written report with your pCi/L reading and a recommendation. Real estate tests include a signed report suitable for transaction disclosures. We serve homeowners, buyers, sellers, and agents throughout Jefferson and Park Counties.",
      },
    ],
    faqs: [
      {
        q: "How long does a radon test take?",
        a: "A short-term test runs 2 to 7 days. A long-term test runs at least 90 days. For real estate closings, we typically use a 48-hour short-term continuous monitor so you have a defensible number before the deadline.",
      },
      {
        q: "Do I need to leave my house during the test?",
        a: "No, but you do need to keep windows and exterior doors closed (except normal entry/exit) for 12 hours before and during a short-term test. We'll give you simple closed-house conditions instructions when we drop off the device.",
      },
      {
        q: "What level of radon is dangerous?",
        a: "The EPA action level is 4.0 pCi/L. There's no truly safe level — radon is the #2 cause of lung cancer in the U.S. Many professionals recommend mitigation above 2.0 pCi/L. We'll explain your number honestly and let you decide.",
      },
    ],
    relatedLocations: ["evergreen-co", "conifer-co", "bailey-co"],
    relatedBlogSlugs: ["how-to-read-radon-test-results", "diy-vs-professional-radon-test", "what-to-do-after-high-radon-test"],
  },
  {
    slug: "radon-mitigation",
    title: "Radon Mitigation System Installation",
    shortTitle: "Radon Mitigation",
    icon: "Wind",
    tagline: "The gold standard, done right.",
    excerpt:
      "Sub-slab depressurization systems designed and installed for foothills homes — most jobs finish in one day and drop radon below 2.0 pCi/L.",
    metaTitle: "Radon Mitigation Systems Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Sub-slab depressurization radon mitigation for Jefferson & Park County homes. Most installs done in one day. Drop radon below 2.0 pCi/L. Free estimates.",
    heroImage:
      "https://vibe.filesafe.space/1787162816986577987/assets/90033acf-df6c-483c-82a8-2e61301ca4ee.png",
    intro:
      "Radon mitigation is what we do most. We install sub-slab depressurization (SSD) systems — the gold standard method recognized by the EPA and the Colorado Department of Public Health — tailored to the foundation types and geology of foothills homes. Most installations are complete in a single day, and our follow-up testing routinely shows levels dropping well below 2.0 pCi/L.",
    sections: [
      {
        heading: "How sub-slab depressurization works",
        body: "An SSD system creates a vacuum beneath your home's concrete slab, drawing radon-laden soil gas out before it enters your living space. We core a small hole through the slab, insert a suction point, and run PVC piping to a quiet exterior fan that vents the gas above the roofline. The system runs continuously and is barely noticeable — a small pipe on the exterior and a fan that's quieter than a refrigerator.",
      },
      {
        heading: "Designed for foothills foundations",
        body: "Homes along the HWY 285 corridor come in every foundation flavor — full basements, walk-outs, crawl spaces, and slab-on-grade. Each requires a different approach. Basements get a sub-slab suction point; crawl spaces may need a membrane and sub-membrane depressurization; slab homes need a different suction layout. We assess your foundation, your radon level, and your home's construction before we ever touch a drill.",
      },
      {
        heading: "What to expect on install day",
        body: "We arrive in the morning, lay down floor protection, core the slab, install the suction point and piping, mount the fan, and seal the penetration. Most jobs are done by late afternoon. We leave the workspace cleaner than we found it, label the system clearly, and walk you through how to read the manometer (the pressure gauge on your pipe) so you always know your system is working.",
      },
      {
        heading: "Cost and warranty",
        body: "Radon mitigation systems on the Front Range typically cost between $1,500 and $3,500, depending on foundation complexity, fan requirements, and routing. Every Foothills Radon system includes a written warranty and a post-installation test recommendation so you can confirm your levels dropped. We're upfront about pricing — you'll get a firm estimate before any work starts.",
      },
    ],
    faqs: [
      {
        q: "How much does a radon mitigation system cost in Colorado?",
        a: "Most systems on the Front Range run $1,500 to $3,500 depending on your foundation, fan needs, and pipe routing. We give you a firm written estimate before any work begins — no surprise charges.",
      },
      {
        q: "Will the fan run all the time?",
        a: "Yes, the fan runs continuously to keep soil gas from entering your home. It's very quiet — about the sound of a refrigerator — and uses roughly the same electricity as a lightbulb.",
      },
      {
        q: "How do I know the system is working?",
        a: "Every system has a manometer (a U-tube pressure gauge) mounted on the pipe. If the fluid levels are uneven, the system is pulling vacuum. We also strongly recommend a post-installation radon test 24+ hours after the system runs.",
      },
    ],
    relatedLocations: ["pine-co", "evergreen-co", "conifer-co"],
    relatedBlogSlugs: ["does-radon-mitigation-work", "how-long-does-radon-mitigation-take", "radon-mitigation-cost-colorado"],
  },
  {
    slug: "crawl-space-encapsulation",
    title: "Crawl Space Encapsulation",
    shortTitle: "Crawl Space Encapsulation",
    icon: "Layers",
    tagline: "Seal the ground, stop the gas.",
    excerpt:
      "Vapor barrier encapsulation and sub-membrane depressurization for dirt and stone crawl spaces common in older foothills homes.",
    metaTitle: "Crawl Space Encapsulation Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Crawl space encapsulation & sub-membrane radon systems for Jefferson & Park County homes. Seal dirt crawl spaces against radon and moisture. Free estimates.",
    heroImage:
      "https://vibe.filesafe.space/1787162816986577987/assets/ecb2cf64-28d8-4a2a-bed6-3e15e33fab64.png",
    intro:
      "Many older foothills homes — especially ranches and cabins in Pine, Bailey, Idledale, and Indian Hills — were built with dirt or stone crawl spaces. These open earth spaces are a direct path for radon and moisture to enter your home. Encapsulation seals that ground with a heavy vapor barrier, and when paired with sub-membrane depressurization, it's one of the most effective radon reductions we offer.",
    sections: [
      {
        heading: "Why dirt crawl spaces are a radon problem",
        body: "Radon rises from the soil through the path of least resistance. A bare dirt crawl space is essentially an open window into the earth beneath your home. In the foothills, where granite and uranium-bearing rock sit close to the surface, unsealed crawl spaces can drive radon levels far above the EPA action level. Encapsulation closes that window.",
      },
      {
        heading: "What encapsulation involves",
        body: "We line the crawl space floor and walls with a reinforced 20-mil vapor barrier, sealed at every seam and fastened to the foundation walls. For radon specifically, we add a sub-membrane depressurization system — a suction pipe beneath the membrane connected to a fan that pulls soil gas and vents it outside. The result is a dry, sealed, radon-resistant crawl space.",
      },
      {
        heading: "Bonus benefits beyond radon",
        body: "Encapsulation does more than cut radon. It controls moisture that causes musty odors, mold, and wood rot; improves indoor air quality throughout the home; and can even make floors above the crawl space warmer in winter. Many foothills homeowners notice their house smells and feels noticeably better within days.",
      },
      {
        heading: "Is your crawl space a candidate?",
        body: "If your home has a dirt, gravel, or partial-stone crawl space — common in pre-1990s construction across Jefferson and Park Counties — encapsulation is almost always worthwhile, especially if your radon test is elevated. We inspect the space, measure, and give you a clear scope and price before any work starts.",
      },
    ],
    faqs: [
      {
        q: "Does encapsulation alone fix radon?",
        a: "Encapsulation reduces radon, but for elevated levels we recommend pairing it with sub-membrane depressurization — a fan that actively pulls soil gas from beneath the barrier. The combination is what brings levels reliably below the EPA action level.",
      },
      {
        q: "How long does crawl space encapsulation take?",
        a: "Most encapsulation jobs take 1 to 2 days depending on the size and condition of the crawl space. Adding a sub-membrane depressurization fan adds minimal time to the project.",
      },
      {
        q: "Will it help with the musty smell in my house?",
        a: "Very likely. A sealed, conditioned crawl space eliminates the moisture source behind most musty odors and improves air quality throughout the home above it.",
      },
    ],
    relatedLocations: ["pine-co", "idledale-co", "indian-hills-co"],
    relatedBlogSlugs: ["foundation-types-radon-basement-crawlspace-slab", "does-radon-mitigation-work", "radon-levels-colorado-foothills"],
  },
  {
    slug: "radon-fan-replacement-repair",
    title: "Radon Fan Replacement & Repair",
    shortTitle: "Radon Fan Replacement & Repair",
    icon: "Wrench",
    tagline: "Quiet, efficient, and running again.",
    excerpt:
      "Replacement fans, vibration fixes, and system repairs for existing radon systems across the foothills — often same-week.",
    metaTitle: "Radon Fan Replacement & Repair Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Radon fan replacement, vibration repair & system service for Jefferson & Park County homes. Quiet, efficient fans. Fast scheduling. Free estimates.",
    intro:
      "If your radon system is humming loudly, rattling, or the manometer reads flat, your fan may be failing. Radon fans typically last 5 to 10 years, and when one quits your home is unprotected. Foothills Radon Testing and Mitigation replaces and repairs fans for any system — ours or someone else's — across Jefferson and Park Counties, often within the same week you call.",
    sections: [
      {
        heading: "Signs your radon fan needs service",
        body: "Common warning signs include a loud or vibrating fan, a manometer reading zero (no pressure differential), an uptick in your radon test results, or a fan that's simply silent and not running. If you notice any of these, your system isn't protecting you and it's time to call. We'll diagnose whether it's a fan failure, a pipe issue, or a suction-point problem.",
      },
      {
        heading: "Upgrading to a quieter, more efficient fan",
        body: "Older radon fans are often louder and less efficient than today's models. When we replace a fan, we size the new unit to your home's soil conditions and slab, which often means a quieter fan that draws less power while maintaining strong suction. Many customers are surprised how much quieter their system gets after an upgrade.",
      },
      {
        heading: "Repairs beyond the fan",
        body: "Sometimes the issue isn't the fan at all — it's a cracked pipe, a clogged suction point, or poor initial installation. We inspect the full system, find the real cause, and fix it honestly. If your system was installed by another company and isn't performing, we're happy to take a look and give you a straight answer.",
      },
      {
        heading: "We service any system",
        body: "You don't need to have bought your system from us. Foothills Radon services and replaces fans on radon systems installed by any contractor throughout the foothills. Bring us your manometer reading and your last test result and we'll tell you where you stand.",
      },
    ],
    faqs: [
      {
        q: "How long do radon fans last?",
        a: "Most radon fans last 5 to 10 years. If yours is older, louder than it used to be, or your manometer reads flat, it's time to have it checked.",
      },
      {
        q: "Can you fix a system another company installed?",
        a: "Absolutely. We service and replace fans on radon systems installed by any contractor across Jefferson and Park Counties. Bring us your manometer reading and last test result.",
      },
      {
        q: "How fast can you come out?",
        a: "For a non-functioning system we aim to schedule within the same week, often sooner. A dead fan means your home is unprotected, so we treat it as a priority.",
      },
    ],
    relatedLocations: ["morrison-co", "conifer-co", "genesee-co"],
    relatedBlogSlugs: ["does-radon-mitigation-work", "how-long-does-radon-mitigation-take", "how-to-read-radon-test-results"],
  },
  {
    slug: "post-mitigation-testing",
    title: "Post-Mitigation Radon Testing",
    shortTitle: "Post-Mitigation Testing",
    icon: "ClipboardCheck",
    tagline: "Prove it worked.",
    excerpt:
      "Independent follow-up testing to confirm your mitigation system brought radon below action level — required for real estate and recommended for every install.",
    metaTitle: "Post-Mitigation Radon Testing Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Post-mitigation radon testing to confirm your system works. Independent follow-up tests for Jefferson & Park County homes and real estate closings. Free estimates.",
    intro:
      "A radon system is only as good as the number it produces. Post-mitigation testing confirms your new system actually brought your radon level down — and it's the proof you need for real estate transactions, warranty validation, and your own peace of mind. We recommend every installation be followed by a verification test.",
    sections: [
      {
        heading: "When to test after installation",
        body: "We recommend waiting at least 24 hours after the system is running so conditions stabilize, then running a short-term test of 2 to 7 days. For real estate closings, this post-install test is often a contingency requirement, and we provide a signed written report suitable for the transaction file.",
      },
      {
        heading: "Independent verification",
        body: "For maximum credibility — especially in a sale — we can arrange a post-mitigation test independent of the installation, so the homeowner, buyer, and agent all have confidence in the number. We place the device, manage closed-house conditions, and deliver a clear report.",
      },
      {
        heading: "What if the level didn't drop enough?",
        body: "It's rare with a properly designed SSD system, but if a follow-up test is still elevated, we don't walk away. We diagnose the suction, check for foundation leaks, and adjust the system — often adding a second suction point — until your level is below the action level. Our work isn't done until your number is down.",
      },
      {
        heading: "Ongoing verification",
        body: "Radon levels can change over time as soil shifts and fans age. We recommend re-testing every two years, and we offer a simple reminder program so it doesn't slip. A quick manometer check twice a year and a short-term test every couple of years keeps your home protected for the long haul.",
      },
    ],
    faqs: [
      {
        q: "How soon after installation should I test?",
        a: "Wait at least 24 hours for the system to stabilize, then run a 2 to 7 day short-term test. We'll coordinate timing around your closing date if needed.",
      },
      {
        q: "Is post-mitigation testing required for a home sale?",
        a: "It's often a contingency in the purchase contract. We provide a signed written report with your post-install reading that satisfies most transaction requirements.",
      },
      {
        q: "What if my level is still high after the system runs?",
        a: "We diagnose and adjust — sometimes adding a second suction point — until your level is below the action level. Our work isn't done until your number is down.",
      },
    ],
    relatedLocations: ["evergreen-co", "morrison-co", "aspen-park-co"],
    relatedBlogSlugs: ["how-to-read-radon-test-results", "does-radon-mitigation-work", "what-to-do-after-high-radon-test"],
  },
  {
    slug: "new-construction-radon-prevention",
    title: "New Construction Radon Prevention",
    shortTitle: "New Construction Radon Prevention",
    icon: "Hammer",
    tagline: "Build it out from day one.",
    excerpt:
      "Passive radon systems and active-ready rough-ins for new foothills homes — far cheaper to install during construction than to retrofit later.",
    metaTitle: "New Construction Radon Prevention Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Passive radon systems & active-ready rough-ins for new homes in Jefferson & Park County. Install during construction and save thousands. Free estimates.",
    intro:
      "If you're building a new home in the foothills, installing radon-resistant construction features during the build is dramatically cheaper than retrofitting a system later — and in a Zone 1 state like Colorado, it's one of the smartest investments you can make. Foothills Radon Testing and Mitigation works with builders and homeowners to install passive and active-ready radon systems from the ground up.",
    sections: [
      {
        heading: "What radon-resistant construction includes",
        body: "A passive radon system starts beneath the slab: a layer of gas-permeable aggregate, a soil gas collector mat or pipe grid, and a vertical PVC pipe routed up through the house and vented above the roofline. We seal foundation cracks and openings, and the whole assembly works by natural stack effect — no fan required unless a later test shows it's needed.",
      },
      {
        heading: "Active-ready rough-in",
        body: "We design every passive system to be 'active-ready' — meaning if a post-occupancy test comes back elevated, an electrician can drop a fan into the pipe run and activate the system in a few hours, with no concrete cutting and no interior disruption. This is the single highest-value radon feature you can build into a new foothills home.",
      },
      {
        heading: "Why every new foothills home needs this",
        body: "The entire state of Colorado is EPA Radon Zone 1, and foothills homes on granite geology test among the highest in the state. Building a passive system costs a fraction of a retrofit, and it protects your family from day one. Many lenders and buyers now expect radon-resistant features in new construction.",
      },
      {
        heading: "Working with your builder",
        body: "We coordinate with your general contractor or foundation crew, provide the design and materials, and inspect the rough-in before the slab is poured. We serve new builds throughout Jefferson and Park Counties, from custom homes in Evergreen and Conifer to new subdivisions along the 285 corridor.",
      },
    ],
    faqs: [
      {
        q: "How much does a passive radon system cost during construction?",
        a: "A passive system installed during the build typically costs a fraction of a retrofit — often $400 to $1,000 depending on the home. It's one of the highest-value features you can add to a new foothills home.",
      },
      {
        q: "Does a passive system need a fan?",
        a: "Not always. A passive system uses natural stack effect to vent soil gas. We make it 'active-ready' so a fan can be added later if a test shows elevated radon — with no concrete cutting required.",
      },
      {
        q: "Can you work with my general contractor?",
        a: "Yes. We coordinate with your builder or foundation crew, provide the design and materials, and inspect the rough-in before the slab is poured.",
      },
    ],
    relatedLocations: ["conifer-co", "evergreen-co", "aspen-park-co"],
    relatedBlogSlugs: ["radon-new-construction-colorado", "foundation-types-radon-basement-crawlspace-slab", "colorado-radon-geology-granite-front-range"],
  },
  {
    slug: "real-estate-radon-services",
    title: "Real Estate Radon Services",
    shortTitle: "Real Estate Radon Services",
    icon: "Home",
    tagline: "Keep your closing on track.",
    excerpt:
      "Fast radon testing, mitigation, and post-install verification for buyers, sellers, and realtors — with written reports and transferable warranties.",
    metaTitle: "Real Estate Radon Services Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Fast radon testing & mitigation for Colorado real estate closings. Written reports, transferable warranties, quick scheduling for realtors. Free estimates.",
    intro:
      "Colorado law requires radon disclosure in real estate transactions, and radon is one of the most common inspection contingencies in foothills home sales. Foothills Radon Testing and Mitigation specializes in keeping closings on track with fast testing, rapid mitigation, written reports, and transferable warranties that give buyers confidence and sellers a clean disclosure.",
    sections: [
      {
        heading: "Colorado's radon disclosure law",
        body: "Colorado requires sellers to disclose known radon levels and any radon mitigation system in the property. For buyers, a radon test is a standard inspection contingency. A high reading doesn't kill a deal — a fast, professional mitigation system with a transferable warranty often satisfies the contingency and keeps the closing on schedule.",
      },
      {
        heading: "For buyers",
        body: "We run a 48-hour short-term continuous monitor test and deliver a signed written report with your pCi/L reading, usually within days of the inspection period opening. If the level is elevated, we provide a firm mitigation estimate so you can negotiate or proceed with confidence.",
      },
      {
        heading: "For sellers",
        body: "If a buyer's test comes back high, we can install a mitigation system before your closing date — often within a week — and provide a post-install test and written report for the transaction file. A documented, warranted system turns a radon problem into a selling point.",
      },
      {
        heading: "For realtors",
        body: "We're built for real estate timelines: fast scheduling, clear written reports, rapid mitigation, and transferable warranties your buyers can rely on. Many foothills agents send us every client. Visit our dedicated realtor partner page to learn how we support your transactions.",
      },
    ],
    faqs: [
      {
        q: "How fast can you test for a closing?",
        a: "We typically schedule a 48-hour short-term continuous monitor test within a few days of contact, with a signed written report delivered shortly after retrieval — well inside most inspection windows.",
      },
      {
        q: "Can you install mitigation before our closing date?",
        a: "Yes — we prioritize real estate timelines and can often complete a mitigation installation within a week of a high test, with a post-install report for the transaction file.",
      },
      {
        q: "Is the warranty transferable to the buyer?",
        a: "Yes. Our mitigation systems come with a transferable warranty, which is a strong selling point and gives buyers confidence in the work.",
      },
    ],
    relatedLocations: ["evergreen-co", "morrison-co", "conifer-co"],
    relatedBlogSlugs: ["colorado-radon-real-estate-disclosure-law", "how-to-read-radon-test-results", "what-to-do-after-high-radon-test"],
  },
  {
    slug: "commercial-radon-services",
    title: "Commercial Radon Services",
    shortTitle: "Commercial Radon Services",
    icon: "Building2",
    tagline: "Protect your tenants, your staff, and your liability.",
    excerpt:
      "Radon testing and mitigation for schools, offices, daycare centers, and commercial buildings across the foothills and Front Range.",
    metaTitle: "Commercial Radon Testing & Mitigation Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Commercial radon testing & mitigation for schools, offices & businesses in Jefferson & Park County. Protect occupants and limit liability. Free estimates.",
    intro:
      "Radon isn't just a residential issue. Schools, daycare centers, offices, and commercial buildings in the Colorado foothills sit on the same granite geology as homes — and employers and property owners have a duty to test and mitigate. Foothills Radon Testing and Mitigation provides commercial radon testing and mitigation scaled to your building and your occupancy.",
    sections: [
      {
        heading: "Who should test",
        body: "Schools, daycare and childcare facilities, office buildings, medical and dental offices, and any commercial space with ground-contact occupancy should test for radon. In a Zone 1 state like Colorado, elevated readings in commercial buildings are common, and testing is increasingly expected as part of facility due diligence.",
      },
      {
        heading: "Testing at commercial scale",
        body: "Commercial testing requires multiple devices placed per EPA and AARST protocols — typically one per 2,000 square feet of ground-contact area, with a minimum of two per room. We handle placement, retrieval, lab analysis, and a consolidated report with a clear recommendation and floor-plan mapping of results.",
      },
      {
        heading: "Commercial mitigation systems",
        body: "Commercial SSD systems are larger and more complex than residential, often requiring multiple suction points, higher-capacity fans, and integration with the building's HVAC and slab design. We design and install systems sized to your footprint, occupancy, and foundation type, with minimal disruption to operations.",
      },
      {
        heading: "Documentation and compliance",
        body: "We provide written reports, system documentation, and post-install verification suitable for facility records, insurance, and any regulatory or lease requirements. For schools and childcare facilities, we can align testing with state guidance and help you document compliance.",
      },
    ],
    faqs: [
      {
        q: "Do commercial buildings really have radon problems?",
        a: "Yes. Any ground-contact building in Colorado's Zone 1 can have elevated radon. Schools, daycares, and offices on slab or basement foundations should test — and many are now required to by facility policies or lease terms.",
      },
      {
        q: "How many test devices does a commercial building need?",
        a: "Per EPA/AARST protocols, typically one device per 2,000 square feet of ground-contact area, with a minimum of two per room. We handle placement, retrieval, and a consolidated report.",
      },
      {
        q: "Can you install a system without shutting down our business?",
        a: "In most cases yes. We schedule core drilling and fan installation around your occupancy, often in off-hours, and keep disruption to occupied spaces minimal.",
      },
    ],
    relatedLocations: ["evergreen-co", "idaho-springs-co", "conifer-co"],
    relatedBlogSlugs: ["radon-levels-colorado-foothills", "colorado-radon-geology-granite-front-range", "does-radon-mitigation-work"],
  },
];

export const serviceMap: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);
