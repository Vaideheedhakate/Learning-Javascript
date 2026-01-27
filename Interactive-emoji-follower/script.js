const pet = document.getElementById("pet");
const petContainer = document.getElementById("pet-container");

// Use the mousemove event to move the pet container to the mouse position
document.addEventListener("mousemove", function (e) {
  petContainer.style.left = e.clientX + "px";
  petContainer.style.top = e.clientY + "px";
});

// Use the mouseover event to change the pet color by adding the "happy" class
pet.addEventListener("mouseover", function () {
  pet.classList.add("happy");
});

// Use the mouseleave event to return the pet to normal by removing the "happy" class
pet.addEventListener("mouseleave", function () {
  pet.classList.remove("happy");
});

// Use the mousedown event to make the pet smaller by adding the "clicked" class
pet.addEventListener("mousedown", function () {
  pet.classList.add("clicked");
});

// Use the mouseup event to return the pet to normal by removing the "clicked" class
pet.addEventListener("mouseup", function () {
  pet.classList.remove("clicked");
});

// Initialize the pet position at the center of the screen
petContainer.style.left = window.innerWidth / 2 + "px";
petContainer.style.top = window.innerHeight / 2 + "px";
