const btnFazerPedido = document.getElementById("fazer-pedido");
const ulCarrinho = document.getElementById("carrinho-lista");
var carrinho = JSON.parse(localStorage.getItem("carrinho"));

btnFazerPedido.addEventListener("click", () => {
    var mensagem = `Olá, tenho interesse nos seguintes itens: `;
    carrinho.forEach(item => {
        console.log(item)
        mensagem = mensagem + "%0a→ " + 1 + " unidade do produto " + item.nome;
    })
    window.open("https://api.whatsapp.com/send?phone=3497743681&text=" + mensagem);
})


function montaCarrinho() {
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
}


// STARTA O CARRINHO
montaCarrinho(carrinho)

/* BUSCA QUANTIDADE DE ITENS NO CARRINHO */
const qtdCarrinho = document.getElementById("qtd-carrinho");
qtdCarrinho.innerText = window.localStorage.getItem("qtdCarrinho");

// REMOVE UM ITEM DO CARRINHO
function removerDoCarrinho(array, id) {
    carrinho = array.filter((obj) => obj.id !== id);
    ulCarrinho.innerHTML = "";
    montaCarrinho();
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    localStorage.setItem("qtdCarrinho", carrinho.length);
    qtdCarrinho.innerText = carrinho.length;
}



/* monta resumo do carrinho
var carrinhoResumo = document.getElementById("carrinho-resumo");
carrinhoResumo.innerHTML = `                <h2>Resumo</h2>
                <div>
                    <span>Subtotal R$ </span>
                    <span>Frete R$ 19,90 <br> Rua Major Gote, Patos de Minas - MG <br> 38702-090</span>
                </div>
                <h2>Total</h2>
                <h3>R$ 75,70</h3>
                <a href="#" id="fazer-pedido">FINALIZAR COMPRA PELO WHATSAPP</a>`  */