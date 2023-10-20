var links = document.getElementsByClassName("tab-links");
var conts = document.getElementsByClassName("tab-cont");

function changeTab(newLink){
  for(link of links){
    link.classList.remove("active-link");
  }
  for(cont of conts){
    cont.classList.remove("active-cont");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(newLink).classList.add("active-cont");
  
  
}

var temp = document.getElementById("sideBar")
function openMenu(){
  temp.style.marginRight = "0px";
}

function closeMenu(){
  temp.style.marginRight = "-200px";
}