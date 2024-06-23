document.querySelectorAll(".roundBoxes").forEach((box) => {
  box.addEventListener("click", function () {
    this.classList.toggle("active");
    this.querySelectorAll("p").forEach((p) => {
      p.classList.toggle("hidden");
    });
  });
});
