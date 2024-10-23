export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'AI-RAG - An AI Chatbot Website',
    desc: 'An AI chatbot website that lets you chat with based on the provided context. Context can be PDFs, Images, Excel files, CSV files and more. The chatbot is using Ollama, an open-source project that lets you utilize many open-source AI models to chat with.',
    subdesc:
      'Built using Vue.js, Tailwind CSS, JavaScript, Docker, Ollama, FastAPI and Langchain.',
    href: 'https://github.com/ssobii2/AI-RAG-Chatbot-Ollama',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#FFF',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vuejs.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 5,
        name: 'Ollama',
        path: '/assets/ollama.png',
      },
      {
        id: 6,
        name: 'Langchain',
        path: '/assets/langchain.png',
      },
      {
        id: 7,
        name: 'Docker',
        path: '/assets/docker.png',
      },
    ],
  },
  {
    title: 'Magic Memory Game - A Card Matching Game',
    desc: 'Magic Memory Game is an interactive card-matching game built using React. The project leverages React for a dynamic and responsive user interface. Match cards to win the game.',
    subdesc:
      'Built using React, JavaScript, HTML, CSS',
    href: 'https://github.com/ssobii2/Magic-Memory-Game',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'HTML',
        path: '/assets/html.png',
      },
    ],
  },
  {
    title: 'Tenzies - A Dice Game',
    desc: 'Tenzies Game is a fun and interactive dice game built using React. It provides an engaging way to play and practice the Tenzies dice game with a sleek and responsive user interface.',
    subdesc:
      'Built using React, JavaScript, HTML, CSS',
    href: 'https://github.com/ssobii2/Tenzies-Game',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#13202F',
      background:
        'linear-gradient(0deg, ##13202F, ##13202F), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'HTML',
        path: '/assets/html.png',
      },
    ],
  },
  {
    title: 'Kutatok Ejszakaja - An Event Management App',
    desc: 'A Hungarian Event Managing Website where companies from Hungary can register events and customers can register for the Events. I contributed in making a new page for customers specifically for registering mid-year events with a fully working calendar and event details. Also, an admin page for clients to allow them to register those events from which customers can access them.',
    subdesc:
      'Built with Vue.js, Wordpress, Laravel and Bootstrap, tailored to meet the needs of modern consumers.',
    href: 'https://www.kutatokejszakaja.hu',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vuejs.png',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: 'assets/bootstrap.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Wordpress',
        path: '/assets/wordpress.png',
      },
      {
        id: 5,
        name: 'Laravel',
        path: '/assets/laravel.png',
      },
    ],
  },
  {
    title: 'Zyntern - A Career Portal',
    desc: "Zyntern is Hungary's career portal for students and recent graduates. Create your profile, learn about the companies, get notified about the career opportunities that match you, and apply with a click. I contributed by fixing bugs and optimizing the website with clean code. Also, integration of Product Fruits replacing Userpilot services.",
    subdesc:
      'Built with Vue.js, Laravel and Bootstrap, tailored to meet the needs of modern consumers.',
    href: 'https://zyntern.com',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vuejs.png',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: 'assets/bootstrap.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Laravel',
        path: '/assets/laravel.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.03 : isMobile ? 0.04 : isTablet ? 0.05 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-9, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'DATelite',
    pos: 'Internship',
    duration: 'Sep 2022 - May 2023',
    title: "Streamline a website to web-based service integration (based on the Bootstrap framework). Consolidate user requirements into a webpage. Using a different JavaScript-based solution/library for data visualization. A user-friendly web interface will integrate charts, plots, and maps into the site. Extending the already-made login system for the client website using PHP and UserSpice.",
    icon: '/assets/datelite.png',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Wozify',
    pos: 'Junior Web Developer',
    duration: 'Jan 2024 - Present',
    title: "Fixing Bugs on different projects and extending them with new features according to the client’s needs. Learning different web-based technologies and frameworks likeWordPress, Vue js, Laravel etc. Optimizing code on existing projects and maintaining them according to the client's needs.",
    icon: '/assets/wozify.png',
    animation: 'victory',
  },
];