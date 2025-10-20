const langToolsData = [
  // START OF EDIT ARRAY DATA
  {
    aos: "fade-right",
    duration: 3000,
    items: [
      {
        name: "HTML5",
        link: "https://www.w3.org/html/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
      },
      {
        name: "CSS3",
        link: "https://www.w3schools.com/css/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
      },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      },
      {
        name: "Bash Scripting",
        link: "https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
      },
      {
        name: "Python",
        link: "https://www.python.org/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
      },
      {
        name: "Django",
        link: "https://www.python.org/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
      }
    ]
  },
  {
    aos: "fade-left",
    duration: 3000,
    items: [
      {
        name: "GNU/Linux",
        link: "https://www.gnu.org/gnu/linux-and-gnu.html",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
      },
      {
        name: "Proxmox VE 8",
        link: "https://www.proxmox.com/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/proxmox/proxmox-plain-wordmark.svg"
      },
      {
        name: "MikroTik",
        link: "https://mikrotik.com/",
        icon: "assets/images/mikrotik.png"
      },
      {
        name: "VS Code",
        link: "https://code.visualstudio.com/",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
      }
    ]
  }
  // END OF EDIT ARRAY DATA
];

const langToolsContainer = document.getElementById("lang-tools-container");

langToolsData.forEach((row, index) => {
  const div = document.createElement("div");
  div.className = `lang-and-tools ${index > 0 ? "mt-3" : ""}`;
  div.setAttribute("data-aos", row.aos);
  div.setAttribute("data-aos-duration", row.duration);

  div.innerHTML = row.items
    .map(
      (tool) => `
      <a href="${tool.link}" rel="nofollow" target="_blank">
        <img 
          src="${tool.icon}" 
          alt="${tool.name}" 
          height="60" 
          width="60"
          style="max-width:100%" 
          loading="eager">
      </a>`
    )
    .join("");

  langToolsContainer.appendChild(div);
});