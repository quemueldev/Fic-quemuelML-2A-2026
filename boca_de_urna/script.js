let podeVotar = false
const init = () =>{
    let age = document.getElementById("age").value
    let agePlace = document.getElementById("result")
    return { age, agePlace }
}
const validate = (age) =>{
    if (age < 16) return "n";
    if (age > 15 && age < 18) return "p";
    if (age > 69) return "p";
    if (age > 17) return "o";
}
const voto = () =>{

}
const func = ()=>{
   let { age, agePlace } = init()
   let result = validate(age) 
   switch(result){
    case "n":
        agePlace.innerHTML = "não pode votar"
        alert("você não pode votar")
        break
    case "p":
        agePlace.innerHTML = "pode votar/não é obrigado a votar"
        podeVotar = true
        alert("você pode votar, mas não é obrigado a votar")
        break
    case "o":
        agePlace.innerHTML = "pode votar/é obrigado a votar"
        podeVotar = true
        alert("você pode votar, e é obrigado a votar")
        break
    default:
        agePlace.innerHTML = "idade inválida"
        break
    }
    if (podeVotar) {
        document.getElementById("bocaDeUrna").style.display = "block"
    }
}
const func2 = () =>{
    let voto = document.getElementById("voto").value
    let resultVoto = document.getElementById("resultadoVoto")
    while (voto != 80){
        resultVoto.innerHTML = "voto inválido"
        break
    }
    if (voto == 80) {
        resultVoto.innerHTML = "candidato correto"
    }
}


