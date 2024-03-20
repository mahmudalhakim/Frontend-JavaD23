/**
 * 
 *  Ajax Demo
 *  2024-03-20
 * 
 */

let loadBtn = document.getElementById('loadBtn');
let loadJsonBtn = document.getElementById('loadJsonBtn');
let loadApiBtn = document.getElementById('loadApiBtn');

// Skapa händelsehanterare (lyssnare)  
loadBtn.addEventListener('click', loadText);
loadJsonBtn.addEventListener('click', loadJSON)
loadApiBtn.addEventListener('click', loadApi)

function loadText() {
    console.log("Inne i Ajax-funktionen");
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.onload = function () {
        console.log("Inne i onload");
        console.log(xhr);

        document.getElementById('output').innerHTML = xhr.responseText;
    };
    xhr.open('GET', 'demo.html');
    xhr.send();
}

function loadJSON() {
    console.log("Inne i loadJSON-funktionen");
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(xhr.response);
        const json = JSON.parse(xhr.response);
        console.log(json);
        renderJSON(json);
    };
    xhr.open('GET', 'demo.json');
    xhr.send();
}


function renderJSON(json) {
    document.getElementById('output').innerHTML = `
    <h2>${json.name}</h2>
    <h3>${json.email}</h3>
    <h4>Company: ${json.company.name}</h4>
    `;
}


function loadApi() {
    console.log("Inne i loadApi-funktionen");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
    xhr.onload = function () {
        // console.log(xhr.response);
        const json = JSON.parse(xhr.response);
        console.log(json);
        renderApi(json);
    };
}


function renderApi(json) {

    let output = '<ol>';
    json.forEach(user => {
        output += '<li>' + user.name + '</li>';
    });
    output += '</ol>';

    document.getElementById('output').innerHTML = output;
}



// Ajax via jQuery
$(document).ready(function(){
    // Hämta text/html
    $('#output-jquery').load('demo.html');

    // Hämta JSON
    $.getJSON('demo.json', function(response){
        console.log(response);
        $('#output-jquery-json').html(response.name);
    })
});
