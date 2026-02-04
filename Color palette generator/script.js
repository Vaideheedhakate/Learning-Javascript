function generateColor(){
    let color = '#';
    const letters = '0123456789ABCDEF'
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generatePalette(){
    let boxes = document.querySelectorAll(".color-box")
    boxes.forEach(box => {
        let color = generateColor();
        box.style.backgroundColor = color,
        box.innerText = color;

        box.onclick = () => {
        navigator.clipboard.writeText(color);
        alert(`${color} copied!`);
        console.log(navigator);
    };
    })
}
document.getElementById("generate").addEventListener("click", generatePalette);
generatePalette();
