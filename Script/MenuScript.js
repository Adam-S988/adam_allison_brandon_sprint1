const roundBoxes = document.querySelectorAll(".roundBoxes");
const backgroundGrayBox = document.querySelector(".backgroundGrayBox");

roundBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("active")) {
      box.classList.remove("active");
      backgroundGrayBox.style.height = "1300px";
    } else {
      removeActiveClasses();
      box.classList.add("active");
      backgroundGrayBox.style.height = "1570px";
    }
  });
});

function removeActiveClasses() {
  roundBoxes.forEach((box) => {
    box.classList.remove("active");
  });
}
