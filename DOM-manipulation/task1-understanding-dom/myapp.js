console.log(
    document.getElementById('hello-world'),
    document.getElementsByClassName('container'),
    document.querySelectorAll('.container'),
    document.querySelector('.container'),
    document.querySelectorAll('div.container > h1, div.container > p[id="hello-world"]'),
    document.querySelectorAll('div.container > h1, div.container > p#hello-world')
);
console.dir(document.getElementById('hello-world'));
