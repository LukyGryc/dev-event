export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "React Summit 2025",
    image: "/images/event1.png",
    slug: "react-summit-2025",
    location: "Amsterdam, Netherlands",
    date: "June 12-13, 2025",
    time: "9:00 AM - 6:00 PM"
  },
  {
    title: "Next.js Conf 2025",
    image: "/images/event2.png",
    slug: "nextjs-conf-2025",
    location: "San Francisco, USA",
    date: "October 28-29, 2025",
    time: "9:00 AM - 5:00 PM"
  },
  {
    title: "DevWorld Hackathon",
    image: "/images/event3.png",
    slug: "devworld-hackathon-2025",
    location: "London, UK",
    date: "March 15-17, 2025",
    time: "48 Hours"
  },
  {
    title: "TypeScript Conference",
    image: "/images/event4.png",
    slug: "typescript-conference-2025",
    location: "Berlin, Germany",
    date: "May 8-9, 2025",
    time: "10:00 AM - 6:00 PM"
  },
  {
    title: "Web3 Builders Summit",
    image: "/images/event5.png",
    slug: "web3-builders-summit-2025",
    location: "Singapore",
    date: "July 20-22, 2025",
    time: "9:00 AM - 7:00 PM"
  },
  {
    title: "AI & ML Developers Meetup",
    image: "/images/event6.png",
    slug: "ai-ml-developers-meetup-2025",
    location: "New York, USA",
    date: "April 5, 2025",
    time: "6:00 PM - 9:00 PM"
  }
];
