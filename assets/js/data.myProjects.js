const projectsData = [
    // START OF EDIT ARRAY DATA
    {
        enable: true,
        title: "Film Metadata Information System",
        img: "assets/images/p01.webp",
        alt: "Image of API coding (left) and image of the final application (right).",
        description:
            "Creating an API Service with Django Rest Framework as the back-end and building a multiplatform application for the client side with Flutter as the front-end for the Film Metadata Information System application.",
        aos: "fade-down",
        delay: 200,
    },
    {
        enable: true,
        title: "Mini Server: Personal Cloud & Streaming Service",
        img: "assets/images/p02.webp",
        alt: "Screenshot of Mini Server setup and services.",
        description:
            "Installation of Debian 12 minimal as the optimal server OS to host server applications like Jellyfin, Navidrome, and Filebrowser, even on the lowest-spec computers. Includes VPN setup for global remote access.",
        aos: "fade-down",
        delay: 200,
    },
    {
        enable: true,
        title: "Proxy Server",
        img: "assets/images/p03.webp",
        alt: "Screenshot of proxy server configuration.",
        description:
            "Setting up WireGuard as a VPN server for connection to a local server (behind NAT), configuring NGINX reverse proxy for public access, and using Fail2ban to prevent DDoS attacks.",
        aos: "fade-down",
        delay: 200,
    },
    {
        enable: true,
        title: "Inventory Management System",
        img: "assets/images/p04.webp",
        alt: "Screenshot of inventory app interface.",
        description:
            "Building an inventory management system using Django with QR code scanning and fuel tracking features. Developed as part of an internship at PT. Transdata Satkomindo.",
        aos: "fade-down",
        delay: 200,
    },
    {
        enable: true,
        title: "Mini Server Upgrade: PVE, NAS & Nextcloud service",
        img: "assets/images/mini_server.webp",
        alt: "Screenshot of Mini Server setup and services.",
        description:
            "Upgraded to a dedicated Mini PC server powered by Proxmox for virtualization and containerized workloads. Added a NAS and Nextcloud for reliable data storage and synchronization. The system is secured with an improved Mikrotik router, UPS backup, and proper electrical grounding to ensure stability and continuous operation.",
        aos: "fade-down",
        delay: 200,
    }
    // END OF EDIT ARRAY DATA
];

// Render only enabled projects
const projectContainer = document.getElementById("my-project-list");

projectsData
  .filter((project) => project.enable) // hanya tampilkan yang enable = true
  .forEach((project) => {
    const col = document.createElement("div");
    col.className = "col";
    col.setAttribute("data-aos", project.aos);
    col.setAttribute("data-aos-delay", project.delay);

    col.innerHTML = `
      <div class="card card-bg-dark h-100">
        <img 
          src="${project.img}" 
          alt="${project.alt}" 
          loading="eager" 
          class="card-img-top img-ratio-16-9">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text text-start">${project.description}</p>
        </div>
      </div>
    `;

    projectContainer.appendChild(col);
  });