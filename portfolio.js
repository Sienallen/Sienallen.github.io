var links = document.getElementsByClassName("tab-links");
var conts = document.getElementsByClassName("tab-cont");

function changeTab(newLink){
  console.log(this);
  for(link of links){
    link.classList.remove("active-link");
  }
  for(cont of conts){
    cont.classList.remove("active-cont");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(newLink).classList.add("active-cont");
  
  
}