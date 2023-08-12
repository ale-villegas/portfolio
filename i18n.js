import images from "./src/assets/images-app.jpg";
import player from "./src/assets/player.jpg";
import figma from "./src/assets/figma.jpg";
import cart from "./src/assets/cart.jpg";
import todo from "./src/assets/todo.jpg";
import portfolio from "./src/assets/portafolio.jpg";

const translations = {
  es: {
    presentation: `<strong>Hola! Soy un programador full stack</strong>, si bien manejo tanto el back como el front, mi verdadera pasión y enfoque se encuentran en el ámbito del <strong>front-end</strong>. Me encanta la creatividad y la interacción que puedo lograr al construir interfaces de usuario atractivas y fluidas.

    Tengo muchas ganas de participar en desafíos que me permitan expresar mi creatividad y mejorar la usabilidad de las aplicaciones web. Mi objetivo es <strong>marcar la diferencia</strong> a través de la implementación de soluciones front-end innovadoras que impacten positivamente en la <strong>experiencia de los usuarios</strong>`,

    buttonGetInTouch: "Contáctame",
    portfolio: "Portafolio",
    contact: "Contáctame",
    contactInfo: "Información de contacto",
    downloadCV: "Descarga mi CV",
    btnLenguage: "ENG",
    footerText: "Desarrollado por Alejandro Villegas",
    projects: [
      {
        title: "App de imágenes",
        description:
          "Usando React y consumiendo los datos de la API de Unsplash, tiene función de búsqueda y la posibilidad de dar like a fotos con persistencia en el localStorage. Tiene infinite scroll para cargar más fotos.",
        img: images,
        linkGit: "",
        linkProject: "https://image-app-ale-villegas.netlify.app/"
      },
      {
        title: "Reproductor de música",
        description:
          "Con React y consumiendo datos de la API de LastFM, tiene un buscador, posibilidad de guardar tus canciones favoritas y todas las funciones clásicas de un reproductor de música.",
        img: player,
        linkGit: "",
        linkProject: "https://music-player-ale-villegas.netlify.app/"
      },
      {
        title: "Hi-fi Prototype con Figma",
        description:
          "Es un prototipo de alta fidelidad para el curso de Google UX creado con Figma.",
        img: figma,
        linkGit: "figma",
        linkProject:
          "https://www.figma.com/proto/8kDw56dYpYmXIkbw6YEanc/taco-food-truck-app?type=design&node-id=204-327&t=EJLYPcuR74mxSYNL-1&scaling=scale-down&page-id=186%3A644&starting-point-node-id=204%3A327&mode=design"
      },
      {
        title: "Carrito de compras",
        description:
          "Creado con React, tiene filtro de precio y de categoría, el estado se maneja mediante el uso del hook useReducer.",
        img: cart,
        linkGit: "",
        linkProject: "https://shopping-cart-ale-villegas.netlify.app/"
      },
      {
        title: "Lista de tareas",
        description:
          "Creado con React usando Redux Toolkit para el manejo de estado, tiene las funciones básicas de una aplicación de tareas, con persistencia en localStorage.",
        img: todo,
        linkGit: "",
        linkProject: "https://to-do-ale-villegas.netlify.app/"
      },
      {
        title: "Este portafolio",
        description:
          "Creado con React, tiene funciones como cambiar el idioma y cambiar el tema a claro u oscuro.",
        img: portfolio,
        linkGit: "",
        linkProject: ""
      }
    ]
  },
  en: {
    presentation:
      "<strong>Hello! I'm a full stack programmer</strong>, proficient in both back-end and front-end development. However, my true passion and focus lie in the realm of <strong>front-end</strong>. I thrive on the creativity and interaction that I can achieve when building appealing and seamless user interfaces. I'm eager to engage in challenges that allow me to express my creativity and enhance the usability of web applications. My goal is to <strong>make a difference</strong> through the implementation of innovative front-end solutions that <strong>positively impact the user experience</strong>.",
    portfolio: "Portfolio",
    contact: "Contact me",
    buttonGetInTouch: "Get in touch",
    contactInfo: "Contact info",
    downloadCV: "Download my CV",
    btnLenguage: "ESP",
    footerText: "Developed by Alejandro Villegas",
    projects: [
      {
        title: "Image App",
        description:
          "Using React and consuming data from the Unsplash API, this app features a search function that allows users to search for images. Additionally, it provides the ability to like photos with data persistence in localStorage. Moreover, the app incorporates an infinite scroll feature to load more photos dynamically.",
        img: images,
        linkGit: "",
        linkProject: "https://image-app-ale-villegas.netlify.app/"
      },
      {
        title: "Music Player",
        description:
          "With React and consuming data from the LastFM API, it features a search function, the ability to save your favorite songs, and all the classic functions of a music player.",
        img: player,
        linkGit: "",
        linkProject: "https://music-player-ale-villegas.netlify.app/"
      },
      {
        title: "Hi-fi prototype with Figma",
        description:
          "It is a high-fidelity prototype for the Google UX course, created with Figma.",
        img: figma,
        linkGit: "figma",
        linkProject:
          "https://www.figma.com/proto/8kDw56dYpYmXIkbw6YEanc/taco-food-truck-app?type=design&node-id=204-327&t=EJLYPcuR74mxSYNL-1&scaling=scale-down&page-id=186%3A644&starting-point-node-id=204%3A327&mode=design"
      },
      {
        title: "Shopping Cart",
        description:
          "Created with React, it includes price and category filtering, and the state is managed using the useReducer hook.",
        img: cart,
        linkGit: "",
        linkProject: "https://shopping-cart-ale-villegas.netlify.app/"
      },
      {
        title: "To-Do",
        description:
          "Created with React using Redux Toolkit for state management, this app has the basic functionalities of a task application, with data persistence in localStorage.",
        img: todo,
        linkGit: "",
        linkProject: "https://to-do-ale-villegas.netlify.app/"
      },
      {
        title: "This portfolio",
        description:
          "Created with React, this app includes functionalities such as language switching and toggling between light and dark themes.",
        img: portfolio,
        linkGit: "",
        linkProject: ""
      }
    ]
  }
};

export default translations;