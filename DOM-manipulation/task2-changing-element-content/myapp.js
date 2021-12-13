// document.getElementById('hello-world').innerText = "HELLO WORLD"; //
let pHello = document.getElementById('hello-world');
pHello.innerText = "HELLO WORLD";
pHello.innerHTML += '! MY NAME IS FADIL<span style="color: red";> AKBAR</span>';
pHello.outerHTML = '<h2 id="hello-world">HELLO WORLD! MY NAME IS FADIL<div style="color: red;"> AKBAR</div></h2>';

let divh1 = document.querySelectorAll('div h1')[0];
divh1.innerHTML += ' Hello';

let divh2 = document.querySelectorAll('div h1');
divh2[0].innerHTML += ' World';

