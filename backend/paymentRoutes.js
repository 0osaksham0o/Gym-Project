const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

// Razorpay instance
const razorpay = new Razorpay({
  key_id: 'rzp_test_xjPH6c3YUQ35nU', // Replace with your Razorpay test key
  key_secret: 'wM4D0bWqpB1QeMoC2rAQVlE2', // Replace with your Razorpay secret key
});

// Create Order Route
router.post('/createOrder', async (req, res) => {
  try {
    const { name, amount, description } = req.body;

    // Convert amount to smallest currency unit (paise for INR)
    const orderOptions = {
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(orderOptions);

    res.status(200).json({
      success: true,
      key_id: 'zp_test_xjPH6c3YUQ35nU',
      amount: order.amount,
      currency: order.currency,
      product_name: name,
      description,
      order_id: order.id,
      contact: '', // Add dynamic contact details if required
      name: '', // Add dynamic user details if required
      email: '', // Add dynamic user details if required
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: 'Error creating Razorpay order' });
  }
});

module.exports = router;
