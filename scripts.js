const convertButton = document.querySelector(".convert-button")
const moedaSelect = document.querySelector(".moeda-select")

function convertValues() {
    const inputMoedaValor = document.querySelector(".input-moeda").value
    const valorMoedaConvertida = document.querySelector(".valor-moeda-convertida")
    const valorMoeda = document.querySelector(".valor-moeda")

    const dolarToday = 5.2
    const euroToday = 6.2

    const convertedValue = inputMoedaValor / dolarToday


    if (moedaSelect.value == "dolar") {
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolarToday)
    }
    if (moedaSelect.value == "euro") {
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / euroToday)
    }


    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoedaValor)


    valorMoeda.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)


    valorMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(convertedValue)


}

convertButton.addEventListener("click", convertValues)
