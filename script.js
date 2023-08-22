
function Areac() {
    let c=Math.PI
    let d=Number(prompt("informe o valor do raio do círculo"));
    let resultado=c*d**2;
    alert("O resultado da área do círculo é "+resultado+"m²");
    document.getElementById('um').innerHTML = resultado;
  }
         

function Arear(){
    let b=Number (prompt("Informe o valor de b"));
    let h=Number (prompt("Informe o valor h"));
    let resultado=b*h;
    alert("O resultado da área é "+resultado+"m²")
    document.getElementById('tres').innerHTML = resultado;
}

function Areaq(){
    let l1=Number (prompt("Informe o valor de l1"));
    let l2=Number (prompt("Informe o valor l2"));
    let resultado=l1*l2;
    alert("O resultado da área é "+resultado+"m²")
    document.getElementById('dois').innerHTML = resultado;
}

function Areat(){
    let a=Number (prompt("Informe o valor da base maior"));
    let b=Number (prompt("Informe o valor da base menor"));
    let c=Number (prompt("Informe o valor da altura do trapézio"));
    let d=2
    let resultado=a+b*c/d;
    alert("O resultado da área é "+resultado+"m²");
    document.getElementById('quatro').innerHTML = resultado;
}

function Areatri(){
    let b=Number (prompt("Informe o valor de b"));
    let h=Number (prompt("Informe o valor da altura"));
    let c=2
    let resultado=b*h/2;
    alert("O resultado da área é "+resultado+"m²")
    document.getElementById('cinco').innerHTML = resultado;
}
