//referenciar elemtos do html
const frm = document.querySelector("form")
const resp1 = document.querySelector("#out100")
const resp2 = document.querySelector("#out50")
const resp3 = document.querySelector("#out10")

//criar um ouvinte de evento

frm.addEventListener("submit", (e) => {
     //previne o enviodo do form
    const saque = Number(frm.inSaque.value) //pega o valor do saque

    if (saque % 10 != 0) {
        alert("Valor inválido paras as notas disponíveis (R$ 100, 50, 10)")
        frm.inSaque.focus()
        return
    }

    const notasCem = Math.floor(saque / 100) //calcula quantidade de notas de cem
    let resto = saque % 100

    const notasCinquenta = Math.floor(resto / 50) //calcula quantidade de notas de cem

    resto = resto % 50
    const notasDez = Math.floor(resto / 10)

    if (notasCem > 0) {                                //exibe a quantidade de notas
        resp1.innerHTML = `Notas de R$ 100,00: ${notasCem} nota(s)`
    }

    if (notasCinquenta > 0) {
        resp2.innerHTML = `Notas de R$ 50,00: ${notasCinquenta} nota(s)`
    }

    if (notasDez > 0) {
        resp3.innerHTML = `Notas de R$ 10,00: ${notasDez} nota(s)`
    }

    e.preventDefault()


})
