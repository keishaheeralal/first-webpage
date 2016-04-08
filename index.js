function clickMe(){
  alert("Hello!");
}

var el = document.getElementById("click-me");
el.addEventListener("click", clickMe, false);
