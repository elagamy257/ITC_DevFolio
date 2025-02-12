// //#region header jobs writer
// async function Startwriter() {
//   const jobs = ["Photographer", "Freelancer", "Designer", "Developer"];
//   const writerElement = document.getElementById("typewriter");

//   for (let i = 0; true; i++) {
//     const currentWord = jobs[i % jobs.length];
//     writerElement.innerText = "";
//     for (const c of currentWord) {
//       writerElement.innerText += c;
//       await sleep(100);
//     }
//     writerElement.classList.add("cursor");
//     await sleep(2000);
//     writerElement.classList.remove("cursor");

//     while (writerElement.innerText != "") {
//       await sleep(100);
//       writerElement.innerText = writerElement.innerText.slice(0, -1);
//     }
//   }
// }
// Startwriter();
// // #endregion

// // #region navLink active changer
// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll(".nav-link");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           navLinks.forEach((link) => link.classList.remove("active"));

//           const activeLink = document.querySelector(
//             `.nav-link[href="#${entry.target.id}"]`
//           );
//           console.log(entry.target.id, activeLink);
//           activeLink.classList.add("active");
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   sections.forEach((section) => observer.observe(section));
// });

// // #endregion
// // #region statistics counter
// async function startCounter() {
//   const statsElements = Array.from(document.querySelectorAll(".statistics p"));
//   const maxNumbers = statsElements.map((element) => Number(element.innerText));
//   for (const element of statsElements) element.innerText = "0";

//   for (let i = 0; i <= Math.max(...maxNumbers); i++) {
//     for (let j = 0; j < statsElements.length; j++) {
//       if (maxNumbers[j] < i) continue;
//       statsElements[j].innerText = i;
//     }
//     await sleep(0);
//   }
// }
// startCounter();
// // #endregion

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// // #region swiper
// new Swiper(".main-slider", {
//   speed: 600,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   slidesPerView: "auto",
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },
// });

// new Swiper(".slider", {
//   speed: 400,
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },
// });
// // #endregion
