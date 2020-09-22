  const fig = document.querySelectorAll("img")
  
  for(const f of fig) {
    
    f.addEventListener("click", function(i){
      console.log("O banner clicado foi - TESTE B: ", f);
    })
    
  }