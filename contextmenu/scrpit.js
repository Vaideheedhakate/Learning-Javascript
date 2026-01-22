let menu = document.querySelector(".menu");

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    menu.style.left = `${e.pageX}px`;
    menu.style.top = `${e.pageY}px`;
    menu.style.display = "block";
})

// Hide menu on normal click
document.addEventListener("click", () => {
  menu.style.display = "none";
});