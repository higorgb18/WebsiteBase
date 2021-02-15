document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#quantidade").addEventListener("change", atualizarPreco)   
document.querySelector("#js").addEventListener("change", atualizarPreco)   
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)   
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)   
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    let plural
    if(prazo==1){
        plural = "semana"
    } else {
        plural = "semanas"
    }
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} ${plural}`// apenas o label com atributo = prazo
    atualizarPreco()
})   

function atualizarPreco(){
    const quantidade = document.querySelector("#quantidade").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = quantidade * 100;
    let taxaUrgencia = 1-prazo*0.1
    preco = 1 + (preco*taxaUrgencia)

    if(temJS){
        preco = preco *1.1 //preco + 10% do valor
    }
    if(incluiLayout){
        preco = preco + 500
    }

    
    document.querySelector("#preco").innerHTML = `Valor: R$ ${preco.toFixed(2)}`
}