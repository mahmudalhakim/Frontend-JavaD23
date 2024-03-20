// Hämta text/html
fetch('demo.html')
    .then(resp => resp.text())
    .then(data => {
        console.log(data);
        document.getElementById('outputHTML').innerHTML = data;
    }
    )
    .catch(err => console.error(err));

// Hämta JSON
fetch('demo.json')
    .then(resp => resp.json())
    .then(data => renderJSON(data))
    .catch(err => console.error(err));

function renderJSON(data) {
    // const json = JSON.parse(data); // Behövs ej
    console.log(data);
    document.getElementById('outputJSON').innerHTML = data.name;
}

// Hämta från ett API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => renderUsers(users))
    .catch(err => console.error(err));



// Skapa en asynkron-funktion
async function getData(){
    const url = 'https://fakestoreapi.com/products';
    let response = await fetch(url);
    // console.log(response);
    const json = await response.json();
    console.log(json);
    renderProducts(json);
}

getData();

function renderUsers(users) {
    console.log(users);
    let output = '<table class="table table-striped"><tr><th>Name</th><th>Email</th></tr>';
    users.forEach(user => {
        output += '<tr><td>' + user.name + '</td><td>' + user.email + '</td></tr>';
    });
    output += '</table>';

    document.getElementById('outputAPI').innerHTML = output;
}



function renderProducts(products) {
    // console.log(products);
    let output = '<table class="table table-striped"><tr><th>Title</th><th>Price</th></tr>';
    products.forEach(product => {
        output += '<tr><td>' + product.title + '</td><td>$' + product.price + '</td></tr>';
    });
    output += '</table>';

    document.getElementById('outputProducts').innerHTML = output;
}