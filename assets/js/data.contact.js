const contactData = [
// START OF EDIT ARRAY DATA
  {
    enable: true,
    title: "Location",
    icon: "bi-geo-alt-fill",
    text: "North Sumatera, Medan, Indonesia",
    link: null,
    delay: 100,
  },
  {
    enable: true,
    title: "LinkedIn",
    icon: "bi-linkedin",
    text: "kurikuri",
    link: "https://www.linkedin.com/in/kurikuri/",
    delay: 150,
  },
  {
    enable: true,
    title: "TelegramApp",
    icon: "bi-telegram",
    text: "k_tarro",
    link: "https://t.me/k_tarro",
    delay: 200,
  },
  {
    enable: true,
    title: "GitHub",
    icon: "bi-github",
    text: "tarokeitaro",
    link: "https://github.com/tarokeitaro",
    delay: 250,
  },
  {
    enable: true,
    title: "E-Mail",
    icon: "bi-envelope-fill",
    text: "kurikurimail@proton.me",
    link: "mailto:kurikurimail@proton.me",
    delay: 300,
  },
  {
    enable: false, // 🔥 bisa kamu aktifkan nanti kalau mau
    title: "Instagram",
    icon: "bi-instagram",
    text: "@kurikuri",
    link: "https://instagram.com/kurikuri",
    delay: 350,
  },
// END OF EDIT ARRAY DATA
];

const contactContainer = document.getElementById("contact-list");

contactData
  .filter((item) => item.enable)
  .forEach((item) => {
    const div = document.createElement("div");
    div.className = "fw-medium p-1";
    div.setAttribute("data-aos", "zoom-in");
    div.setAttribute("data-aos-delay", item.delay);
    div.setAttribute("title", item.title);

    // jika ada link, bungkus text-nya dengan <a>
    const content = item.link
      ? `<i class="bi mx-1 ${item.icon}"></i><a href="${item.link}" class="url" target="_blank">${item.text}</a>`
      : `<i class="bi mx-1 ${item.icon}"></i>${item.text}`;

    div.innerHTML = content;
    contactContainer.appendChild(div);
  });