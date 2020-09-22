var banners = document.querySelectorAll(".banner");
console.log(banners); 

 for(const banner of banners) {
  banner.addEventListener("click", callback);
}

function callback() {
  this.style.backgroundColor = "blue";
  var src = this.getAttribute("src");
  console.log("O banner clicado foi - TESTE BANNER: " + src);
}