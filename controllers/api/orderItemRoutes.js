const router = require('express').Router();
const { Order, OrderItem } = require('../../models');
const withAuth = require('../../utils/auth');
router.put('/:id', withAuth, async (req, res) => {
    // update a orderItem by its `id` value
    try {
      const orderItemData = await OrderItem.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!orderItemData[0]) {
        res.status(404).json({ message: 'No orderItem with this id!' });
        return;
      }
      res.status(200).json(orderItemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
