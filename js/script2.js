
const banners = document.querySelectorAll("img");

for(const banner of banners) {
    
 banner.addEventListener("click", callback);
}

function callback() {
    const src = this.getAttribute("class");
    alert("O banner clicado foi - TESTE A: " + src);
  }