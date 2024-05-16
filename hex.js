const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Get the button element
const btn = document.getElementById("btn");
// Het the color element
const color = document.querySelector(".color");

// Agregar un event listener al botón
btn.addEventListener("click", () => {
    // Generar un color hexadecimal aleatorio
    let colorPicked = "#";
    for (let i = 0; i < 6; i++) {
        colorPicked += hex[getRandomNumber()];
    }
    // Cambiar el color de fondo del body
    document.body.style.backgroundColor = colorPicked;
    // Cambiar el color del texto
    color.textContent = colorPicked;
});

// Función para obtener un número aleatorio
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}