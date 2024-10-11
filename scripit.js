function Multiplicar () {
    const n1 = document.querySelector("#n1").value
    const n2 = document.querySelector("#n2").value
    const n3 = document.querySelector("#n3").value

    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = `Multiplicar: ${n1*n2*n3}`
}

const button = document.querySelector("button")
button.addEventListener("click", multiplicar)
