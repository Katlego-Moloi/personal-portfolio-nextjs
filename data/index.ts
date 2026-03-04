export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
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
    img: "/b5.svg",
    spareImg: "/grid.svg",
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
      "Mr. Katlego Moloi has been an exemplary Career Ambassador from April to November 2024. Throughout his tenure, Katlego has been instrumental in helping organise events, present Career Services workshops, and maintain Career Hub (A multi-faceted interactive work readiness and job portal available to all UFS students). He is good at designing posters and data analysis and is able to present well. Katlego is a multiverse individual who has good customer service and is able to communicate with a diverse set of people. He can work in a team and individually and relates well with everyone.",
    name: "Mpho Thito",
    title: "Student Officeer (Line Manager)",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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