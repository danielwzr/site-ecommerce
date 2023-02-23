const btnFazerPedido = document.getElementById("fazer-pedido");
const carrinho = [
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
    }
]
var mensagem = `Olá, tenho interesse nos seguintes itens: `;
carrinho.forEach(item => {
    mensagem = mensagem + "%0a→ " + 1 + " unidade do produto " + item.nome;
})

btnFazerPedido.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send?phone=3497743681&text=" + mensagem);
})



const ulCarrinho = document.getElementById("carrinho-lista");
carrinho.forEach(produto => {
    const liProduto = document.createElement("li");
    liProduto.innerHTML = `
    <li class="carrinho-item">
    <img src=${produto.imagem} alt=${produto.nome}>
    <div class="carrinho-item-text">
        <h3>
            ${produto.nome}
        </h3>
        <span>R$ ${produto.preco}</span>
        <div>
            <a href="#" id="carrinho-item-menos">-</a>
            <input type="text" value=1>
            <a href="#" id="carrinho-item-mais">+</a>
        </div>
    </div>
</li>`
    ulCarrinho.appendChild(liProduto)
})



/* ADICIONA AO CARRINHO */
const qtdCarrinho = document.getElementById("qtd-carrinho");
window.localStorage.setItem("qtdCarrinho", carrinho.length);
qtdCarrinho.innerText = carrinho.length;