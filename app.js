
const itemsList = document.querySelector('.items_list');

const items = [
    {name: 'King', price: '13.00', image: 'dgusterking.jpg',
        description: 'carne de hamburguer caseira (frango 100 gramas) ou (gado 80 gramas) , queijo (cheddar ou prato), mussarela, presunto, molho especial, bacon, tomate, alface, cebola'},
    {name: 'Big DGuster', price: '15.00', image: 'bigdguster.jpg',
        description: 'duas carnes de hamburguer 56 gramas, mussarela, presunto, ovo, bacon, queijo cheddar, tomate, alface, dois pães bola'},
    {name: '090', price: '10,75', image: '090.jpg',
        description: 'carne de hamburguer 56 gramas, mussarela, presunto, molho especial, queijo cheddar, tomate, alface, pão bola'},
    {name: '012', price: '8,75', image: '012.jpeg',
        description: 'carne de hamburguer 56 gramas, mussarela, presunto, tomate, alface, pão bola'},
    {name: 'Marvel', price: '10,50', image: 'marvel.jpeg',
        description: 'carne de hamburguer 56 gramas, fatias de bacon, mussarela, presunto, molho barbecue, tomate e alface'},
    {name: 'Pizza Burger', price: '9,75', image: 'pizzaburger.jpeg',
        description: 'calabresa, mussarela, presunto, bacon, cebola, orégano, tomate, pão bola'},
    {name: '001', price: '8,25', image: '001.jpeg',
        description: 'carne de hamburguer 56 gramas, mussarela, pão bola'},
    {name: 'Fitness', price: '7,75', image: 'fitness.jpeg',
        description: 'frango desfiado, cenoura ralada, azeitona fatiada, presunto, creme de leite, queijo caturpiry, pão de forma'},
    {name: 'Misto Quente', price: '5,50', image: 'mistoquente.jpeg',
        description: 'mussarela e presunto, pão bola'},
    {name: 'Misto Especial', price: '6,75', image: 'mistoespecial.jpeg',
        description: 'mussarela, presunto, queijo cheddar, pão bola'},
    {name: '007', price: '10,75', image: '007.jpeg',
        description: 'carne hamburguer 56 gramas, mussarela, presunto, ovo, bacon, tomate, alface, pão bola'},
    
];

document.addEventListener('DOMContentLoaded', () => {

    let output = '';

    items.forEach(({name, price, image, description}) => {
        output += `<div class="item_card">
        
        <img class="item_image" src="assets/${image}" alt="x-burger">
        
        <div class="card_content">
            <h2>${name}</h2>
            <p class="item_price"><span class="less_price">R$</span>${price}</p>
            <div class="item_rating">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
            </div>
            <div class="item_options">
                <a class="option_detail" href="item_details.html?name=${name}&price=${price}&image=${image}&description=${description}">Ver detalhes</a>
                <div class="icon_option">
                    <i class='bx bx-chat'></i>
                </div>
                <div class="icon_option">
                    <i class='bx bx-heart'></i>
                </div>
            </div>
        </div>
        </div>`
    })

    itemsList.innerHTML = output;

});