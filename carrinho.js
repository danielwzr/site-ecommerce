const btnFazerPedido = document.getElementById("fazer-pedido");
const ulCarrinho = document.getElementById("carrinho-lista");
var carrinho = JSON.parse(localStorage.getItem("carrinho"));

btnFazerPedido.addEventListener("click", () => {
    var mensagem = `Olá, tenho interesse nos seguintes itens: `;
    carrinho.forEach(item => {
        console.log(item)
        mensagem = mensagem + "%0a→ " + item.value + " unidade do produto " + item.nome;
    })
    window.open("https://api.whatsapp.com/send?phone=3497743681&text=" + mensagem);
})


function montaCarrinho(){
    carrinho.forEach(produto => {
        const liProduto = document.createElement("li");
        liProduto.className = 'carrinho-item';
        liProduto.innerHTML = `
        <a href="produto.html?id=${produto.id}">
        <img src=${produto.imagem} alt=${produto.nome}>
        </a>
        <div class="carrinho-item-text">
        <a href="produto.html?id=${produto.id}">
            <h3>
                ${produto.nome}
            </h3>
            <span>R$ ${produto.preco}</span>
            </a>
            <div>
                <a href="#" id="carrinho-item-menos">-</a>
                <input type="text" value=1>
                <a href="#" id="carrinho-item-mais">+</a>      
            </div>    
        </div>
        <a href="#" class="btn-remover" onclick="removerDoCarrinho(carrinho,${produto.id})" value=${produto.id}><img src="img/icons/lixeira.svg"></button>`
        ulCarrinho.appendChild(liProduto)
    })
    console.log(carrinho)
}  



// STARTA O CARRINHO
montaCarrinho(carrinho)

/* ADICIONA AO CARRINHO */
const qtdCarrinho = document.getElementById("qtd-carrinho");
qtdCarrinho.innerText = window.localStorage.getItem("qtdCarrinho");

// REMOVE UM ITEM DO CARRINHO
function removerDoCarrinho(array, id) {
    carrinho = array.filter((obj) => obj.id !== id);
    ulCarrinho.innerHTML = "";
    montaCarrinho();
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}