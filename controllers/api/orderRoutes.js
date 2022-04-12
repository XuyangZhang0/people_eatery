const router = require('express').Router();
const { Order, OrderItem } = require('../../models');

router.post('/', async (req, res) => {
  //bulk create
  /* req.body should look like this...
    {
      guest_id: 1, //uuid
      table_number: 0,
      orderItems: [
          {
              quantity:1,
              served: false,
              item_id: 1,
          },
          {
              quantity:1,
              served: false,
              item_id: 2,
          },
          {
              quantity:2,
              served: false,
              item_id: 3,
          },
       ]
    }
  */

    Order.create(req.body)
    .then((order) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.orderItems.length) {
          //unfinished, need to work on the map function
        const orderItemArr = req.body.tagIds.map((tag_id) => {
          return {
            order_id: order.id,
            tag_id,
          };
        });
        return OrderItem.bulkCreate(orderItemArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});


module.exports = router;
