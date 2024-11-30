// const express = require('express');
// const Razorpay = require('razorpay');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();

import express from 'express';
import Razorpay from 'razorpay';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Razorpay instance
const razorpay = new Razorpay({
    key_id: 'rzp_test_xjPH6c3YUQ35nU', // Replace with your Razorpay Test Key ID
    key_secret: 'wM4D0bWqpB1QeMoC2rAQVlE2', // Replace with your Razorpay Secret Key
});

// Order creation route
app.post('/createOrder', async (req, res) => {
    try {
        const { name, amount, description } = req.body;

        if (!name || !amount || !description) {
            return res.status(400).json({ success: false, msg: 'Invalid data received' });
        }

        // Razorpay order options
        const orderOptions = {
            amount: amount * 100, // Amount in paise
            currency: 'INR',
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(orderOptions);

        res.status(200).json({
            success: true,
            key_id: 'rzp_test_xjPH6c3YUQ35nU',
            amount: order.amount,
            currency: order.currency,
            product_name: name,
            description,
            order_id: order.id,
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, msg: 'Error creating Razorpay order' });
    }
});

// Listen on port
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
