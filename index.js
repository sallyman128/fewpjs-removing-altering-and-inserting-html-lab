// Write your code here!
document.querySelector("main#main").remove();

let newHeader = document.createElement('h1');
newHeader.id = "victory";
document.body.appendChild(newHeader);
newHeader.innerHTML = 'Salmaan is the champion';