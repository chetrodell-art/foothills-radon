export interface Review {
  name: string;
  town: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

export const reviews: Review[] = [
  {
    name: "Dana R.",
    town: "Conifer, CO",
    rating: 5,
    date: "March 2026",
    service: "Radon Mitigation",
    text: "Our Conifer home tested at 11.2 pCi/L — way above the EPA limit. All Phase Radon installed a sub-slab system in one day and our follow-up test came back at 0.6 pCi/L. They explained every step like a neighbor, not a salesman. Worth every penny.",
  },
  {
    name: "Mike T.",
    town: "Evergreen, CO",
    rating: 5,
    date: "February 2026",
    service: "Real Estate Radon Test",
    text: "We were selling our Evergreen house and the buyer's radon test came in high. All Phase had a mitigation system in before our closing date and provided a written report for the buyers. Our realtor said she'd never seen a smoother radon contingency.",
  },
  {
    name: "Sarah K.",
    town: "Bailey, CO",
    rating: 5,
    date: "January 2026",
    service: "Crawl Space Encapsulation",
    text: "Living in Bailey with a dirt crawlspace, I always worried about radon. They encapsulated the crawlspace and added a fan — my test dropped from 8.4 to under 1.0. Clean work, on time, and they hauled off every scrap.",
  },
  {
    name: "Jim P.",
    town: "Pine, CO",
    rating: 5,
    date: "December 2025",
    service: "Fan Replacement",
    text: "My old mitigation fan was rattling and clearly dying after nine years. All Phase swapped it for a quieter, more efficient unit in a couple hours. Same-day call back, fair price, no upsell.",
  },
  {
    name: "Lauren M.",
    town: "Morrison, CO",
    rating: 5,
    date: "November 2025",
    service: "Radon Testing",
    text: "I'm a realtor in Morrison and I now send every client to All Phase Radon. Fast scheduling, clear written reports, and they actually pick up the phone. The transferable warranty is a huge selling point for my buyers.",
  },
  {
    name: "Tom & Beth H.",
    town: "Idledale, CO",
    rating: 5,
    date: "October 2025",
    service: "Radon Mitigation",
    text: "Honest folks. They told us our 3.6 pCi/L reading was borderline and gave us the option to monitor before spending money on a system. We monitored, it climbed, and they installed. No pressure, just straight talk.",
  },
];

export const reviewStats = {
  average: 4.9,
  count: 187,
  platform: "Google",
};
