const convertButton = document.querySelector(".convert-button")
const moedaSelect = document.querySelector(".moeda-select")

async function convertValues() {
    const inputMoedaValor = Number(document.querySelector(".input-moeda").value)
    const valorReal = document.querySelector(".valor-moeda-convertida")
    const valorConvertido = document.querySelector(".valor-moeda")

    const cotacoes = await getCotacoes()




    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoedaValor)

    if (moedaSelect.value === "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValor / cotacoes.dolar)

    } else if (moedaSelect.value === "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValor / cotacoes.euro)

    } else if (moedaSelect.value === "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValor / cotacoes.libra)

    } else if (moedaSelect.value === "bitcoin") {
        valorConvertido.innerHTML = `₿ ${(inputMoedaValor / cotacoes.bitcoin).toFixed(8)}`
    }
}

async function getCotacoes() {
    const response = await fetch(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL",
        { cache: "no-store" }
    )


    const data = await response.json()

    return {
        dolar: Number(data.USDBRL.ask),
        euro: Number(data.EURBRL.ask),
        libra: Number(data.GBPBRL.ask),
        bitcoin: Number(data.BTCBRL.ask)
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
