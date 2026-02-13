const convertButton = document.querySelector(".convert-button")
const moedaSelect = document.querySelector(".moeda-select")

function convertValues() {
    const inputMoedaValor = Number(document.querySelector(".input-moeda").value)
    const valorReal = document.querySelector(".valor-moeda-convertida")
    const valorConvertido = document.querySelector(".valor-moeda")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 5.0
    const bitcoinToday = 69000

    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoedaValor)

    if (moedaSelect.value === "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / dolarToday)

    } else if (moedaSelect.value === "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / euroToday)

    } else if (moedaSelect.value === "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValor / libraToday)

    } else if (moedaSelect.value === "bitcoin") {
        valorConvertido.innerHTML = `₿ ${(inputMoedaValor / bitcoinToday).toFixed(8)}`
    }
}

function changeMoeda() {
    const moedaNome = document.getElementById("moeda-americana")
    const currencyImage = document.querySelector(".moeda-img")

    if (moedaSelect.value === "dolar") {
        moedaNome.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"

    } else if (moedaSelect.value === "euro") {
        moedaNome.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    } else if (moedaSelect.value === "libra") {
        moedaNome.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"

    } else if (moedaSelect.value === "bitcoin") {
        moedaNome.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}

moedaSelect.addEventListener("change", changeMoeda)
convertButton.addEventListener("click", convertValues)
