var cartItemTemplate = `<div class='row mb-4 d-flex justify-content-between align-items-center cartItem' id='{{cartitem.id}}'>
<div class='col-md-2 col-lg-2 col-xl-2'>
  <img
    src='{{cartitem.ImageUrl}}'
    class='img-fluid rounded-3' alt='{{cartitem.name}}'>
</div>
<div class='col-md-3 col-lg-3 col-xl-3'>
  <h6 class='text-muted cartItemCategory{{cartitem.id}}'>{{cartitem.category}}</h6>
  <h6 class='text-black mb-0 cartItemName{{cartitem.id}}'>{{cartitem.name}}</h6>
</div>
<div class='col-md-3 col-lg-3 col-xl-2 d-flex'>
  <button class='btn btn-link px-2'
    onclick='onDecrementClick({{cartitem.id}})'>
    <i class='fas fa-minus'></i>
  </button>

  <input id='cartItem-quantity-{{cartitem.id}}' min='0' name='quantity' value='{{cartitem.quantity}}' type='number'
    class='form-control form-control-sm' />

  <button class='btn btn-link px-2'
    onclick='onIncrementClick({{cartitem.id}})'>
    <i class='fas fa-plus'></i>
  </button>
</div>
<div class='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
  <h6 class='mb-0'>$ {{cartitem.price}}</h6>
</div>
<div class='col-md-1 col-lg-1 col-xl-1 text-end'>
  <a href='#!' class='text-muted'><i class='fas fa-times'></i></a>
</div>
</div>

<hr class='my-4'>`

let cartItems=[
    {
        id:1,
        ImageUrl:'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_150.jpg',
        name:'French Fries',
        category:'Appetizers',
        quantity:'1',
        price:'5.99',
    },
    {
        id:4,
        ImageUrl:'https://cdn.pixabay.com/photo/2014/10/22/18/43/rice-498688_150.jpg',
        name:'Combination Fried Rice',
        category:'Signature Dishes',
        quantity:'1',
        price:'12.99',
    }
]

let cartItemsTemplate = '';

cartItems.forEach(element => {
    let template=cartItemTemplate;
    for (const property in element) {
        template = template.replaceAll(`{{cartitem.${property}}}`, `${element[property]}`);
      }
    cartItemsTemplate += template;
});

const GetTotalItemsCount = () =>{
    //cartItem-quantity-1
    let count = 0;
    for(let i =0; i<cartItems.length; i++){
        count += parseInt(document
        .querySelector(`#cartItem-quantity-${cartItems[i].id}`).value);
    }
    return count;
}

const GetTotalPrice = () =>{
    //cartItem-quantity-1
    let price = 0;
    for(let i =0; i<cartItems.length; i++){
        price += parseInt(document
        .querySelector(`#cartItem-quantity-${cartItems[i].id}`).value) * cartItems[i].price;
    }
    return price;
}

const onIncrementClick = (e) =>{
    
    document.querySelector(`#cartItem-quantity-${e}`).stepUp();
    document.querySelector('#totalItemsCount').innerHTML = `items ${GetTotalItemsCount()}`;
    document.querySelector('#totalItemsPrice').innerHTML = `\$ ${GetTotalPrice()}`;
}

const onDecrementClick = (e) =>{
    document.querySelector(`#cartItem-quantity-${e}`).stepDown();
    document.querySelector('#totalItemsCount').innerHTML = `items ${GetTotalItemsCount()}`;
    document.querySelector('#totalItemsPrice').innerHTML = `\$ ${GetTotalPrice()}`;
}

const orderSubmit = () =>{
    let table_number = document.querySelector(`#table-no`).value;
    let orderItemsCount = document.querySelectorAll('.cartItem').length;
    let orderItems = [];
    let order = {};
    for(let i =0; i<orderItemsCount; i++){
        let item_id = document.querySelectorAll('.cartItem')[i].id;
        let quantity = parseInt(document
            .querySelector(`#cartItem-quantity-${item_id}`).value);
        if(quantity > 0)
            orderItems.push({item_id,quantity})
    }
    order = {table_number, orderItems}
    console.log(JSON.stringify(order));
}

document
.querySelector('#AppendCartItems').innerHTML = cartItemsTemplate;

document
.querySelector('#totalItemsCount').innerHTML = `items ${GetTotalItemsCount()}`;

document
.querySelector('#totalItemsPrice').innerHTML = `\$ ${GetTotalPrice()}`;

document
.querySelector('#totalItemsPrice').innerHTML = `\$ ${GetTotalPrice()}`;

document
  .querySelector('#order-submit')
  .addEventListener('click', orderSubmit);