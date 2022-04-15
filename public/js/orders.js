
const orderItemHandler = (event) => {
    event.preventDefault();
    console.log(event);
    
    const response = fetch(`/api/orderitems/${event.target.dataset.menuitem_id}`, {
        method: 'PUT',
        body: JSON.stringify({ "served": true }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response )=>{
        console.log(response);
        document.location.replace('/orders');

      }).catch((error) =>{
        console.log(error);
      });
  

  };

  const orderDelHandler = (event) => {
    event.preventDefault();
    console.log(event);
    
    const response = fetch(`/api/orders/${event.target.dataset.order_id}`, {
        method: 'DELETE',
      }).then((response )=>{
        console.log(response);
        document.location.replace('/orders');

      }).catch((error) =>{
        console.log(error);
      });
  

  };

document
.querySelectorAll('.menuItemBtn').forEach(item => {
  item.addEventListener('click', orderItemHandler)
});

document
.querySelectorAll('.orderDeleteBtn').forEach(item => {
  item.addEventListener('click', orderDelHandler)
});