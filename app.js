const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//Get the button element
const btn = document.getElementById("btn");
// Het the color element
const color = document.querySelector(".color");

// Add event listener to the button
btn.addEventListener("click", () => {
    // Obtener un numero aleatorio del 0 al 3
    const randomNumber = getRandomNumber(); 
    //Seleccionando un elemento
    //Del arreglo colors
    const colorPicked = colors[randomNumber];
    // Cambiar el color del body
    document.body.style.backgroundColor = colorPicked;
    // Cambiar el color del texto
    color.textContent = colorPicked;
});

// Función para obtener un número aleatorio
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}