let altura = document.getElementById("altura");
let mostraaltura =document.getElementById("mostra--altura");
let massa = document.getElementById("massa");
let mostramassa =document.getElementById("mostra--massa");
let resultado = document.getElementById("mostra--resultado");
const mostraAltura=()=>{
    mostraaltura.innerHTML=" Sua altura é: "+ altura.value+" metros";
}
const mostraMassa=()=>{
    mostramassa.innerHTML=" Sua massa é: "+ massa.value+ " kg";
}
const setAltura=(id)=>{
    if(id=='+'){
    altura.value= altura.value+0.01;
}else{
    altura.value= altura.value-0.01;
}
}
const setMassa=(id)=>{
    if(id=='+'){
    massa.value= massa.value+0.01;
}else{
    massa.value= massa.value-0.01;
}
}
const calculaIMC = () => {
    let alturaCalc = altura.value;
    let massaCalc = massa.value;
    if (alturaCalc >= 0 && alturaCalc <= 2.9) {

        let imc = (massaCalc / (alturaCalc * alturaCalc)).toFixed(2);
        switch (true) {
            case imc < 18.5:
                document.getElementById("mostra--resultado").innerHTML = "<h2 id='abaixo--peso'>Seu imc é " + imc + " e é considerado abaixo do peso</h2>"
            break
                case imc >= 18.5&&imc<24.9:
                document.getElementById("mostra--resultado").innerHTML = "<h2 id='peso--ideal'>Seu imc é " + imc + " e é considerado o peso idela</h2>"
                break
                case imc >= 25&&imc<29.9:
     
                document.getElementById("mostra--resultado").innerHTML = "<h2 id='peso--excesso'>Seu imc é " + imc + " e é considerado excesso de peso</h2>"
                break
                case imc >=30:
                document.getElementById("mostra--resultado").innerHTML = "<h2 id='peso--obesidade'>Seu imc é " + imc + " e é considerado obesidade</h2>"
                break
            }
    }
}