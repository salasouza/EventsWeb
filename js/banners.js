var ban = document.querySelectorAll(".banner");
console.log(ban); 

 for(const banner of ban) {
  banner.addEventListener("click", callback);
}

function callback() {
  this.style.backgroundColor = "blue";
  var src = this.getAttribute("src");
  console.log("O banner clicado foi - TESTE BANNER: " + src);
}