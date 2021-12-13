let pStyle = document.getElementById('hello-world');

pStyle.style.background = "greenyellow";
/*pStyle.style.color = "red";
pStyle.style.fontFamily = "helvetica";

pStyle.style.cssText = " background:greenyellow; color:red; font-size:20px; ";

pStyle.style.cssText += " font-family:helvetica; height:100px ";*/

console.log(getComputedStyle(pStyle));