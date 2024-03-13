// alert("Hello World");

function myFunc() {
    console.log("Hello Events");
    let h1 = document.getElementById('heading');
    h1.innerHTML = "Hello Events";
    h1.classList.add('text-primary');
}

function showTime() {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
}