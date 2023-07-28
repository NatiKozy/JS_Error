const form = document.getElementById('form');
console.log(form);
const select = document.getElementById('select');
console.log(select);
const number = document.getElementById('number');
console.log(number);
const button = document.getElementById('button');
console.log(button);
const errorDiv = document.getElementById('error');
console.log(errorDiv);
const dataDiv = document.getElementById('data');
console.log(dataDiv);

let arr = [];
function getData() {
fetch ('https://swapi.nomoreparties.co/planets/1')
.then(function(response){
    return response.json();
})
.then (function(user){
    console.log(user)
    // getUsers(user);
})

}
getData();

button.addEventListener('click', getData);


//не то 
    // function getUsers(arr) {
    //     dataDiv.innerHTML = '';
    //     Object.keys(arr).forEach(item=>{
    // createTemplate(item)
    //     })
    // }

    // function createTemplate(item){
    //     const{name, diameter,climate} = item;
    //     const template =
    //     `<h1>${name}</h1>
    //     <p>CLIMATE:${climate}<p>
    //     <p>DIAMETER:${diameter}<p>
    //     `
    //     const div = document.createElement('div');
    //     div.innerHTML = template;
    //     dataDiv.append(div);
    // }
