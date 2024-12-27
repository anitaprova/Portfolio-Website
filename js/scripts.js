document.addEventListener("DOMContentLoaded", function () {
  const resumeLink = document.getElementById("resume-link");
  const header = document.getElementById("header");
  const resumeSection = document.getElementById("resume");
  resumeLink.addEventListener("click", function (event) {
    header.style.display = "none";
    resumeSection.style.display = "inherit";
		resumeSection.style.visibility = "visible";
  });

	const projectLink = document.getElementById("project-link");
  const projectSection = document.getElementById("project");
  projectLink.addEventListener("click", function (event) {
    header.style.display = "none";
    projectSection.style.display = "block";
    projectSection.style.visibility = "visible";
  });

	const aboutLink = document.getElementById("about-link");
  const aboutSection = document.getElementById("about");
  aboutLink.addEventListener("click", function (event) {
    header.style.display = "none";
    aboutSection.style.display = "block";
    aboutSection.style.visibility = "visible";
  });

	const contactLink = document.getElementById("contact-link");
  const contactSection = document.getElementById("contact");
  contactLink.addEventListener("click", function (event) {
    header.style.display = "none";
    contactSection.style.display = "block";
    contactSection.style.visibility = "visible";
  });

  if (window.location.hash === "#resume") {
    header.style.display = "none";
    resumeSection.style.display = "inherit";
    resumeSection.style.visibility = "visible";
  } else if (window.location.hash === "#project") {
    header.style.display = "none";
    projectSection.style.display = "block";
    projectSection.style.visibility = "visible";
  } else if (window.location.hash === "#about") {
    header.style.display = "none";
    aboutSection.style.display = "block";
    aboutSection.style.visibility = "visible";
  } else if (window.location.hash === "#contact") {
    header.style.display = "none";
    contactSection.style.display = "block";
    contactSection.style.visibility = "visible";
  }

  const projectsData = {
    article_id: "project",
    projects: [
      {
        title: "Art Restoration",
        description:
          "We developed a machine learning model from scratch for image restoration, utilizing UNET to deblur, denoise, and brighten images, restoring them to their original quality.",
        technologies: ["Python", "Tensorflow", "Streamlit", "NumPy", "Pandas"],
        links: {
          github: "https://github.com/anitaprova/CTP-Project",
          website: "https://artrestoration.streamlit.app/",
        },
        image: "images/art_restoration.png",
      },
      {
        title: "HawkHelper",
        description:
          "We created a chatbot made for and by Hunter students. It will give students in-depth accurate information on mental health, food assistance, housing initiatives, and more quickly, efficiently, and accurately. By simply asking the chatbot any question regarding resources, students can receive answers almost instantaneously without the extra clicks and tabs.",
        technologies: [
          "React.js",
          "Express.js",
          "Python",
          "Gemini API",
          "HTML",
          "CSS",
        ],
        links: {
          github: "https://github.com/zaraamerr/cuny-resource-chatbot",
          devpost: "https://devpost.com/software/hawkhelper",
        },
        gif: "images/hawkhelper.gif",
      },
      {
        title: "NYC Culture Map",
        description:
          "This project was a collaborative effort with a team of four members for the CUNY hackathon. Over the course of three days, we employed technologies such as HTML, CSS, React, JS, LeafLet, and Google OAuth. The web app aims to provide an immersive exploration of New York City's diverse neighborhoods, highlighting their cultural richness and heritage. I utilized React and Leaflet to create an interactive map experience for users.",
        technologies: ["HTML", "CSS", "React", "JS", "LeafLet", "Google OAuth"],
        links: {
          devpost: "https://devpost.com/software/nyc-explorer",
          github: "https://github.com/Aaleia/UrbanTapestry",
        },
        gif: "images/map.gif",
      },
      {
        title: "Joystick Junction",
        description:
          "Over the course of 10 weeks, as part of my final project for the Intermediate Web Development Course at Codepath, I designed and developed a website using React where users can discuss their favorite video games. The website includes features such as user posts, where users can create, edit, and delete their posts, a commenting system allowing users to comment on posts made by others, and filtering options to sort posts by most popular and by time.",
        technologies: ["React"],
        links: {
          github: "https://github.com/anitaprova/codepath-finalproject",
        },
        gif: "images/joystick junction.gif",
      },
      {
        title: "Book Search",
        description:
          "This project was a collaborative effort with a team of three members over the course of one month. We employed technologies such as SvelteKit, Google Firebase, Google Firestore, Vite, HTML, CSS, and JavaScript. The application utilized Google Books APIs to facilitate search functionalities. I led the implementation of front-end components using SvelteKit and styled the application with CSS. The project was showcased at Codefest 2024 and was a part of a Google mentorship program, where we received guidance from industry experts to improve our technical skills and project management abilities.",
        technologies: [
          "SvelteKit",
          "Google Firebase",
          "Google Firestore",
          "Vite",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        links: {
          github: "https://github.com/Justinw21/dabooks",
        },
      },
    ],
  };

  const projectsContainer = document.getElementById("projects-container");
  projectsData.projects.forEach(project => {
    const projectDiv = document.createElement("div");
    
    const title = document.createElement("h3");
    title.textContent = project.title;
    projectDiv.appendChild(title);

    const description = document.createElement("p");
    description.textContent = project.description;
    projectDiv.appendChild(description);

    const techList = document.createElement("p");
    techList.textContent = "Technologies Used: " + project.technologies.join(", ");
    projectDiv.appendChild(techList);

    const linkList = document.createElement("p");
    if (project.links.github) {
      const githubLink = document.createElement("a");
      githubLink.href = project.links.github;
      githubLink.textContent = "View the Github Here";
      const breakLine = document.createElement("br");
      linkList.appendChild(githubLink);
      linkList.appendChild(breakLine);
    }

    if (project.links.website) {
      const websiteLink = document.createElement("a");
      websiteLink.href = project.links.website;
      websiteLink.textContent = "View the Website Here";
      const breakLine = document.createElement("br");
      linkList.appendChild(websiteLink);
      linkList.appendChild(breakLine);
    }

    if (project.links.devpost) {
      const devpostLink = document.createElement("a");
      devpostLink.href = project.links.devpost;
      devpostLink.textContent = "View Devpost Here";
      const breakLine = document.createElement("br");
      linkList.appendChild(devpostLink);
      linkList.appendChild(breakLine);
    }
    projectDiv.appendChild(linkList);

    if (project.image) {
      const image = document.createElement("img");
      image.src = project.image;
      image.alt = "Image of " + project.title;
      projectDiv.appendChild(image);
    }

    if(project.gif){
      const gif = document.createElement("img");
      gif.src = project.gif;
      projectDiv.appendChild(gif);
    }

    projectsContainer.appendChild(projectDiv);
    const breakLine = document.createElement("br");
    linkList.appendChild(breakLine);
  });
});