export interface Review {
  name: string;
  town: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

// Real client reviews for our partner radon contractors
export const reviews: Review[] = [
  {
    name: "Leslee M.",
    town: "Pine, CO",
    rating: 5,
    date: "March 2026",
    service: "Radon Mitigation",
    text: "The technician was very friendly, efficient, and professional. Our mitigation system was installed in about 4 hours. The system looked clean on the inside and outside. We retested our radon level after installation and it was significantly lower. Highly recommend!",
  },
  {
    name: "Elliot H.",
    town: "Conifer, CO",
    rating: 5,
    date: "February 2026",
    service: "Radon Mitigation & Testing",
    text: "After getting quotes from multiple places, we're so glad we used Foothills Radon to connect us with our technician. He was extremely friendly and helpful, willing to explain everything and worked with us in phases to make it affordable.",
  },
  {
    name: "Eric R.",
    town: "Evergreen, CO",
    rating: 5,
    date: "January 2026",
    service: "Radon Fan Replacement",
    text: "They installed a new fan into my passive radon system that wasn't working and turned it into an active system. Almost immediately our radon levels dropped to less than 1 pCi/L and have stayed there ever since. Very professional and completed quickly.",
  },
  {
    name: "Jamie B.",
    town: "Bailey, CO",
    rating: 5,
    date: "December 2025",
    service: "Radon Testing & Mitigation",
    text: "We have owned our house for 15 years but didn't realize we needed to retest. The technician was super informative and really walked us through the process. Professional, punctual, and precise — got the job done quickly!",
  },
  {
    name: "Bret R.",
    town: "Morrison, CO",
    rating: 5,
    date: "November 2025",
    service: "Radon Mitigation",
    text: "Promptly performed an initial test and developed a cost-effective solution. Installation was on time and within budget with outstanding attention to detail. Post-installation test results exceeded our expectations!",
  },
];

export const reviewStats = {
  average: 4.9,
  count: 150,
  platform: "Google Reviews",
};
