// En funktion med samma namn som finns i script.js
function myFunc() {
    console.log("Hello Events");
    let h1 = document.getElementById('heading');
    h1.innerHTML = "Hello from script-test.js";
    h1.classList.add('text-danger');
}