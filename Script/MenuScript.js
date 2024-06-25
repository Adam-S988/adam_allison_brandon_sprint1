const roundBoxes = document.querySelectorAll(".roundBoxes");
const backgroundGrayBox = document.querySelector(".backgroundGrayBox");

function updateBackgroundGrayBoxHeight() {
  const anyActive = Array.from(roundBoxes).some((box) =>
    box.classList.contains("active")
  );
  const windowWidth = window.innerWidth;

  // if (anyActive) {
  //   if (windowWidth <= 700) {
  //     backgroundGrayBox.style.height = "3050px";
  //   } else if (windowWidth <= 1100) {
  //     backgroundGrayBox.style.height = "2050px";
  //   } else {
  //     backgroundGrayBox.style.height = "1640px";
  //   }
  // } else {
  //   if (windowWidth <= 700) {
  //     backgroundGrayBox.style.height = "2800px";
  //   } else if (windowWidth <= 1100) {
  //     backgroundGrayBox.style.height = "1800px";
  //   } else {
  //     backgroundGrayBox.style.height = "1380px";
  //   }
  // }
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
