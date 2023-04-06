/*let button =
document.getElementById(`changedBackground`);

button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
    button.style.padding = '8px 16px';
    body.style.justifyContent = 'center'
    body.style.textAlign = 'center';
});*/

/*let button = document.querySelector('button');
function once() {
    console.log('done.');
    button.removeEventListener('click', once);
}
button.addEventListener('click', once)*/

document.body.addEventListener('click', event => {
    if(event.target.nodeName == 'BUTTON'){
        console.log('clicked', event.target.textContent);
    }
})

// tials in dom(event object)
const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  e.target.style.padding = '12px', '13px', '25px', '25px';
  e.target.style.borderRadius = '50px';
  console.log(e);
}
btn.addEventListener("click", bgChange);


const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener(
  "keydown",
  (event) => (output.textContent = `You pressed "${event.key}".`)





  
);


const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});
form.style.display = 'flex';
form.style.alignContent = 'center';
form.style.alignItems = 'center';
form.style.textAlign = 'center';



