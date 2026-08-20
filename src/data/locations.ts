export interface LocationInfo {
  slug: string;
  town: string;
  county: "Jefferson County" | "Park County" | "Clear Creek County";
  elevation: string;
  population: string;
  avgRadon: string;
  geo: { lat: number; lng: number };
  geography: string;
  homeStyles: string;
  radonContext: string;
  responseNote: string;
  realEstateNote: string;
  faqs: { q: string; a: string }[];
}

export const locations: LocationInfo[] = [
  {
    slug: "evergreen-co",
    town: "Evergreen",
    county: "Jefferson County",
    elevation: "7,220 ft",
    population: "~9,500",
    avgRadon: "7.8 pCi/L",
    geo: { lat: 39.6333, lng: -105.3172 },
    geography:
      "Evergreen sits in a mountain basin along Bear Creek, ringed by granite outcroppings and ponderosa pine at over 7,000 feet of elevation. The bedrock here is part of the Pikes Peak Batholith — a massive granite formation rich in uranium-bearing minerals that's the geologic engine behind the foothills' radon problem.",
    homeStyles:
      "Evergreen's housing stock ranges from 1960s–70s ranch homes and A-frame cabins to large custom mountain builds and newer subdivisions. Full basements are common, often walk-out, and many older homes have attached crawl spaces — a combination that makes radon entry easy and mitigation design critical.",
    radonContext:
      "Evergreen consistently tests on the upper end of the Colorado range. The elevation, granite bedrock, and prevalence of basement foundations mean many homes come in well above the EPA action level of 4.0 pCi/L. If you live in a basement home in Evergreen, testing is a must — and if your level is high, a sub-slab depressurization system usually brings it down dramatically.",
    responseNote:
      "Foothills Radon Testing and Mitigation serves Evergreen regularly, typically scheduling testing within a few days and mitigation within about a week. We're based nearby in Pine, so response times across the Evergreen area are fast.",
    realEstateNote:
      "Evergreen is a high-turnover market where radon contingencies are routine. We provide fast 48-hour tests and rapid mitigation with transferable warranties to keep your closing on schedule.",
    faqs: [
      {
        q: "Is radon really a problem in Evergreen specifically?",
        a: "Yes. Evergreen's granite bedrock and 7,000+ foot elevation put it squarely in Colorado's high-risk zone. Many Evergreen basement homes test above the EPA action level — testing is the only way to know your number.",
      },
      {
        q: "How fast can you get to Evergreen for a test?",
        a: "We're based in Pine, just down the 285 corridor, so we typically schedule Evergreen testing within a few days and mitigation within about a week.",
      },
      {
        q: "My Evergreen home has a walk-out basement — does that change things?",
        a: "Walk-out basements are common here and work well with sub-slab depressurization. We assess the slab, the walk-out wall, and any crawl space to design the right suction layout for your home.",
      },
    ],
  },
  {
    slug: "conifer-co",
    town: "Conifer",
    county: "Jefferson County",
    elevation: "8,277 ft",
    population: "~20,000",
    avgRadon: "8.6 pCi/L",
    geo: { lat: 39.5239, lng: -105.3028 },
    geography:
      "Conifer sits high along the US 285 corridor at over 8,000 feet, perched on the same granite and gneiss bedrock that defines the Front Range foothills. The area's steep terrain and exposed rock faces are visible reminders of the uranium-bearing geology beneath — the source of consistently high radon readings.",
    homeStyles:
      "Conifer is a mix of older mountain cabins, 1970s–90s ranches on acreage, and growing subdivisions of newer construction. Many homes have full or partial basements, and hillside builds frequently include walk-outs and crawl spaces that require tailored mitigation approaches.",
    radonContext:
      "At over 8,000 feet on granite bedrock, Conifer homes are among the most likely in the state to test high. The combination of elevation, porous fractured rock, and basement foundations means elevated radon is the norm, not the exception. If you haven't tested your Conifer home, you should — and if your reading is high, mitigation is straightforward and effective.",
    responseNote:
      "Conifer is a core part of our service area right along the 285 corridor. We schedule testing within a few days and most mitigation installs within a week.",
    realEstateNote:
      "With steady turnover and many relocation buyers, Conifer transactions often include radon contingencies. We deliver fast tests, written reports, and rapid mitigation to keep closings on track.",
    faqs: [
      {
        q: "Why is radon so high in Conifer?",
        a: "Conifer's elevation above 8,000 feet and its granite bedrock create ideal conditions for radon. Combined with the prevalence of basement foundations, many Conifer homes test well above the EPA action level.",
      },
      {
        q: "I'm building a new home in Conifer — should I add radon protection?",
        a: "Absolutely. We install passive, active-ready radon systems during construction for a fraction of a retrofit. In a Zone 1 area like Conifer, it's one of the smartest features you can build in.",
      },
      {
        q: "Do you service homes off the paved roads in Conifer?",
        a: "Yes. We routinely serve homes on dirt and forest service roads throughout the Conifer area. Just let us know your access situation when you call.",
      },
    ],
  },
  {
    slug: "pine-co",
    town: "Pine",
    county: "Jefferson County",
    elevation: "7,840 ft",
    population: "~3,500",
    avgRadon: "8.2 pCi/L",
    geo: { lat: 39.4458, lng: -105.3992 },
    geography:
      "Pine is our home base — a small community along North Turkey Creek at nearly 8,000 feet, surrounded by Pike National Forest and underlain by the same granite batholith that defines the foothills' radon risk. The steep, forested terrain and exposed granite are constant reminders of what's beneath every home here.",
    homeStyles:
      "Pine has a mix of older cabins and ranch homes, mid-century builds, and newer construction on larger acreage. Many homes sit on sloped lots with walk-out basements or combination foundations (basement plus crawl space), which require careful, customized mitigation design.",
    radonContext:
      "As a Pine-based company, we know this area intimately. The granite geology, high elevation, and prevalence of basement and combination foundations mean most Pine homes should be tested. We've installed hundreds of systems in our own community, and our follow-up tests consistently show dramatic reductions.",
    responseNote:
      "Pine is our home — we can often offer same-week or even next-day scheduling for testing and mitigation right here in town.",
    realEstateNote:
      "Pine's rural character means buyers often encounter radon for the first time during inspection. We provide fast testing and clear reports to help rural transactions move smoothly.",
    faqs: [
      {
        q: "Are you actually based in Pine?",
        a: "Yes — Foothills Radon Testing and Mitigation is locally owned and headquartered right here in Pine. We know the area, the geology, and the home styles because it's our community.",
      },
      {
        q: "How common is high radon in Pine?",
        a: "Very common. Pine's granite bedrock and high elevation put it firmly in Colorado's high-risk zone. Most Pine homes with basements should be tested, and many will need mitigation.",
      },
      {
        q: "Can you handle combination foundations (basement + crawl space)?",
        a: "Yes — combination foundations are common in Pine, and we design systems that address both the slab and the crawl space with appropriate suction and sealing.",
      },
    ],
  },
  {
    slug: "morrison-co",
    town: "Morrison",
    county: "Jefferson County",
    elevation: "5,770 ft",
    population: "~440",
    avgRadon: "6.1 pCi/L",
    geo: { lat: 39.6547, lng: -105.1939 },
    geography:
      "Morrison sits at the base of the foothills where the mountains meet the plains, framed by dramatic red rock formations and the same granite uplift that defines the Front Range. Though lower in elevation than Pine or Conifer, Morrison sits directly on the fractured bedrock transition zone where radon moves freely from soil to home.",
    homeStyles:
      "Morrison ranges from historic stone and frame homes in old town to larger ranch properties and newer builds on the surrounding hillsides. Foundations vary widely — from full basements in older homes to slab and crawl space combinations in newer construction.",
    radonContext:
      "Morrison's position at the foothills transition zone means homes here sit on fractured bedrock that readily transmits radon. While slightly lower in elevation than the high foothills, the geology is just as active. Testing is essential for both older homes with basements and newer builds with slab foundations.",
    responseNote:
      "Morrison is a short drive from our Pine base. We typically schedule testing within a few days and mitigation within about a week.",
    realEstateNote:
      "Morrison's mix of historic and new construction means radon conditions vary widely from home to home. We provide testing and clear reports that help buyers and sellers understand exactly what they're dealing with.",
    faqs: [
      {
        q: "Is radon a problem at Morrison's lower elevation?",
        a: "Yes. Elevation matters less than geology. Morrison sits on fractured foothills bedrock that transmits radon readily, so homes here can test just as high as those higher up.",
      },
      {
        q: "My Morrison home is older with a stone foundation — can it be mitigated?",
        a: "Yes. Older and stone foundations require careful sealing and suction design, but sub-slab depressurization works in virtually any foundation type. We'll assess and give you an honest plan.",
      },
      {
        q: "Do you serve the Morrison red rocks area?",
        a: "Yes, we serve all of Morrison and the surrounding area including the foothills neighborhoods near Red Rocks and Bear Creek.",
      },
    ],
  },
  {
    slug: "kittredge-co",
    town: "Kittredge",
    county: "Jefferson County",
    elevation: "6,660 ft",
    population: "~1,300",
    avgRadon: "7.4 pCi/L",
    geo: { lat: 39.6583, lng: -105.2978 },
    geography:
      "Kittredge is a small community tucked along Bear Creek between Evergreen and Morrison, surrounded by steep, forested slopes and granite outcrops. The narrow valley and exposed rock faces reflect the same uranium-bearing geology that drives high radon throughout the foothills.",
    homeStyles:
      "Kittredge is mostly older mountain homes — many built in the 1960s–80s — with a mix of crawl spaces, partial basements, and some slab construction. The sloped lots and creek proximity mean foundation types vary significantly even within the same neighborhood.",
    radonContext:
      "Kittredge's steep terrain and granite bedrock create high radon potential, and the prevalence of crawl spaces in older homes makes encapsulation and sub-membrane depressurization especially relevant here. If your Kittredge home has a dirt or stone crawl space, testing and encapsulation should be on your radar.",
    responseNote:
      "Kittredge is minutes from our Pine base. We offer fast scheduling for both testing and mitigation throughout the area.",
    realEstateNote:
      "Kittredge's older homes and varied foundations mean radon conditions differ greatly from house to house. We provide thorough testing and tailored mitigation recommendations for every property.",
    faqs: [
      {
        q: "My Kittredge home has a dirt crawl space — what should I do?",
        a: "Test first, and if your level is elevated, we recommend crawl space encapsulation paired with sub-membrane depressurization. This is one of the most effective radon reductions for older foothills homes.",
      },
      {
        q: "How fast can you come to Kittredge?",
        a: "Kittredge is very close to our Pine base, so we can often schedule testing within a few days and mitigation within about a week.",
      },
      {
        q: "Are older Kittredge homes harder to mitigate?",
        a: "Not harder, but they're different. Varied foundations and older construction require careful assessment, but sub-slab and sub-membrane systems work well in virtually any home here.",
      },
    ],
  },
  {
    slug: "indian-hills-co",
    town: "Indian Hills",
    county: "Jefferson County",
    elevation: "7,200 ft",
    population: "~1,400",
    avgRadon: "7.6 pCi/L",
    geo: { lat: 39.6497, lng: -105.2528 },
    geography:
      "Indian Hills sits in a forested nook above Parmalee Gulch and Mount Vernon Creek, surrounded by the granite ridges that define this stretch of the foothills. The community's wooded, sloped terrain and exposed rock are hallmarks of the uranium-bearing geology beneath.",
    homeStyles:
      "Indian Hills is predominantly older mountain homes and cabins on wooded lots, many with crawl spaces and partial basements suited to the sloped terrain. Newer construction is limited, so most homes here predate modern radon-resistant building practices.",
    radonContext:
      "The combination of granite geology, high elevation, and older homes with unsealed crawl spaces makes Indian Hills a high-risk area for radon. Many homes here have never been tested. We strongly recommend testing, and for homes with crawl spaces, encapsulation is often part of the solution.",
    responseNote:
      "Indian Hills is a short drive from Pine. We schedule testing within a few days and mitigation within about a week.",
    realEstateNote:
      "Indian Hills' older housing stock means buyers should always request a radon test. We provide fast testing and clear reports to support informed purchase decisions.",
    faqs: [
      {
        q: "Is radon common in Indian Hills?",
        a: "Yes. The granite geology and older homes with crawl spaces make Indian Hills a high-risk area. If your home has never been tested, it should be.",
      },
      {
        q: "Do many Indian Hills homes need crawl space encapsulation?",
        a: "A good number do. Older Indian Hills homes often have dirt or stone crawl spaces, and encapsulation with sub-membrane depressurization is a highly effective solution.",
      },
      {
        q: "How quickly can you schedule in Indian Hills?",
        a: "We're nearby in Pine and typically schedule Indian Hills testing within a few days, with mitigation within about a week.",
      },
    ],
  },
  {
    slug: "genesee-co",
    town: "Genesee",
    county: "Jefferson County",
    elevation: "7,540 ft",
    population: "~3,600",
    avgRadon: "7.9 pCi/L",
    geo: { lat: 39.7058, lng: -105.2414 },
    geography:
      "Genesee is a planned mountain community perched atop a granite ridge just off I-70, with sweeping views and heavily forested lots. The ridge-top setting sits directly on the Pikes Peak granite that underlies so much of the foothills' radon problem.",
    homeStyles:
      "Genesee is mostly larger custom homes built from the 1970s onward, many with full basements and walk-outs that take advantage of the mountain views. The newer construction here means some homes have radon-resistant features, but many do not.",
    radonContext:
      "Genesee's ridge-top granite setting and basement-heavy housing stock make it a high-radon area. While some newer homes were built with passive systems, many still test above the EPA action level. If you're not sure whether your Genesee home has radon protection, testing is the only way to know.",
    responseNote:
      "Genesee is easily accessible from our Pine base via the 285 and I-70 corridors. We schedule testing within a few days and mitigation within about a week.",
    realEstateNote:
      "Genesee's higher-end market means buyers expect thorough inspections. We provide fast, professional testing and warranted mitigation systems that protect transactions and property values.",
    faqs: [
      {
        q: "My Genesee home was built in the 2000s — could it still have high radon?",
        a: "Yes. Even newer homes can test high, especially if no active radon system was installed. A passive system, if present, may need a fan added. Testing tells you exactly where you stand.",
      },
      {
        q: "Does the ridge-top location affect radon?",
        a: "It can. Ridge-top homes on fractured granite can have strong soil gas flow. The geology matters more than the topography, and Genesee's granite is exactly the kind that produces high radon.",
      },
      {
        q: "How fast can you get to Genesee?",
        a: "We reach Genesee easily via the 285 and I-70 corridors, typically scheduling testing within a few days and mitigation within about a week.",
      },
    ],
  },
  {
    slug: "bailey-co",
    town: "Bailey",
    county: "Park County",
    elevation: "7,750 ft",
    population: "~8,700",
    avgRadon: "8.4 pCi/L",
    geo: { lat: 39.4042, lng: -105.4739 },
    geography:
      "Bailey sits along the South Platte River in Park County at the southern end of the HWY 285 corridor, surrounded by steep granite peaks and dense national forest. The same Pikes Peak granite that drives radon throughout the foothills extends well into Park County, making Bailey a high-risk area.",
    homeStyles:
      "Bailey is a mix of older cabins, modular and manufactured homes, and growing custom mountain builds on acreage. Foundations vary widely — from full basements to crawl spaces to slab — and many homes on sloped lots have combination foundations that need tailored mitigation.",
    radonContext:
      "Bailey's granite geology and rural mountain setting produce consistently high radon potential. Many Bailey homes have never been tested, and the mix of foundation types means mitigation approaches vary. We've installed numerous systems in the Bailey area with excellent results.",
    responseNote:
      "Bailey is a regular stop on our 285 corridor route. We schedule testing within a few days and mitigation within about a week, including homes on dirt and forest roads.",
    realEstateNote:
      "Bailey's rural market means many buyers are new to foothills living and unfamiliar with radon. We provide education, fast testing, and clear reports to help rural transactions proceed with confidence.",
    faqs: [
      {
        q: "Is radon a problem in Park County and Bailey specifically?",
        a: "Yes. Park County shares the same granite geology as the rest of the foothills, and Bailey homes regularly test above the EPA action level. Testing is strongly recommended.",
      },
      {
        q: "Do you service homes on dirt roads around Bailey?",
        a: "We do. Many Bailey homes are on acreage with dirt or forest road access. Just let us know your access situation when you schedule.",
      },
      {
        q: "My Bailey home has a crawl space and a basement — can you handle both?",
        a: "Yes. Combination foundations are common in Bailey, and we design systems that address both the basement slab and the crawl space appropriately.",
      },
    ],
  },
  {
    slug: "aspen-park-co",
    town: "Aspen Park",
    county: "Park County",
    elevation: "8,400 ft",
    population: "~1,500",
    avgRadon: "8.7 pCi/L",
    geo: { lat: 39.5283, lng: -105.4639 },
    geography:
      "Aspen Park is a high-elevation community near Conifer along the 285 corridor, sitting on the granite ridgeline that defines this stretch of the Front Range. At over 8,000 feet, the thin air and exposed rock underscore the uranium-bearing geology beneath every home.",
    homeStyles:
      "Aspen Park is primarily mountain homes on wooded lots — a mix of older cabins, 1980s–90s builds, and some newer construction. Basements and crawl spaces are both common, depending on the slope of the lot.",
    radonContext:
      "At over 8,000 feet on granite bedrock, Aspen Park shares the high radon risk of neighboring Conifer. The elevation and fractured rock make elevated readings common. Testing is essential, and mitigation is highly effective when properly designed.",
    responseNote:
      "Aspen Park is right along our 285 corridor route, minutes from Conifer. We schedule testing within a few days and mitigation within about a week.",
    realEstateNote:
      "Aspen Park transactions benefit from our fast testing and clear reports, helping buyers understand radon conditions before closing and sellers address any issues proactively.",
    faqs: [
      {
        q: "Is Aspen Park as high-risk as Conifer for radon?",
        a: "Yes. Aspen Park shares Conifer's granite geology and similar elevation, so radon risk is comparable. Testing is strongly recommended for all Aspen Park homes.",
      },
      {
        q: "Do newer Aspen Park homes need testing?",
        a: "Yes. Even newer homes can test high unless they were built with an active radon system. A passive system, if present, may need a fan. Testing is the only way to know.",
      },
      {
        q: "How quickly can you schedule in Aspen Park?",
        a: "Aspen Park is right on our 285 route. We typically schedule testing within a few days and mitigation within about a week.",
      },
    ],
  },
  {
    slug: "shawnee-co",
    town: "Shawnee",
    county: "Park County",
    elevation: "8,000 ft",
    population: "~200",
    avgRadon: "8.5 pCi/L",
    geo: { lat: 39.3961, lng: -105.5669 },
    geography:
      "Shawnee is a tiny community along the South Platte River in Park County, surrounded by steep granite peaks and national forest. The remote, high-elevation setting sits on the same uranium-bearing granite that drives radon throughout the 285 corridor.",
    homeStyles:
      "Shawnee is mostly older cabins and mountain homes on large acreage, with a mix of crawl spaces, partial basements, and slab foundations. The rural, off-the-beaten-path character means many homes have never been professionally tested for radon.",
    radonContext:
      "Shawnee's granite geology and high elevation make it a high-risk radon area, but its small population means few homes have been tested. If you live in Shawnee, testing is strongly recommended — and if your level is high, mitigation works just as well here as anywhere along the corridor.",
    responseNote:
      "Shawnee is further out the 285 corridor, but we serve it regularly. Scheduling may take a few extra days given the distance, but we're happy to make the trip.",
    realEstateNote:
      "Shawnee's rural properties often surprise buyers with radon findings. We provide testing and clear reports so remote transactions can proceed with full information.",
    faqs: [
      {
        q: "Do you really come all the way out to Shawnee?",
        a: "Yes. Shawnee is part of our Park County service area along the 285 corridor. Scheduling may take a few extra days given the distance, but we make the trip.",
      },
      {
        q: "Has radon been studied in a small town like Shawnee?",
        a: "Limited testing has been done given Shawnee's size, but the geology is identical to the rest of the corridor — high-risk. Testing your home is the only reliable way to know.",
      },
      {
        q: "Can you handle remote acreage properties in Shawnee?",
        a: "Yes. We routinely service homes on large acreage with dirt or forest road access throughout Park County. Just describe your access when you call.",
      },
    ],
  },
  {
    slug: "grant-co",
    town: "Grant",
    county: "Park County",
    elevation: "8,450 ft",
    population: "~1,000",
    avgRadon: "8.9 pCi/L",
    geo: { lat: 39.4714, lng: -105.6778 },
    geography:
      "Grant is a small community high on the South Platte River in Park County, near the foot of Kenosha Pass. At over 8,400 feet, it sits on exposed granite and metamorphic rock — the same uranium-bearing geology that defines the region's radon risk, intensified by the high elevation.",
    homeStyles:
      "Grant is predominantly older cabins, modest mountain homes, and some newer builds on acreage. Foundations are a mix of crawl spaces, partial basements, and slabs, with many homes predating radon-resistant construction.",
    radonContext:
      "Grant's high elevation and granite bedrock put it firmly in Colorado's high-risk radon zone. The small, rural population means many homes have never been tested. If you live in Grant, a radon test is a simple, affordable step that could protect your family's health.",
    responseNote:
      "Grant is at the far end of our 285 corridor service area. We serve it regularly, though scheduling may take a few extra days given the distance from Pine.",
    realEstateNote:
      "Grant's remote location and older homes mean radon is often a surprise to buyers. We provide testing and clear documentation to support informed rural transactions.",
    faqs: [
      {
        q: "Does Grant's very high elevation increase radon risk?",
        a: "Elevation itself doesn't cause radon, but Grant's granite bedrock does — and the high elevation means homes sit close to the fractured rock that releases it. Testing is strongly recommended.",
      },
      {
        q: "How far out do you travel for service?",
        a: "Grant is at the far end of our regular service area along the 285 corridor. We make the trip, though scheduling may take a few extra days.",
      },
      {
        q: "Are older cabins in Grant testable and mitigatable?",
        a: "Yes. Even older cabins with crawl spaces or partial basements can be tested and, if needed, mitigated with encapsulation or sub-slab depressurization adapted to the foundation.",
      },
    ],
  },
  {
    slug: "idledale-co",
    town: "Idledale",
    county: "Jefferson County",
    elevation: "6,560 ft",
    population: "~250",
    avgRadon: "7.2 pCi/L",
    geo: { lat: 39.6497, lng: -105.2694 },
    geography:
      "Idledale is a tiny community tucked along Bear Creek between Morrison and Kittredge, surrounded by steep, wooded slopes and granite outcrops. The narrow valley and exposed rock reflect the same uranium-bearing geology that drives high radon throughout the foothills.",
    homeStyles:
      "Idledale is almost entirely older mountain homes and cabins, many dating to the mid-20th century, with crawl spaces and partial basements suited to the steep terrain. The older construction means most homes predate any radon-resistant building practices.",
    radonContext:
      "Idledale's steep terrain, granite geology, and older homes with crawl spaces make it a high-risk area for radon. The small population means few homes have been tested. We strongly recommend testing, and crawl space encapsulation is often part of the solution here.",
    responseNote:
      "Idledale is just minutes from our Pine base via the 285 corridor. We can often schedule testing within a few days and mitigation within about a week.",
    realEstateNote:
      "Idledale's older, character-rich homes mean radon conditions vary widely. We provide thorough testing and tailored recommendations for every property.",
    faqs: [
      {
        q: "My Idledale home has an old crawl space — should I worry about radon?",
        a: "It's worth testing. Older Idledale homes with dirt or stone crawl spaces are common, and encapsulation with sub-membrane depressurization is a highly effective solution if your level is elevated.",
      },
      {
        q: "How fast can you get to Idledale?",
        a: "Idledale is very close to our Pine base. We typically schedule testing within a few days and mitigation within about a week.",
      },
      {
        q: "Are old cabins harder to mitigate?",
        a: "Not harder, but different. Older foundations need careful sealing and suction design, but radon systems work in virtually any home. We'll assess and give you an honest plan.",
      },
    ],
  },
  {
    slug: "idaho-springs-co",
    town: "Idaho Springs",
    county: "Clear Creek County",
    elevation: "7,540 ft",
    population: "~1,800",
    avgRadon: "8.1 pCi/L",
    geo: { lat: 39.7436, lng: -105.5117 },
    geography:
      "Idaho Springs sits in a steep canyon along Clear Creek at the heart of Colorado's historic mining district. The town is surrounded by the same granite and mineral-rich rock that drew miners here 150 years ago — rock that also happens to be the geologic source of the region's radon.",
    homeStyles:
      "Idaho Springs has a mix of historic mining-era homes, mid-century builds, and newer construction. Foundations range from old stone and basement homes to crawl spaces and slabs, with many older structures that predate modern building practices.",
    radonContext:
      "Idaho Springs' mining-district geology is rich in the uranium-bearing minerals that produce radon, and the high elevation means homes sit close to the fractured rock. Historic homes with older foundations are especially vulnerable. Testing is strongly recommended, and mitigation is highly effective.",
    responseNote:
      "Idaho Springs is along our extended service corridor via I-70 and the 285. We serve it regularly, with scheduling typically within a few days to a week.",
    realEstateNote:
      "Idaho Springs' historic homes and mining-district geology make radon a common inspection finding. We provide testing and warranted mitigation to keep transactions moving.",
    faqs: [
      {
        q: "Does Idaho Springs' mining history affect radon?",
        a: "Indirectly, yes. The same uranium-bearing minerals that drew miners to Idaho Springs are the source of radon. The geology that built the town's history also drives its radon risk.",
      },
      {
        q: "Can historic Idaho Springs homes be mitigated?",
        a: "Yes. Older stone and basement foundations require careful sealing and suction design, but sub-slab depressurization works in virtually any foundation. We'll assess and give you an honest plan.",
      },
      {
        q: "Do you serve Clear Creek County?",
        a: "Yes. Idaho Springs is part of our extended service area. We schedule testing within a few days to a week depending on our route.",
      },
    ],
  },
];

export const locationMap: Record<string, LocationInfo> = Object.fromEntries(
  locations.map((l) => [l.slug, l])
);
