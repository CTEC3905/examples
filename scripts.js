const captions = document.getElementsByTagName("figcaption");
const fails = ["not addressed", "0-10", "10-20", "20-30", "30-40"];
const passes = ["partially addressed", "40-50", "50-60", "60-70"];
const firsts = ["fully addressed", "70-80", "90-100"];
for(let i=0; i < captions.length; i++) {
  captions[i].style.backgroundColor = "gray";
  if(fails.includes(captions[i].innerHTML)) {
    captions[i].style.backgroundColor = "red";
  }
  if(passes.includes(captions[i].innerHTML)) {
    captions[i].style.backgroundColor = "yellow";
  }
  if(firsts.includes(captions[i].innerHTML)) {
    captions[i].style.backgroundColor = "green";
  }
}

