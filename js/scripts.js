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
});