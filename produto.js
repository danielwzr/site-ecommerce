const listaDeProdutos = [
    {
        nome: "Switch Purple 10 unidades",
        preco: 29.90,
        precoPix: 27,
        imagem: "img/purple.jpg",
        id: 1
    },
    {
        nome: "Switch Red 10 unidades",
        preco: 29.90,
        precoPix: 27,
        imagem: "img/red.jpg",
        id: 2
    },
    {
        nome: "Switch Blue 10 unidades",
        preco: 29.90,
        precoPix: 27,
        imagem: "img/blue.jpg",
        id: 3
    },
    {
        nome: "Escova de Limpeza para teclado e acessórios",
        preco: 25.90,
        precoPix: 24,
        imagem: "img/escova.jpg",
        id: 4
    },    
]
//console.log(window.name)
var id = window.location.href.substring(38);
console.log(id);


const produto = listaDeProdutos.filter(produto => produto.id == id)[0];
console.log(produto);

const produtoContainer = document.getElementById("produto")
produtoContainer.innerHTML = `
<img src=${produto.imagem} alt="">
<div class="produto-detalhes">
    <h1>${produto.nome}</h1>

    <div>
        <span class="preco">R$ ${produto.preco}</span>
        <br>
        <span class="parcelado"><b>4x</b> de <b>R$ ${(produto.preco / 4).toFixed(1)}</b></span>
    </div>

    <span class="pix"><b>R$ ${produto.precoPix}</b> com PIX (-5%)</span>

    <a href="#" id="btn-comprar">COMPRAR AGORA</a>

    <div class="produto-frete">
        <span>Calcular o Frete</span>
        <div>
            <input type="text" placeholder="Digite o seu CEP">
            <a href="#" id="btn-frete">OK</a>
        </div>

    </div>
</div>`;

//$("a").attr("href", '?fruit=' + 'apple');