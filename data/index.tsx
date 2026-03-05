import { BsPersonBoundingBox } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { MdReviews, MdWork } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { IconBrandGithub, IconBrandLinkedin, IconTerminal, IconBrandInstagram } from "@tabler/icons-react";


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

export const socialMedia = [
  {
    id: 1,
    icon: <IconBrandGithub/>,
    link: "https://github.com/Katlego-Moloi"
  },
  {
    id: 2,
    icon: <IconBrandLinkedin/>,
    link: "https://www.linkedin.com/in/tubatse-katlego-moloi/"
  },
  {
    id: 3,
    icon: <SlBadge/>,
    link: "https://www.credly.com/users/tubatse-katlego-moloi"
  },
  {
    id: 4,
    icon: <IconTerminal/>,
    link: "https://leetcode.com/u/user6473KO/"
  },
  {
    id: 5,
    icon: <IconBrandInstagram/>,
    link: "https://www.instagram.com/i.luv.bluee/"
  },
];