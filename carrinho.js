const btnFazerPedido = document.getElementById("fazer-pedido");
const carrinho = JSON.parse(localStorage.getItem("carrinho"));

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
    <a href="#" class="btn-remover" onclick="removerDoCarrinho(${produto.id})" value=${produto.id}>Remover</button>
    </li>`
    ulCarrinho.appendChild(liProduto)
})

function removerDoCarrinho(id){
    console.log(carrinho.filter((obj) => obj.id !== id));
}



/* ADICIONA AO CARRINHO */
const qtdCarrinho = document.getElementById("qtd-carrinho");
qtdCarrinho.innerText = window.localStorage.getItem("qtdCarrinho");