const roundBoxes = document.querySelectorAll(".roundBoxes");

roundBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("active")) {
      box.classList.remove("active");
    } else {
      removeActiveClasses();
      box.classList.add("active");
    }
  });
});

function removeActiveClasses() {
  roundBoxes.forEach((box) => {
    box.classList.remove("active");
  });
}
