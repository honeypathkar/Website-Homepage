function openPopup() {
  document.getElementById("myPopup").style.display = "block";
  console.log("Form is Open");
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container img");
  const dots = document.querySelectorAll(".dot");

  function setActiveDot(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  images.forEach((img, index) => {
    img.addEventListener("mouseover", () => {
      setActiveDot(index);
    });
  });
});
