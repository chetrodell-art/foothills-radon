export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  author: string;
  excerpt: string;
  heroImage?: string;
  sections: { heading: string; body: string }[];
  faqs?: { q: string; a: string }[];
  relatedServiceSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "radon-levels-colorado-foothills",
    title: "Radon Levels in the Colorado Foothills: What the Data Really Says",
    metaTitle: "Radon Levels in the Colorado Foothills | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Why Jefferson & Park County foothills homes test high for radon. Real data on Colorado radon levels, geology, and what it means for your home. Read more.",
    date: "2026-03-12",
    author: "Foothills Radon Testing and Mitigation",
    excerpt:
      "Colorado ranks in the top 10 states for radon, and the foothills test on the high end. Here's what the data says about your home along the 285 corridor.",
    sections: [
      {
        heading: "Colorado's radon problem in numbers",
        body: "Colorado sits firmly in the top 10 states for radon levels nationwide. The average Colorado home tests at 6.4 pCi/L — nearly five times the national average of 1.3 pCi/L. Roughly half of all Colorado homes come in above the EPA action level of 4.0 pCi/L, and the entire state is classified as EPA Radon Zone 1, the highest risk category. These aren't outliers; they're the norm.",
      },
      {
        heading: "Why the foothills test even higher",
        body: "The Front Range and foothills sit on the Pikes Peak Batholith — a massive granite formation rich in uranium-bearing minerals. As uranium decays underground, it releases radon gas that travels through fractured rock and soil into homes. Jefferson County and Park County foothills homes, built directly on this granite at high elevations, tend to test on the upper end of the state range. Towns like Evergreen, Conifer, Pine, and Bailey consistently show elevated readings.",
      },
      {
        heading: "What elevation has to do with it",
        body: "Elevation doesn't create radon, but it amplifies the conditions that let it enter homes. At 7,000 to 8,000+ feet, foothills homes sit close to fractured bedrock with thin soil cover. The stack effect — warm indoor air rising and pulling soil gas up through the foundation — is stronger in cold mountain climates. Combined with basement foundations common in the area, the result is a high radon potential that's geology, not luck.",
      },
      {
        heading: "What this means for your home",
        body: "If you live anywhere along the HWY 285 corridor, testing is the only way to know your level — radon is invisible, odorless, and tasteless. A short-term test takes a few days and gives you a defensible number. If your reading is above 4.0 pCi/L, the EPA recommends mitigation; many professionals recommend it above 2.0 pCi/L. The good news: a properly designed sub-slab depressurization system typically brings levels well below 2.0 pCi/L, and most installations complete in a single day.",
      },
      {
        heading: "The bottom line",
        body: "The foothills' high radon levels aren't a fluke — they're a geological reality. But they're also a solvable problem. Test your home, understand your number, and if it's high, mitigate. Foothills Radon Testing and Mitigation has installed hundreds of systems across Jefferson and Park Counties, and our follow-up tests consistently show dramatic reductions. Your home can be safe; the first step is knowing your number.",
      },
    ],
    faqs: [
      {
        q: "What is the average radon level in Colorado?",
        a: "The average Colorado home tests at 6.4 pCi/L, nearly five times the national average of 1.3 pCi/L. About half of Colorado homes test above the EPA action level of 4.0 pCi/L.",
      },
      {
        q: "Why do foothills homes have higher radon?",
        a: "The foothills sit on granite and uranium-bearing rock that releases radon as it decays. High elevation, thin soil, and basement foundations let that gas enter homes easily.",
      },
      {
        q: "What radon level should concern me?",
        a: "The EPA action level is 4.0 pCi/L. Many professionals recommend mitigation above 2.0 pCi/L because there is no truly safe level of radon exposure.",
      },
    ],
    relatedServiceSlugs: ["radon-testing", "radon-mitigation"],
  },
  {
    slug: "radon-mitigation-cost-colorado",
    title: "What Does Radon Mitigation Cost in Colorado? A Honest Breakdown",
    metaTitle: "Radon Mitigation Cost in Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "How much does radon mitigation cost in Colorado? A straightforward breakdown of Front Range pricing, what drives cost, and what's included. Read more.",
    date: "2026-03-05",
    author: "Foothills Radon Testing and Mitigation",
    excerpt:
      "Radon mitigation on the Front Range typically runs $1,500–$3,500. Here's an honest breakdown of what drives the price and what you should get for it.",
    sections: [
      {
        heading: "The short answer",
        body: "On the Front Range and in the foothills, a radon mitigation system typically costs between $1,500 and $3,500. The range reflects your foundation type, the fan required, pipe routing complexity, and whether crawl space encapsulation is needed. At Foothills Radon Testing and Mitigation, we give you a firm written estimate before any work begins — no surprise charges.",
      },
      {
        heading: "What drives the cost",
        body: "The biggest factor is your foundation. A simple basement with a single suction point is the most straightforward and least expensive. Homes with crawl spaces often need encapsulation and sub-membrane depressurization, which adds material and labor. Combination foundations (basement plus crawl space) require more design and piping. Fan selection matters too — larger or more challenging soil conditions may require a higher-capacity fan. Finally, pipe routing through finished spaces or around architectural features can add labor.",
      },
      {
        heading: "What's included in a quality system",
        body: "A properly installed system includes a core hole through the slab, a suction point, sealed PVC piping routed to an exterior fan, venting above the roofline, a manometer so you can verify operation, electrical connection for the fan, and a written warranty. You should also receive a clear explanation of how the system works and a recommendation for post-installation testing. If any of these are missing, ask why.",
      },
      {
        heading: "What's not included (and shouldn't be)",
        body: "A fair mitigation quote shouldn't hide fees. Electrical work for the fan is sometimes handled by an electrician rather than the mitigator; we'll tell you upfront if that's the case and what it costs. Post-installation testing is a separate, small cost. Crawl space encapsulation, if needed, is scoped separately. The key is transparency — you should know the total before we start.",
      },
      {
        heading: "Is it worth it?",
        body: "Radon is the second leading cause of lung cancer in the United States, behind smoking. A mitigation system is a one-time investment that protects your family for decades, runs quietly on a few dollars of electricity a month, and adds a documented safety feature to your home. For most foothills homeowners, the cost is a small price for clean indoor air — and it's far cheaper than the alternative.",
      },
    ],
    faqs: [
      {
        q: "How much does radon mitigation cost in Colorado?",
        a: "Typically $1,500 to $3,500 on the Front Range, depending on foundation type, fan requirements, and pipe routing. We provide a firm written estimate before any work begins.",
      },
      {
        q: "Does homeowners insurance cover radon mitigation?",
        a: "Generally no — radon mitigation is considered a home improvement, not a covered repair. However, it's an investment that adds value and safety to your home.",
      },
      {
        q: "Is a more expensive system better?",
        a: "Not necessarily. A well-designed system sized to your home and soil is what matters. We size the fan and suction points to your specific conditions — you pay for what you need, not more.",
      },
    ],
    relatedServiceSlugs: ["radon-mitigation", "crawl-space-encapsulation"],
  },
  {
    slug: "colorado-radon-geology-granite-front-range",
    title: "Colorado's Radon Geology: Why the Front Range Is Built on a Gas Source",
    metaTitle: "Colorado Radon Geology & Granite | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Why does Colorado have high radon? The geology of the Front Range — granite, uranium, and fractured rock — explained in plain English. Read more.",
    date: "2026-02-24",
    author: "Foothills Radon Testing and Mitigation",
    heroImage:
      "https://vibe.filesafe.space/1787162816986577987/assets/56dd78fc-bf68-470b-8dd4-83dba115be71.png",
    excerpt:
      "The Front Range's granite and uranium-bearing rock are the geologic engine behind Colorado's radon problem. Here's the plain-English geology.",
    sections: [
      {
        heading: "Radon starts with uranium",
        body: "Radon is a radioactive gas that comes from the natural decay of uranium found in soil and rock. Uranium is present in trace amounts all over the earth, but some rocks contain far more than others. When uranium decays, it produces radium, and when radium decays, it releases radon gas. That gas then moves up through soil and fractured rock and can enter homes through foundation cracks and openings.",
      },
      {
        heading: "The Pikes Peak Batholith",
        body: "Much of the Colorado Front Range and foothills sits on the Pikes Peak Batholith — a vast body of granite that formed over a billion years ago. This granite is naturally enriched in uranium compared to most rocks. The same geology that makes the foothills visually stunning — exposed granite outcrops, dramatic rock faces, and rugged terrain — is exactly what makes it a radon hotspot.",
      },
      {
        heading: "Fractured rock and soil gas",
        body: "Granite itself is fairly impermeable, but the foothills' rock is heavily fractured — cracked by tectonic forces, weathering, and freeze-thaw cycles over millennia. These fractures create pathways for radon-bearing soil gas to rise from depth. In areas with thin soil cover, which is common at high elevations, that gas reaches home foundations quickly and easily.",
      },
      {
        heading: "Why elevation matters",
        body: "At 7,000 to 8,000+ feet, foothills homes sit close to the bedrock with less soil to filter and slow the gas. The cold mountain climate also strengthens the stack effect — warm indoor air rising creates negative pressure at the foundation, actively pulling soil gas (and radon) into the home. Basements, common in the foothills, put living space closest to the source.",
      },
      {
        heading: "What this means practically",
        body: "None of this is a reason to fear living in the foothills — it's a reason to test. The geology isn't going to change, but a properly installed mitigation system makes your indoor air safe regardless of what's beneath your home. Understanding the geology helps explain why every foothills home should be tested, and why a well-designed system is so effective at interrupting the gas pathway.",
      },
    ],
    faqs: [
      {
        q: "Why does Colorado have so much radon?",
        a: "Colorado's Front Range sits on uranium-bearing granite, especially the Pikes Peak Batholith. As uranium decays, it releases radon gas that enters homes through foundations.",
      },
      {
        q: "Does the granite in my yard mean I have radon?",
        a: "It means you have high radon potential. The only way to know your actual level is to test — radon varies home to home even in the same neighborhood.",
      },
      {
        q: "Can the geology change over time?",
        a: "Not on a human timescale. The uranium-bearing rock beneath the foothills has been there for over a billion years. What you can change is how your home handles the gas — that's what mitigation does.",
      },
    ],
    relatedServiceSlugs: ["radon-testing", "radon-mitigation", "new-construction-radon-prevention"],
  },
  {
    slug: "colorado-radon-real-estate-disclosure-law",
    title: "Colorado Radon Disclosure Laws: What Homeowners, Buyers, Sellers & Realtors Need to Know",
    metaTitle: "Colorado Radon Disclosure Laws for Real Estate | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Colorado radon disclosure laws explained: what sellers must disclose, what buyers should request, how realtors stay compliant, and how to keep closings on track. Read more.",
    date: "2026-02-18",
    author: "Foothills Radon Testing and Mitigation",
    excerpt:
      "The definitive guide to Colorado's radon disclosure requirements — what the law requires for sellers, buyers, and realtors, transaction timelines, and how to keep your closing on track.",
    sections: [
      {
        heading: "What Colorado law actually requires",
        body: "Colorado law requires sellers to disclose known radon test results and the presence of any radon mitigation system in the property. This is part of the standard seller's property disclosure form. The key word is 'known' — if you've tested your home and have a result, or if a mitigation system is installed, you must share that information with prospective buyers. You are not required to test if you haven't, but you must be honest about what you do know.",
      },
      {
        heading: "The source: Colorado's radon disclosure statute",
        body: "Colorado's disclosure requirement stems from the state's real estate disclosure framework, which classifies radon as an environmental hazard that sellers must disclose if known. Unlike some states, Colorado does not mandate radon testing as a condition of sale — but once a seller has knowledge of a radon level or system, nondisclosure can create legal liability. This is why most foothills agents treat radon testing as a standard, expected part of the inspection period even though the law doesn't force it.",
      },
      {
        heading: "The transaction timeline",
        body: "A typical radon contingency runs like this: the buyer orders a 48-hour short-term continuous monitor test during the inspection period. If the result is above 4.0 pCi/L, the buyer can request mitigation as a condition of the sale. The seller then has a window — often 5 to 10 days — to have a system installed and a post-install test run before the closing date. In a Zone 1 state where the average home tests at 6.4 pCi/L, radon testing is a standard part of most foothills inspection periods. We compress this timeline aggressively, often completing testing, mitigation, and post-install verification within the contingency window.",
      },
      {
        heading: "What sellers need to do",
        body: "If you've ever tested your home for radon, disclose the results — even if they were low. If a mitigation system is installed, disclose it, including any warranty information that may transfer to the buyer. A documented, warranted mitigation system is a selling point: it shows a known foothills issue has been professionally addressed. If you've never tested, you can honestly state that, though many buyers will request a test during their inspection period. Consider pre-listing testing so you can disclose with confidence or address any issue proactively rather than under a closing deadline.",
      },
      {
        heading: "What buyers should request",
        body: "As a buyer in a Zone 1 state like Colorado, you have the right to request a radon test during your inspection period — and you should. A 48-hour short-term continuous monitor test gives you a defensible number. Don't rely on the seller's prior results, since radon levels can change over time and with home modifications. If the result is above 4.0 pCi/L, you can negotiate mitigation as part of the sale. A properly installed, warranted system usually satisfies the contingency and lets the closing proceed.",
      },
      {
        heading: "What realtors need to know",
        body: "Realtors play a key role in ensuring disclosure compliance and managing radon contingencies. Ensure sellers complete the disclosure accurately, advise buyers to request a radon test during inspection, and work with a mitigation company that understands real estate timelines. A high radon reading doesn't have to derail a sale — a fast, professional mitigation system with a transferable warranty usually satisfies the contingency and keeps the closing on schedule. Many foothills agents build radon into their standard inspection process and partner with a reliable mitigator. Visit our realtor partner page to learn more.",
      },
      {
        heading: "How a mitigation system affects disclosure",
        body: "If a mitigation system is installed — whether before listing or as a result of a buyer's contingency — it must be disclosed, along with any post-install test results and warranty information. This is a positive disclosure: it tells the buyer the home's radon has been professionally addressed. Foothills Radon Testing and Mitigation provides the documentation — signed reports, system specs, and warranty details — that makes this disclosure straightforward and gives buyers confidence.",
      },
      {
        heading: "Keeping deals compliant and moving",
        body: "The disclosure law isn't a trap — it's a framework for honest transactions. Disclose what you know, test if you haven't, and address any elevated results professionally. Foothills Radon Testing and Mitigation supports every side of the transaction with fast testing, written reports, rapid mitigation, transferable warranties, and clear documentation. When everyone understands the rules and works with the right partners, radon becomes a manageable part of the sale, not a dealbreaker.",
      },
    ],
    faqs: [
      {
        q: "Is radon testing required to sell a home in Colorado?",
        a: "Testing isn't mandatory, but disclosure of known radon levels and mitigation systems is required. Most buyers request a test during the inspection period, and it's strongly recommended in Zone 1 Colorado.",
      },
      {
        q: "Do I have to disclose a mitigation system when selling?",
        a: "Yes. If a radon mitigation system is installed, it must be disclosed along with any warranty information. This is a positive disclosure that shows the home's radon has been professionally addressed.",
      },
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
    relatedServiceSlugs: ["real-estate-radon-services", "radon-testing", "radon-mitigation"],
  },
  {
    slug: "what-to-do-after-high-radon-test",
    title: "What to Do After a High Radon Test: A Step-by-Step Guide",
    metaTitle: "What to Do After a High Radon Test | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Got a high radon test result? Here's exactly what to do next — confirm, understand your options, and decide on mitigation. Plain-English guide. Read more.",
    date: "2026-02-10",
    author: "Foothills Radon Testing and Mitigation",
    excerpt:
      "A high radon test can be alarming, but it's a solvable problem. Here's a calm, step-by-step guide to what to do after an elevated radon reading.",
    sections: [
      {
        heading: "First, don't panic",
        body: "A high radon test is concerning, but it's not an emergency in the way a gas leak or fire is. Radon exposure is a long-term risk, not an acute one — it's years of exposure that matter, not days. You have time to understand your result, confirm it, and make a smart decision. Take a breath.",
      },
      {
        heading: "Confirm the result",
        body: "If your high reading came from a short-term test, consider a follow-up — especially a long-term test of 90+ days — to confirm your year-round exposure. Radon fluctuates with weather, seasons, and ventilation, so a single short-term reading is a snapshot, not the full picture. That said, if your short-term result is very high (well above 4.0 pCi/L), there's little reason to delay mitigation while you wait for a long-term test.",
      },
      {
        heading: "Understand your number",
        body: "The EPA action level is 4.0 pCi/L — above that, mitigation is strongly recommended. Many professionals, including us, recommend mitigation above 2.0 pCi/L because there's no truly safe level of radon, and radon is the second leading cause of lung cancer in the U.S. If you're a smoker or live with one, the risk is significantly higher, and action is even more urgent.",
      },
      {
        heading: "Get a professional assessment",
        body: "Contact a certified radon mitigator for an assessment. They'll look at your foundation type, your radon level, your home's construction, and the best mitigation approach. A reputable company will give you a firm written estimate, explain the system in plain English, and never pressure you. At Foothills Radon Testing and Mitigation, we tell you honestly whether you need to mitigate now or can monitor first.",
      },
      {
        heading: "Mitigate and verify",
        body: "If you decide to mitigate, a sub-slab depressurization system is the gold standard and typically completes in one day. After installation, run a post-mitigation test (wait at least 24 hours) to confirm your levels dropped. A properly designed system should bring radon well below 2.0 pCi/L. Then test every couple of years to make sure it stays there.",
      },
      {
        heading: "The bottom line",
        body: "A high radon test is a problem with a proven solution. Confirm your number, understand what it means, get a professional assessment, and mitigate if warranted. You don't have to live with elevated radon — and once mitigated, your home is safe for the long haul.",
      },
    ],
    faqs: [
      {
        q: "Is a high radon test an emergency?",
        a: "No. Radon is a long-term health risk, not an acute one. You have time to confirm the result and make a smart decision — but don't ignore it.",
      },
      {
        q: "Should I confirm a high short-term test?",
        a: "If your reading is very high (well above 4.0 pCi/L), there's little reason to delay mitigation. If it's borderline, a long-term test can confirm your year-round exposure before you decide.",
      },
      {
        q: "How low will mitigation bring my radon?",
        a: "A properly designed sub-slab depressurization system typically brings radon well below 2.0 pCi/L. We confirm every install with a post-mitigation test.",
      },
    ],
    relatedServiceSlugs: ["radon-mitigation", "post-mitigation-testing", "radon-testing"],
  },
  {
    slug: "foundation-types-radon-basement-crawlspace-slab",
    title: "Foundation Types and Radon: Basements, Crawl Spaces, and Slabs Compared",
    metaTitle: "Foundation Types & Radon Risk | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "How your home's foundation — basement, crawl space, or slab — affects radon entry and mitigation. What foothills homeowners need to know. Read more.",
    date: "2026-02-02",
    author: "Foothills Radon Testing and Mitigation",
    excerpt:
      "Your foundation type shapes both your radon risk and your mitigation approach. Here's how basements, crawl spaces, and slabs compare.",
    sections: [
      {
        heading: "Why foundation type matters",
        body: "Radon enters homes through the path of least resistance — cracks, joints, gaps, and porous materials where the house meets the soil. Your foundation type determines how much contact your home has with the ground and how easily soil gas can enter. It also determines how a mitigation system is designed. Understanding your foundation is the first step in understanding your radon risk.",
      },
      {
        heading: "Basements",
        body: "Full basements put the most living space in direct contact with the soil, and they're common in foothills homes. Radon enters through slab cracks, the cold joint where the floor meets the wall, and around penetrations. Basements are also where radon tends to concentrate, since the gas is heavier than air and settles low. The good news: basements are ideal candidates for sub-slab depressurization, which is highly effective at interrupting the gas pathway beneath the slab.",
      },
      {
        heading: "Crawl spaces",
        body: "Dirt or stone crawl spaces — common in older foothills homes — are essentially an open window into the earth beneath your home. Radon rises freely from the soil and enters the living space above through the floor. For these homes, encapsulation with a sealed vapor barrier plus sub-membrane depressurization (a fan pulling gas from beneath the barrier) is the gold standard. Concrete crawl spaces can sometimes be treated like a slab with sub-slab depressurization.",
      },
      {
        heading: "Slab-on-grade",
        body: "Slab foundations have less soil contact than basements but are still vulnerable. Radon enters through slab cracks, expansion joints, and around plumbing penetrations. Sub-slab depressurization works on slabs too, though the suction point layout may differ. Slab homes in the foothills absolutely should be tested — lower contact doesn't mean no risk, especially on uranium-bearing geology.",
      },
      {
        heading: "Combination foundations",
        body: "Many foothills homes, especially on sloped lots, have combination foundations — a basement under part of the house and a crawl space under another, or a walk-out basement with a slab addition. These require the most thoughtful mitigation design, often combining sub-slab and sub-membrane approaches. Foothills Radon Testing and Mitigation assesses each zone of your foundation and designs a system that addresses all of them.",
      },
      {
        heading: "The takeaway",
        body: "Every foundation type can have radon, and every foundation type can be mitigated. What changes is the approach. The most important step is the same regardless of your foundation: test your home, understand your number, and work with a mitigator who designs the system around your specific foundation, not a one-size-fits-all template.",
      },
    ],
    faqs: [
      {
        q: "Which foundation type has the most radon risk?",
        a: "Basements put the most living space in contact with soil and tend to concentrate radon, but dirt crawl spaces are also very vulnerable. Slabs have lower contact but aren't risk-free. Every type should be tested.",
      },
      {
        q: "Can a slab home have high radon?",
        a: "Yes. Slabs have less soil contact but radon still enters through cracks and joints. On Colorado's uranium-bearing geology, slab homes absolutely should be tested.",
      },
      {
        q: "My home has both a basement and a crawl space — how is it mitigated?",
        a: "Combination foundations need a tailored approach, often combining sub-slab depressurization for the basement and encapsulation with sub-membrane depressurization for the crawl space. We design for both zones.",
      },
    ],
    relatedServiceSlugs: ["crawl-space-encapsulation", "radon-mitigation", "new-construction-radon-prevention"],
  },
  {
    slug: "how-long-does-radon-mitigation-take",
    title: "How Long Does Radon Mitigation Take? From Test to Clean Air",
    metaTitle: "How Long Does Radon Mitigation Take | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "How long does radon mitigation take? From testing to installation to verified results — a clear timeline for foothills homeowners. Read more.",
    date: "2026-01-26",
    author: "Foothills Radon Testing and Mitigation",
    excerpt:
      "Most radon mitigation installs finish in one day. Here's the full timeline from first test to verified clean air, so you know what to expect.",
    sections: [
      {
        heading: "The short answer",
        body: "Most radon mitigation installations are complete in a single day. The broader timeline — from deciding to test to breathing verified clean air — is usually one to two weeks, depending on scheduling and whether you run a post-install test. Here's how it breaks down.",
      },
      {
        heading: "Step 1: Testing (2–7 days)",
        body: "A short-term continuous monitor test runs 48 hours to 7 days. For homeowners not under a deadline, a long-term test of 90+ days gives the most accurate picture. We place the device, you maintain closed-house conditions, we retrieve it, and you get a written report with your pCi/L reading.",
      },
      {
        heading: "Step 2: Assessment and estimate (1–2 days)",
        body: "Once you have a high result, we schedule an assessment — often we can do this quickly given our Pine base and the 285 corridor route. We inspect your foundation, discuss the best approach, and provide a firm written estimate. This step is usually just a day or two from your call.",
      },
      {
        heading: "Step 3: Installation (1 day, sometimes 2)",
        body: "On install day, we arrive in the morning, lay down floor protection, core the slab, install the suction point and piping, mount the fan, and seal penetrations. Most jobs are done by late afternoon. Crawl space encapsulation or complex combination foundations may extend to a second day, but the vast majority of single-foundation homes are one-day installs.",
      },
      {
        heading: "Step 4: Post-install verification (2–7 days)",
        body: "We recommend waiting at least 24 hours for the system to stabilize, then running a short-term test of 2 to 7 days to confirm your levels dropped. For real estate closings, this post-install test is often a contingency requirement, and we provide a signed written report. A properly designed system should bring radon well below 2.0 pCi/L.",
      },
      {
        heading: "Total timeline",
        body: "For a homeowner not under a deadline, the full process from first test to verified clean air is typically one to two weeks. For real estate transactions, we compress the timeline aggressively — often completing testing, mitigation, and post-install verification within the inspection and contingency windows. Whatever your timeline, we communicate clearly so you always know what's happening and when.",
      },
    ],
    faqs: [
      {
        q: "How long does the installation itself take?",
        a: "Most installations are complete in a single day. Crawl space encapsulation or complex combination foundations may require a second day, but the majority of homes are one-day installs.",
      },
      {
        q: "How soon after installation can I test?",
        a: "Wait at least 24 hours for the system to stabilize, then run a 2 to 7 day short-term test to confirm your levels dropped below the action level.",
      },
      {
        q: "Can you complete everything before my closing date?",
        a: "In most cases yes. We prioritize real estate timelines and can often compress testing, mitigation, and post-install verification into the inspection window.",
      },
    ],
    relatedServiceSlugs: ["radon-mitigation", "post-mitigation-testing", "real-estate-radon-services"],
  },
  {
    slug: "diy-vs-professional-radon-test",
    title: "DIY vs. Professional Radon Testing: Which Is Right for You?",
    metaTitle: "DIY vs Professional Radon Test | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Should you DIY your radon test or hire a professional? Pros, cons, and when each makes sense for Colorado foothills homeowners. Read more.",
    date: "2026-01-20",
    author: "Foothills Radon Testing and Mitigation",
    excerpt:
      "DIY radon test kits are cheap and useful, but professional testing has advantages — especially for real estate. Here's how to choose.",
    sections: [
      {
        heading: "The case for DIY testing",
        body: "DIY radon test kits — short-term charcoal canisters and long-term alpha-track devices — are inexpensive (often $15–$30) and available online or at hardware stores. For a homeowner who simply wants to know their number and isn't under a transaction deadline, a DIY kit is a reasonable first step. Follow the closed-house conditions instructions carefully, place the kit correctly, mail it to the lab, and you'll get a result.",
      },
      {
        heading: "Where DIY falls short",
        body: "DIY kits have limitations. Placement errors, failure to maintain closed-house conditions, and lab turnaround time can all affect results. More importantly, DIY results are not accepted for real estate transactions — those require a certified tester and a continuous monitor that produces a defensible, timestamped report. DIY also can't provide the immediate, hourly data that a continuous monitor offers, which helps identify unusual readings or tampering.",
      },
      {
        heading: "The case for professional testing",
        body: "A professional radon test uses an EPA-approved continuous monitor that records hourly readings, is placed correctly by a certified tester, and produces a signed written report suitable for transactions. The data is more robust, the placement is correct by default, and you get expert interpretation of what your number means. For real estate, professional testing isn't optional — it's required. For homeowners who want confidence in the result, it's the better choice.",
      },
      {
        heading: "When to choose which",
        body: "Choose DIY if you're a homeowner screening your own home, you're not in a transaction, and you're comfortable following placement instructions carefully. Choose professional testing if you're buying or selling a home, you want a defensible written report, or you simply want confidence that the test was done right. Many homeowners start with a DIY kit and, if the result is high, call us for a professional confirmation and mitigation estimate.",
      },
      {
        heading: "The bottom line",
        body: "Both approaches have a place. DIY kits are a cheap, accessible screening tool. Professional testing is the gold standard for accuracy, defensibility, and expert guidance. If your DIY result comes back high, don't wait — contact a certified mitigator for confirmation and a plan. The most important thing is that you test, however you do it.",
      },
    ],
    faqs: [
      {
        q: "Are DIY radon test kits accurate?",
        a: "They can be reasonably accurate if placed correctly and closed-house conditions are maintained. But placement errors and lab variability mean they're best as a screening tool, not a definitive measurement.",
      },
      {
        q: "Can I use a DIY kit for a real estate transaction?",
        a: "No. Real estate transactions require a certified tester and a continuous monitor that produces a defensible, timestamped report. DIY results aren't accepted.",
      },
      {
        q: "What should I do if my DIY test comes back high?",
        a: "Contact a certified radon mitigator for a professional assessment and estimate. You may also want a professional confirmation test, especially if the DIY result was borderline.",
      },
    ],
    relatedServiceSlugs: ["radon-testing", "real-estate-radon-services"],
  },
  {
    slug: "how-to-read-radon-test-results",
    title: "How to Read Radon Test Results: Understanding Your pCi/L Number",
    metaTitle: "How to Read Radon Test Results | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "What does your radon test result mean? A plain-English guide to pCi/L, the EPA action level, and what to do with your number. Read more.",
    date: "2026-01-14",
    author: "Foothills Radon Testing and Mitigation",
    excerpt:
      "Your radon test came back with a number — now what? Here's a plain-English guide to understanding pCi/L and what your result means for your home.",
    sections: [
      {
        heading: "What is pCi/L?",
        body: "Radon levels are measured in picocuries per liter, abbreviated pCi/L. A picocurie is a unit of radioactivity, and pCi/L tells you how much radon is present in a liter of air. It's the standard unit used by the EPA and radon professionals. The higher the number, the more radon is in your home's air and the greater the long-term health risk.",
      },
      {
        heading: "The EPA action level: 4.0 pCi/L",
        body: "The EPA has set 4.0 pCi/L as the action level — the point at which mitigation is strongly recommended. This isn't a hard safety threshold; it's the level at which the risk becomes significant enough that action is clearly warranted. It's also a pragmatic number, since reducing below 4.0 is achievable with standard mitigation in virtually any home.",
      },
      {
        heading: "Why many professionals recommend action above 2.0 pCi/L",
        body: "There is no truly safe level of radon exposure — even levels below 4.0 pCi/L carry some risk. Many radon professionals, including us, recommend considering mitigation above 2.0 pCi/L, especially for long-term exposure. The World Health Organization recommends action above 2.7 pCi/L. If your result is between 2.0 and 4.0, it's worth a conversation about whether to mitigate now or monitor with a long-term test.",
      },
      {
        heading: "Putting your number in context",
        body: "The average U.S. home tests at about 1.3 pCi/L. The average Colorado home tests at 6.4 pCi/L — nearly five times higher. If your result is, say, 8.0 or 12.0 pCi/L, you're not unusual for a foothills home, but you should mitigate. If your result is below 2.0, your home is in good shape — re-test every few years to make sure it stays there. If it's between 2.0 and 4.0, consider a long-term test to confirm your year-round exposure before deciding.",
      },
      {
        heading: "What to do with your number",
        body: "If your result is above 4.0 pCi/L, contact a certified mitigator for an estimate — mitigation is strongly recommended. If it's between 2.0 and 4.0, consider a long-term confirmation test and have a conversation with a professional. If it's below 2.0, you're in good shape; test again every two to five years and after any major renovation. Whatever your number, we're happy to explain what it means and help you decide on next steps — no pressure, just straight talk.",
      },
    ],
    faqs: [
      {
        q: "What is a safe radon level?",
        a: "There is no truly safe level of radon. The EPA action level is 4.0 pCi/L, but many professionals recommend mitigation above 2.0 pCi/L because even lower levels carry some risk.",
      },
      {
        q: "What does pCi/L mean?",
        a: "pCi/L stands for picocuries per liter, the standard unit for measuring radon in air. The higher the number, the more radon is present and the greater the long-term risk.",
      },
      {
        q: "My result is 3.0 pCi/L — should I mitigate?",
        a: "It's worth a conversation. Many professionals recommend mitigation above 2.0 pCi/L. A long-term test can confirm your year-round exposure before you decide. We're happy to help you weigh it.",
      },
    ],
    relatedServiceSlugs: ["radon-testing", "radon-mitigation", "post-mitigation-testing"],
  },
  {
    slug: "does-radon-mitigation-work",
    title: "Does Radon Mitigation Really Work? What the Data Shows",
    metaTitle: "Does Radon Mitigation Work? | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Does radon mitigation actually reduce radon levels? What the data shows, how SSD systems perform, and what to expect after install. Read more.",
    date: "2026-01-08",
    author: "Foothills Radon Testing and Mitigation",
    excerpt:
      "Skeptical that a fan and some pipe can fix your radon problem? Here's what the data — and our own post-install tests — actually show.",
    sections: [
      {
        heading: "The short answer: yes, it works",
        body: "Radon mitigation is one of the most reliable home remediation measures there is. A properly designed sub-slab depressurization system typically reduces radon levels by 90% or more, often bringing readings from well above the EPA action level down below 2.0 pCi/L. This isn't marketing — it's what post-installation testing consistently shows, including our own results across hundreds of foothills homes.",
      },
      {
        heading: "How we know it works",
        body: "Every reputable mitigation includes a post-installation test to verify performance. Across our installations in Jefferson and Park Counties, the vast majority of post-install tests come back below 2.0 pCi/L, often below 1.0 pCi/L, regardless of how high the original reading was. The EPA and independent studies confirm similar results nationwide. When a system is designed and installed correctly, it works.",
      },
      {
        heading: "What makes the difference between success and failure",
        body: "Mitigation works when it's done right. The key factors are: a properly located suction point based on the slab and soil conditions, the right fan size for the home, thorough sealing of cracks and penetrations, and correct pipe routing with minimal bends. When any of these are compromised — often by low-bid installers using a one-size-fits-all approach — performance suffers. That's why a knowledgeable, certified installer matters.",
      },
      {
        heading: "What if it doesn't work the first time?",
        body: "Occasionally a post-install test comes back higher than expected. This is rare with a well-designed system, but when it happens, a reputable mitigator doesn't walk away. We diagnose the suction, check for foundation leaks the system isn't capturing, and adjust — often adding a second suction point or upgrading the fan — until the post-install test confirms success. Our work isn't done until your number is down.",
      },
      {
        heading: "Long-term performance",
        body: "A mitigation system isn't a set-it-and-forget-it install. The fan runs continuously and typically lasts 5 to 10 years before replacement. We recommend checking the manometer (the pressure gauge) twice a year and re-testing every two years to confirm ongoing performance. With basic maintenance, a quality system protects your home for decades.",
      },
      {
        heading: "The bottom line",
        body: "Radon mitigation works — reliably, measurably, and durably. The data is clear, and our own post-install tests confirm it across hundreds of foothills homes. If your radon test is high, a properly installed system is the proven solution. The only question is whether your installer does it right, and that's where we come in.",
      },
    ],
    faqs: [
      {
        q: "How much does radon mitigation reduce radon levels?",
        a: "A properly designed sub-slab depressurization system typically reduces radon by 90% or more, often bringing readings from well above the action level down below 2.0 pCi/L.",
      },
      {
        q: "What if my radon is still high after mitigation?",
        a: "A reputable mitigator will diagnose and adjust — adding a suction point, upgrading the fan, or sealing additional openings — until the post-install test confirms success. Our work isn't done until your number is down.",
      },
      {
        q: "How long does a mitigation system keep working?",
        a: "With basic maintenance — checking the manometer twice a year and re-testing every two years — a quality system protects your home for decades. The fan typically lasts 5 to 10 years before replacement.",
      },
    ],
    relatedServiceSlugs: ["radon-mitigation", "radon-fan-replacement-repair", "post-mitigation-testing"],
  },
  {
    slug: "radon-new-construction-colorado",
    title: "Radon in New Construction Colorado: Why Every New Foothills Home Needs Protection",
    metaTitle: "Radon New Construction Colorado | Foothills Radon Testing and Mitigation | Colorado Foothills",
    metaDescription:
      "Building a new home in Colorado? Why radon-resistant construction is essential in Zone 1, what it includes, and how it saves you thousands. Read more.",
    date: "2026-01-02",
    author: "Foothills Radon Testing and Mitigation",
    excerpt:
      "Building a new foothills home? Installing radon protection during construction costs a fraction of a retrofit — and in Zone 1 Colorado, it's essential.",
    sections: [
      {
        heading: "Why new construction is a radon opportunity",
        body: "If you're building a new home in the Colorado foothills, you have a one-time opportunity to install radon protection for a fraction of what a retrofit costs. Once the slab is poured and the home is finished, installing a mitigation system means core-drilling concrete, routing pipe through finished space, and paying significantly more. During construction, the same protection can be built in for a few hundred to a thousand dollars.",
      },
      {
        heading: "What radon-resistant construction includes",
        body: "A passive radon system starts beneath the slab: a layer of gas-permeable aggregate, a soil gas collector mat or pipe grid, and a vertical PVC pipe routed up through the house and vented above the roofline. We seal foundation cracks and openings, and the system works by natural stack effect — warm air rising carries soil gas up and out, no fan required. The whole assembly is invisible once the home is finished.",
      },
      {
        heading: "Active-ready design",
        body: "We design every passive system to be 'active-ready' — meaning if a post-occupancy test comes back elevated, an electrician can drop a fan into the pipe run and activate the system in a few hours, with no concrete cutting and no interior disruption. This is the single highest-value radon feature you can build into a new foothills home. You get the protection of a passive system now and the option of full active mitigation later, cheaply.",
      },
      {
        heading: "Why every new foothills home needs this",
        body: "The entire state of Colorado is EPA Radon Zone 1, and foothills homes on granite geology test among the highest in the state. Even a brand-new home on a new slab can have elevated radon — the geology doesn't care how recently you built. Installing radon-resistant construction protects your family from day one and is increasingly expected by lenders and buyers. It's one of the smartest, cheapest investments you can make in a new home.",
      },
      {
        heading: "Working with your builder",
        body: "Foothills Radon Testing and Mitigation coordinates with your general contractor or foundation crew, provides the design and materials, and inspects the rough-in before the slab is poured. We serve new builds throughout Jefferson and Park Counties, from custom homes in Evergreen and Conifer to new subdivisions along the 285 corridor. If you're planning a build, talk to us early — ideally before the foundation work begins.",
      },
    ],
    faqs: [
      {
        q: "How much does radon-resistant construction cost during a build?",
        a: "A passive system installed during construction typically costs $400 to $1,000 depending on the home — a fraction of a retrofit, which can run $1,500 to $3,500.",
      },
      {
        q: "Does a passive system need a fan?",
        a: "Not unless a post-occupancy test shows elevated radon. We make every passive system 'active-ready' so a fan can be added later with no concrete cutting or disruption.",
      },
      {
        q: "Can a new home really have high radon?",
        a: "Yes. The geology beneath your new home doesn't care how recently it was built. In Zone 1 Colorado, even brand-new homes can test high — radon-resistant construction protects you from day one.",
      },
    ],
    relatedServiceSlugs: ["new-construction-radon-prevention", "radon-testing", "radon-mitigation"],
  },
];

export const blogMap: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((b) => [b.slug, b])
);
