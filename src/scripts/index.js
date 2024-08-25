const inputsColor = [...document.querySelectorAll("input[type=color]")];

const colors = [
  "#5f3dc4",
  "#7048e8",
  "#7950f2",
  "#845ef7",
  "#212529",
  "#495057",
  "#ced4da",
  "#f1f3f5",
  "#c92a2a",
  "#087f5b",
  "#f08c00",
  "#c6c7cd",
];

colors.forEach((style, index) => {
  inputsColor[index].value = style;
});

function variaveisCor(lista){
  let variaveis = [];
  for(i=0;i<inputsColor.length;i++){
    variaveis.push(`--color-${i+1}: ${inputsColor[i].value}`);
  }
  return variaveis;
}

function inputScale(string){
  let x = string.split(",").map(Number);
  let y = x.map(e =>{
     return e/16;
  })
  let variaveis = [];
  for(i=0;i<y.length;i++){
    variaveis.push(`--font-size-${i+1}: ${y[i]}rem`)
  }
  return variaveis;
}

function copyInf(){
  let z = document.querySelector("#font-scale");
  let buttonCopy = document.querySelector(".form__buttons--copy");
  buttonCopy.addEventListener("click", (event) =>{
    event.preventDefault();
    let y = variaveisCor(inputsColor);
    let yy = inputScale(z.value);
    let yyy = [...y,...yy];
    navigator.clipboard.writeText(yyy)
    console.log(inputScale(z.value))
    console.log(variaveisCor(inputsColor))
  })
}
copyInf()

function saveInf(){
  let z = document.querySelector("#font-scale");
  let buttonSave = document.querySelector(".form__buttons--save");
  buttonSave.addEventListener("click",(event) =>{
    event.preventDefault();
    let variaveis = [];
    for(i=0;i<inputsColor.length;i++){
      variaveis.push(inputsColor[i].value);
    }
    localStorage.setItem("PALETA2",JSON.stringify(variaveis));
    localStorage.setItem("SCALE2",JSON.stringify(z.value));
  })
  if(localStorage.getItem("PALETA2")){
    let x = JSON.parse(localStorage.getItem("PALETA2"))
    x.forEach((style, index) => {
      inputsColor[index].value = style;
    });
  }if(localStorage.getItem("SCALE2")){
    z.value = JSON.parse(localStorage.getItem("SCALE2"))
  }
}
saveInf()

