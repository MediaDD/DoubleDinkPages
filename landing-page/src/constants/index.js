import {
  doubledink,
  discordBlack,
  epvp,
} from "../assets";

export const navigation = [
  {
    id: "1",
    title: "Home",
    url: "#home",
  },
  {
    id: "2",
    title: "Featured",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Status",
    url: "#status",
  },
  {
    id: "5",
    title: "Open Forum",
    url: "https://www.forum.doubledink.cc",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Open Store",
    url: "https://www.store.doubledink.cc",
    onlyMobile: true,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Day",
    description: "Recieve a day pass to our brand new DoubleDink for Apex Legends",
    price: "3.00",
    features: [
      "Unique build for each user",
      "Completely Undetected",
      "Written by our team of experts",
    ],
  },
  {
    id: "1",
    title: "Week",
    description: "Recieve a week pass to our brand new DoubleDink for Apex Legends",
    price: "12.99",
    features: [
      "Unique build for each user",
      "Completely Undetected",
      "Written by our team of experts",
    ],
  },
  {
    id: "2",
    title: "Month",
    description: "Recieve a month pass to our brand new DoubleDink for Apex Legends",
    price: "45.00",
    features: [
      "Unique build for each user",
      "Completely Undetected",
      "Written by our team of experts",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "24/7 Support",
    text: "Get help at any given time with our fast & friendly support team.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: doubledink,
  },
  {
    id: "1",
    title: "Easy Setup",
    text: "Spend less time worrying if set everything correctly and more time dominating the game!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: doubledink,
    light: true,
  },
  {
    id: "2",
    title: "Top Tier Security",
    text: "Enjoy our top of the line security features, such as unique builds, built in spoofer and custom injection methods.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: doubledink,
  },
  {
    id: "3",
    title: "Refund Policy",
    text: "If we are unable to get your cheat working on your system, we will fully reimburse you for your purchase.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: doubledink,
    light: true,
  },
  {
    id: "4",
    title: "100% Self Coded",
    text: "Enjoy the confidence of knowing every product sold here is made here.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: doubledink,
  },
];

export const statuses = [
  {
    id: "0",
    title: "Online",
    background: "bg-green-500",
  },
  {
    id: "1",
    title: "Offline",
    background: "bg-red-500",
  },
  {
    id: "2",
    title: "Updating",
    background: "bg-orange-500",
  },
  {
    id: "3",
    title: "Coming Soon",
    background: "bg-blue-500",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "epvpers",
    iconUrl: epvp,
    url: "#",
  },
];
