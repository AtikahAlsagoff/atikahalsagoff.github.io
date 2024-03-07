import {
    ocs,
    singaporepoly,
    hangman,
    redwine,
    wastewatchers,
    myclinic,
    github,
    linkedin,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];

  const socials = [
    {
      title: "github",
      link: "https://github.com/atikahalsagoff",
      icon: github,
      color: "#000000"
    },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/in/atikahalsagoff/",
      icon: linkedin,
      color: "#0072b1"
    },
  ]
  
  const experiences = [
    {
      title: "Project Engineering Intern",
      company_name: "One Click Solutions",
      icon: ocs,
      iconBg: "#383E56",
      date: "Jun 2021 - Dec 2021",
      points: [
        "Ensured test facility systems matched project goals, meeting client needs.",
        "Worked with colleagues to install and commission test equipment, ensuring validation for peak performance.",
        "Managed projects from planning to execution.",
        "Coordinated with engineers to deliver projects on time and within budget.",
        "Set up and maintained delivery robots proficiently.",
      ],
    },
    {
      title: "Engineering Intern",
      company_name: "Singapore Polytechnic",
      icon: singaporepoly,
      iconBg: "#E6DEDD",
      date: "Sep 2019 - Feb 2020",
      points: [
        "Internship Project: 5G Enabled Self-Driving Electric Vehicle with Safety Monitoring and Alert (Team of 9).",
        "Utilised 2 software programming (i.e., Python, C++) with integrated sensors for vehicle to detect its environment and monitor its condition.",
        "Designed holders for sensors and electronic devices and mounted various sensors and electronic devices on 5G Enabled Self-Driving Electric Vehicle.",
        "Gold Award (Project Team) at SP Engineering Show 2020",          
      ],
    },

  ];
  
  const projects = [
    {
      name: "Waste Watchers",
      description:
        "A mobile application developed for surplus food recovery that facilitates real-time tracking of surplus food availability, enabling efficient coordination between donors and beneficiaries.",
        tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: wastewatchers,
      // source_code_link: "https://github.com/",
    },
    {
      name: "MyClinic Online Booking System",
      description:
        "A web appointment booking platform that enhances healthcare efficiency through real-time scheduling and seamless doctor-pactient communication, facilitating patients' scheduling with specialised doctors.",
        tags: [
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
        {
          name: "sql",
          color: "blue-text-gradient",
        },
      ],
      image: myclinic,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Recognition of Student’s Attentiveness Via Machine Learning",
      description:
        "A human activity recognition for attentiveness assessment, utilising machine learning and deep learning on eye and mouth movements.",
      tags: [
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
        {
          name: "deeplearning",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      // image: "",
      // source_code_link: """,
    },
    {
      name: "Evaluation of Red Wine Quality",
      description:
        "Statistical analysis on data from Kaggle Database, evaluating red wine quality.",
      tags: [
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      image: redwine,
      source_code_link: "https://github.com/AtikahAlsagoff/EE0005/tree/main",
      live_demo_link: "https://github.com/AtikahAlsagoff/EE0005/blob/main/EE0005_Mini_Project.ipynb",
    },
    {
      name: "Hangman",
      description:
      "A game demonstrating web development skills from TikTok Youth Camp 2022.",
      tags: [
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: hangman,
      source_code_link: "https://github.com/AtikahAlsagoff/hangman/",
      live_demo_link:"https://atikahalsagoff.github.io/hangman/"
    },
  ];
  
  export { socials, experiences, projects };