// function teste (){
//     alert("Mago")
// }
// teste()
// // Arrow Fuction

const clicou = () => {
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt( document.getElementById("num2").value)
    let soma = num1+num2
    document.getElementById("resultado").innerText =soma
}

