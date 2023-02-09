//import getAge from "./controller.js";
let nameInput = "";
let yearInput = "";
let age = "";

function updateAge() {
  age = getAge(yearInput);
  view();
}

function view() {
  document.getElementById("main").innerHTML = `
  <input type="number" placeholder="Year of birth" oninput="yearInput = this.value" />
  <input type="text" placeholder="Name" oninput="nameInput = this.value" />
  <button onclick="updateAge()">CHECK</button> 
  <br/>
  <br/>
  <div>Name: ${nameInput}</div>
  <div>Age: ${age}</div> 
  `;
}
view();
