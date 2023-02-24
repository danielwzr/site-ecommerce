/* MONTA PRODUTOS HTML */
const ulProdutos = document.getElementById("produtos-lista");
const listaDeProdutos = [
    {
        nome: "Switch Purple",
        preco: 29.90,
        precoPix: 27,
        imagem: "img/purple.jpg",
        id: 1
    },
    {
        nome: "Switch Red",
        preco: 29.90,
        precoPix: 27,
        imagem: "img/red.jpg",
        id: 2
    },
    {
        nome: "Switch Blue",
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

listaDeProdutos.forEach(produto => {
    const li = document.createElement("li");
    li.innerHTML = `
    <li class="produto-item">
    <a href="produto.html?id=${produto.id}">
        <img src=${produto.imagem} alt="${produto.nome}">
    </a>
        <p>${produto.nome}</p>
        <span>R$ ${produto.preco}</span>
        <br>
      <!--  <a href="#" class="btn-add-carrinho">Adicionar ao carrinho</a> -->
    </li>`;
    ulProdutos.appendChild(li);
})
/* MONTA PRODUTOS HTML */


/* BUSCA QTD DE ITENS NO CARRINHO */
const qtdCarrinho = document.getElementById("qtd-carrinho");
qtdCarrinho.innerText = window.localStorage.getItem("qtdCarrinho");
