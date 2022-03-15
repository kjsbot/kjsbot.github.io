// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Project pictures
import trimPic from "./images/trimcipe.png"
import battlePic from "./images/battleship.png"
import chessPic from "./images/c-pp-hess.png"
import bookPic from "./images/booknook.png"
import temp from "./images/temp.jpg"
import github from "./images/github.jpg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Fiona",
  headerTagline: [
    //Line 1 For Header
    "CS student,",
    //Line 2 For Header
    "developer,",
    //Line 3 For Header
    "problem solver",
  ],
  //   Header Paragraph
  headerParagraph:
    "Currently: working on fullstack projects, biking, learning Go, reading sci-fi books, and taking better care of my plants🌱",

  //Contact Email
  contactEmail: "wang.fiona03@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "YouDemy", //Project Title - Add Your Project Title Here
      stack: "REACT, NODE.JS, APOLLO, GRAPHQL, POSTGRESQL, YOUTUBE API",
      para:
        "Currently working on an online learning platform that allows users to import Youtube playlists/videos and view them as virtual courses.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        temp,  
      //Project URL - Add Your Project Url Here
      url: "https://github.com/kjsbot/YouDemy/",
    },
    {
      title: "BookNook", //Project Title - Add Your Project Title Here
      stack: "REACT, NODE.JS, EXPRESS, MONGODB, GOOGLE BOOKS API",
      para:
        "A fullstack webapp that allows you to keep track of all your books and reading progress. Inspired by Goodreads!", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        bookPic,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/kjsbot/BookNook/",
    },
    {
      title: "Trimcipe", //Project Title - Add Your Project Title Here
      stack: "DJANGO, JAVASCRIPT, BOOTSTRAP SQLITE",
      para:
        "A Django web application that trims down a user submitted recipe and displays just the directions, ingredients, and relevant details. Removes the need to scroll past life stories and ads.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        trimPic,  
      //Project URL - Add Your Project Url Here
      url: "https://github.com/kjsbot/trimcipe/",
    },
    {
      title: "Chess", //Project Title - Add Your Project Title Here
      stack: "C++",
      para:
        "Two player and single player chess game against a chess bot with various levels of diffculty - implemented with a minimax algorithm and alpha-beta pruning.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      chessPic,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/kjsbot/c-pp-hess/",
    },
    {
      title: "Battleship", //Project Title - Add Your Project Title Here
      stack: "JAVA, JAVAFX",
      para:
        "Battleship game made with object oriented programming principles complete with a GUI.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        battlePic,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/kjsbot/Battleship/",
    },
    {
      title: "More Projects", //Project Title - Add Your Project Title Here
      stack: "??",
      para:
        "Check out my Github (kjsbot) for more of my projects!", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      github,  
      //Project URL - Add Your Project Url Here
      url: "https://github.com/kjsbot/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi, I'm Fiona! I'm currently sudying computer science at the University of Waterloo.",
  aboutParaTwo:
    "Over the summer, I worked as fullstack developer at the Royal Bank of Canada where I worked with Angular, TypeScript, and SQL to create an internal platform with my team. I'm always looking for new opportunities to apply my learning and to grow as a software engineer!",
  aboutParaThree:
    "Incoming software developer intern @ The Weather Network (Backend & Infra)",
  aboutImage:
  "./assets/instagram.svg", 
  //"https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/chetanverma16" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
