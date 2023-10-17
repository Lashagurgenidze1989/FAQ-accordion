const allList = document.querySelectorAll(".accordion-list");
let active = null;

allList.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const question = item.querySelector(".question");
  const answer = item.querySelector(".answer");
  const images = item.querySelector("#icon");

  header.addEventListener("click", () => {
    answer.style.display = "block";
    question.style.fontWeight = "bold";
    images.style.transform = "rotate(180deg)";

    /* if (active) {
      active.querySelector(".answer").style.fontWeight = "none";
      active.querySelector(".question").style.fontWeight = "normal";
      active.querySelector("#icon").style.transform = "rotate(180deg)";
    }

    active = header; */
  });
});
