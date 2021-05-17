import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am ', // Hello, my name is
  name: 'Chanh Duong', // John
  subtitle: 'Software Developer', // I'm the Unknown Developer.
  cta: 'Learn more', // Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'Chanh_ID.jpg',
  paragraphOne: 'HI THERE!',
  paragraphTwo: 'I am Chanh, a junior software developer based in Ottawa, Ontario.',
  paragraphThree:
    'I just graduated from Algonquin College on May 2021. As a Computer Programming student, I had the opportunities to practise in many different software development areas such as Web Development, Mobile Development, System Programming, Database Design, and Networking.',
  paragraphFour:
    'With the passion for developing website and mobile applications, I focus on this field in order to achieve the goal of becoming a full stack developer.',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'django_chart.JPG',
    title: 'Covid data analyse',
    info: 'Django, HTML, Bootstrap, SQLite, RESTful API',
    info2:
      'Building a timeline chart to show number of cases and deaths of Covid-19 pandemic over Canada (using JavaScript with Chart.js libraries and Canada Covid-19 dataset from Postman). Transforming raw data from the dataset to the appropriate type dataset, which could be used by the Chart library.',
    url: 'https://youtu.be/oi68qfav-5U',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'myfinedish.JPG',
    title: 'My fine dishes - a social Network site for food lover',
    info: 'NodeJS, Express, MongoDB, Heroku, RESTful API, HTML, Bootstrap, JavaScript',
    info2:
      'A web app where people can share their favorite dishes from their hometown. Having functionalities of an social network site (create post, add comments, edit/delete post, etc.). Providing authentication and authorization for user and administrator to manage posts and comments in the system. Using Passport to encrypt user passwords.',
    url: 'https://youtu.be/CHBV7g0v7CY',
    repo: 'https://myfinedishes.herokuapp.com/', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://youtu.be/CHBV7g0v7CY', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  // cta: '',
  // btn: '',
  email: 'trungchanh7706@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vincent-duong-9805b780/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/VincentDuong11',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
