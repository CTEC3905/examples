// colouring for grade categories
const captions = document.getElementsByTagName("figcaption");
const middles = document.getElementsByClassName("mid");
const fails = ["not addressed", "0-10", "10-20", "20-30", "30-40"];
const passes = ["partially addressed", "40-50", "50-60", "60-70"];
const firsts = ["fully addressed", "70-80", "90-100"];

function colouring(items) {
  for(let i=0; i < items.length; i++) {
    const item = items[i];
    item.classList.add("gray");
    if(fails.includes(item.innerText)) {
      item.classList.remove("gray");
      item.classList.add("red");
    }
    if(passes.includes(item.innerText)) {
      item.classList.remove("gray");
      item.classList.add("yellow");
    }
    if(firsts.includes(item.innerText)) {
      item.classList.remove("gray");
      item.classList.add("green");
    }
  }
}
colouring(captions);
colouring(middles);


// numbers for example gifs
const exs = document.querySelectorAll("[id^=example]");
for(let e=0; e < exs.length; e++) {
  let node = document.createElement("div");
  let num = parseInt(e) + 1;
  let text = document.createTextNode(num);
  node.appendChild(text);
  node.classList.add("num");
  exs[e].appendChild(node);
}


// modals for all images
const images = document.getElementsByTagName("img");
for(let i=0; i < images.length; i++){
  images[i].addEventListener("click", toggleModal);
}
function toggleModal() {
  let modal = document.createElement("div");
  document.body.appendChild(modal);
  modal.id = "modal";
  let img = event.srcElement.cloneNode();
  modal.appendChild(img);
  modal.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}


// print rubric only
let heading = document.getElementById("heading");
let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "rubric.css");
link.setAttribute("media", "print");
const printRubric = document.getElementById("rubric");
const printAll = document.getElementById("everything");
printRubric.addEventListener("click", () => {
  document.head.appendChild(link);
  heading.innerText = "CTEC3905 Marking Rubric";
  setTimeout(() => {
    window.print();
  }, 500);  // 0.5 seconds
  setTimeout(() => {
    document.head.removeChild(link);
    heading.innerText = "CTEC3905 Past Student Work";
  }, 500);  // 0.5 seconds
});
printAll.addEventListener("click", () => {
  window.print();
});


// deadline reminder
const days = document.querySelector("#banner span");
const deadline = new Date("January 07, 2019 16:00:00");
let today = new Date();
const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
let diff = Math.floor((deadline - today) / oneDay);
let plural = diff==1 ? "" : "s";
days.innerText = `${diff} day${plural}`;
