const calcularPorcentage = (value, percentage) =>{
    const valorPorcentagem = (value / 100) * percentage;
    return valorPorcentagem;
}


const calcularGorgeta = (event) =>{
    const tagValorTotal = document.getElementById("valorTotal");
    const tagValorGorjeta = document.getElementById("valorGorjeta");
    const tagValorOriginal = document.getElementById("valorOriginal");

    event.preventDefault();
    const formDate = new FormData(event.target);
    const value = formDate.get("value");
    const percentage = formDate.get("percentage");

    const valorPorcentagem = calcularPorcentage(value, percentage);

    tagValorOriginal.textContent = value + "R$";
    tagValorGorjeta.textContent = valorPorcentagem + "R$";
    tagValorTotal.textContent = Number(value) + valorPorcentagem + "R$";

    console.log(value, percentage);

}