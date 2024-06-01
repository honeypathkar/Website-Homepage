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
function changeImage(imageSrc, element) {
  // Change the main image
  document.getElementById("main-image").src = imageSrc;

  // Remove active class from all description divs
  var descriptions = document.querySelectorAll(
    ".description1, .description2, .description3"
  );
  descriptions.forEach(function (desc) {
    desc.classList.remove("active");
  });

  // Add active class to the clicked description div
  element.classList.add("active");
}
