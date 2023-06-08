import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
   BMT,
   human,
    BMTsite,
    RealEstate,
    Riziki,
    threejs,
    Italanta,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "FrontWeb Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack web developer",
      company_name: "Beyond my Tribe",
      icon: BMT,
      iconBg: "#383E56",
      date: "April 2023 - Present",
      points: [
        "Contributing to the development of the organization’s website.",
        "Integrating a payment system for their donation site.",
        "Implementing Google Analytics 4 to their website.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front web developer",
      company_name: "Italanta",
      icon: Italanta,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - April 2023",
      points: [
        "Contributing to an open source project in developing the company’s website.",
        "Collaborated with other developers in the team to create a well function website.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Harrison is a highly motivated and dedicated individual who consistently goes above and beyond to ensure the success of the projects he works on.",
      name: "Lawrence Adam",
      designation: "Executive director",
      company: "Beyond my Tribe",
      image: human,
    },
    {
      testimonial:
        "Having had the opportunity to collaborate with Harrison on multiple projects, I can confidently vouch for his exceptional skills and professionalism.",
      name: "Peter Mbui",
      designation: "Developer",
      company: "I&M Bank",
      image: human,
    },
  ];
  
  const projects = [
    {
      name: "Beyond my Tribe",
      description:
        "A website for Beyond my tribe organization.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: BMTsite,
      source_code_link: "https://www.beyondmytribe.org/",
    },
    {
      name: "Real Estate ",
      description:
        "A real estate website",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: RealEstate,
      source_code_link: "https://real-estate-app-krma.vercel.app/",
    },
    {
      name: "Riziki Job app",
      description:
        "A web application that allows freelancers to look for job opportunities while employers post jobs and hire freelancers",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Ruby on Rails",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Riziki,
      source_code_link: "https://imaginative-beignet-60f579.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };