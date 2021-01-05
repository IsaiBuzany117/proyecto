const cambio = document.getElementById("cambio");
const b = document.getElementById("b");
b.addEventListener('click', (evt) => {
    const h1 = document.createElement("h1");
    h1.textContent = "A";
    cambio.append(h1);
});
cambio.addEventListener('', () => {
    console.log("cambio");
}); 