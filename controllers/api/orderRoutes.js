const router = require('express').Router();
const { Order, OrderItem } = require('../../models');
const withAuth = require('../../utils/auth');
router.post('/', async (req, res) => {
  //bulk create
  /* req.body should look like this...
    {
      table_number: 0, //table number has to be part of the order object, otherwise we have to run guest create, then order, then orderItem bulk create.
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
// console.log("table_number below");
// console.log(req.body);
    Order.create({table_number: req.body.order.table_number})
    .then((order) => {
     
      if (req.body.order.orderItems.length) {
          //adding the order.id into the orderItemArr
        const orderItemArr = req.body.order.orderItems.map((orderItem) => {
          return {
            order_id: order.id,
            item_id: orderItem.item_id,
            quantity: orderItem.quantity,
            served: false,
          };
        });
        return OrderItem.bulkCreate(orderItemArr);
      }
      
      res.status(200).json(product);
    })
    .then((orderItemIds) => res.status(200).json(orderItemIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id',  async (req, res) => {
  try {
    const orderData = await Order.destroy({
      where: {
        id: req.params.id,      
      },
    });

    if (!orderData) {
      res.status(404).json({ message: 'No order found with this id!' });
      return;
    }

    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
