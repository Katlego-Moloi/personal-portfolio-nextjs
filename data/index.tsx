import { BsPersonBoundingBox } from "react-icons/bs";
import { MdReviews, MdWork } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";

export const navItems = [
  { name: "About", link: "#about", icon: <BsPersonBoundingBox />},
  { name: "Projects", link: "#projects", icon: <MdWork />},
  { name: "Testimonials", link: "#testimonials", icon: <MdReviews />},
  { name: "Contact", link: "#contact", icon: <GrContactInfo />},
];

export const gridItems = [
  {
    id: 1,
    title: "Driven by curiosity. Grounded in execution.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-shadow-sm text-shadow-accent",
    imgClassName: "w-full",
    titleClassName: "justify-end",
    img: "/images/background-collage.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Computer Science meets Business Thinking.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/illustrations/grid.svg",
    spareImg: "/illustrations/b4.svg",
  },

  {
    id: 5,
    title: "Building real-world systems while learning modern web frameworks.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/illustrations/b5.svg",
    spareImg: "/illustrations/grid.svg",
  },
  {
    id: 6,
    title: "Let’s create something impactful.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MoneyMart",
    des: "A simple and elegant one page website for financial service providers originally built using WebStudio but migrated to Next.js",
    img: "/images/projects/money-mart.webp",
    iconLists: ["icons/next.svg", "/icons/tail.svg", "/icons/ts.svg", "/icons/webst.svg", ],
    link: "https://www.moneymartloansandinvestments.co.za/",
  },
  {
    id: 2,
    title: "KovsieCash Web & Mobile app",
    des: "Final year software engineering project, a banking app for the university built using .net MVC and Android Studio",
    img: "/images/projects/kovsie-cash.webp",
    iconLists: ["/icons/csharp.svg", "/icons/sqlite.svg", "/icons/java.svg", "/icons/dotnet.svg", "/icons/android.svg"],
    link: "https://github.com/Katlego-Moloi/KovsieCash_WebApp",
  },
  {
    id: 3,
    title: "React + Vite Personal Portfolio",
    des: "My second personal portfolio website and introduction to React, Three.js and Tailwind.css",
    img: "/images/projects/jcmk.webp",
    iconLists: ["/icons/re.svg", "/icons/vite.svg", "/icons/ts.svg", "/icons/three.svg", "/icons/spring.svg"],
    link: "https://github.com/Katlego-Moloi/personal-portfolio-react",
  },
];

export const testimonials = [
    {
      quote:
        "Mr. Katlego Moloi has been an exemplary Career Ambassador from April to November 2024. Throughout his tenure, Katlego has been instrumental in helping organise events, present Career Services workshops, and maintain Career Hub (A multi-faceted interactive work readiness and job portal available to all UFS students).",
      name: "Mpho Thito",
      designation: "Student Officeer (Line Manager)",
      src: "/images/mpho.webp",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Ntombinkulu Khumalo",
      designation: "COO at MoneyMart",
      src: "/images/ntombi.webp",
    },
  ];

export const workExperience = [
  {
    id: 1,
    title: "IT Support Placement - UJ",
    desc: "Provided technical support by logging and resolving IT incidents, maintaining system access, and applying structured troubleshooting in a live enterprise environment.",
    className: "md:col-span-2 rounded-xl",
    thumbnail: "/images/uj.webp",
  },
  {
    id: 2,
    title: "Mobile App Dev - Tontrac",
    desc: "Completed CompTIA and Microsoft training while gaining practical experience in IT support, systems administration fundamentals, and professional service delivery.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/images/tontrac.webp",
  },
  {
    id: 3,
    title: "Career Ambassador - UFS Career Services",
    desc: "Supported student work-readiness through presentations, one-on-one guidance, and collaboration with student organisations to promote career development.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/images/ufs.webp",
  },
  {
    id: 4,
    title: "Team Member, Deputy President & Treasurer - Enactus UFSQ",
    desc: "Led and contributed to social entrepreneurship projects focused on community impact, gaining experience in leadership, project management, and financial oversight.",
    className: "md:col-span-2",
    thumbnail: "/images/enactusufsq.webp",
  },
];

export const microsoftCerts = [
  {
    id: "azure-ai",
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    badge:
      "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg?branch=main",
    // Use the specific badge image for AI-900
    badgeUrl:
      "https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/TubatseKatlegoMoloi-5390/7A1AC9123D6A5777?sharingId=2BD380D08A96A4A5",
  },
  {
    id: "m365",
    name: "Microsoft 365 Fundamentals",
    issuer: "Microsoft",
    badgeUrl:
      "https://images.credly.com/size/340x340/images/0c6d9839-f468-4adc-987d-9a9b4e1a2efa/image.png",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/TubatseKatlegoMoloi-5390/32E2E5AC0B9BCD35?sharingId=2BD380D08A96A4A5",
  },
];

export const credlyCerts = [
  {
    id: "e2d518f0-1b49-4254-99b2-f454ab55b67b",
    label: "Credly Badge 1",
  },
  {
    id: "c7cc2760-3261-470b-8739-d4e1a693f366",
    label: "Credly Badge 2",
  },
  {
    id: "89661990-df4f-444e-a29e-5d5d5813dba5",
    label: "Credly Badge 3",
  },
  {
    id: "edd5250f-eb13-4dbb-9867-3f1fb64f5b4e",
    label: "Credly Badge 4",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];