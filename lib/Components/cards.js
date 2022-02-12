const allHeartBtn = document.querySelectorAll(".fa-heart");
allHeartBtn.forEach((eachBtn) =>
eachBtn.addEventListener("click", () => {
    eachBtn.classList.contains("far")
      ? (eachBtn.className = "fas fa-heart")
      : (eachBtn.className = "far fa-heart");
  })
);