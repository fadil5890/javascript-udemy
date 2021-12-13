let element = document.createElement('div');

element.style.cssText = 'width:200px; height:20px; background:goldenrod;';
element.onclick = function(){ alert('Div has shown!');};

// document.body.appendChild(element);

let target = document.getElementsByClassName('purplediv');
document.body.insertBefore(element,target[0]);

