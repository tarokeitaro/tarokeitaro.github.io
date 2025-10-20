const educationData = [
  // START OF EDIT ARRAY DATA
  {
    title: "Senior High School",
    university: "SMA SWASTA KATOLIK BUDI MURNI 2 MEDAN",
    major: "Math & Science",
    years: "2019 - 2021",
    gpa: "",
    img: "assets/images/bm2.webp",
    delay: 100
  },
  {
    title: "Bachelor Degree",
    university: "UNIVERSITAS PRIMA INDONESIA",
    major: "Informatics Engineering",
    years: "2021 - 2025",
    gpa: "3.98/4.00",
    img: "assets/images/unprilogo.webp",
    delay: 100
  }
  // END OF EDIT ARRAY DATA
];

const container = document.getElementById("education-list");

educationData.forEach((edu, index) => {
  const card = document.createElement("div");
  card.className = "col";
  card.setAttribute("data-aos", "zoom-in");
  card.setAttribute("data-aos-delay", edu.delay);
  card.setAttribute("data-aos-duration", "1000");

  card.innerHTML = `
      <div class="card card-bg-dark h-100">
        <div class="card-body">
          <h3 class="card-title fw-bold">${edu.title}</h3>
          <img src="${edu.img}" alt="${edu.university}" loading="eager" class="img-responsive mb-3">
          <p class="fw-medium card-text mb-0">${edu.university}</p>
          <p class="m-0">${edu.major}</p>
          <small>${edu.years}</small>
          <p class="fw-medium">GPA: ${edu.gpa}</p>
        </div>
      </div>
    `;
  container.appendChild(card);
});