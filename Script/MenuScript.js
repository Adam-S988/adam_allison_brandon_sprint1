const roundBoxes = document.querySelectorAll(".roundBoxes");
const backgroundGrayBox = document.querySelector(".backgroundGrayBox");

function updateBackgroundGrayBoxHeight() {
  const anyActive = Array.from(roundBoxes).some((box) =>
    box.classList.contains("active")
  );
  const windowWidth = window.innerWidth;
}

roundBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("active")) {
      box.classList.remove("active");
    } else {
      removeActiveClasses();
      box.classList.add("active");
    }

    updateBackgroundGrayBoxHeight();
  });
});

function removeActiveClasses() {
  roundBoxes.forEach((box) => {
    box.classList.remove("active");
  });
}

updateBackgroundGrayBoxHeight();

window.addEventListener("resize", updateBackgroundGrayBoxHeight);
