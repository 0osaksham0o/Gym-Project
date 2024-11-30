import React, { useEffect } from 'react';

const PaymentPage = () => {
    useEffect(() => {
        // Add Razorpay script dynamically
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePayment = async (name, amount, description) => {
        try {
            // Create order by calling the backend API
            const response = await fetch('http://localhost:5000/createOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, amount, description }),
            });

            const res = await response.json();

            if (res.success) {
                const options = {
                    key: res.key_id,
                    amount: res.amount,
                    currency: 'INR',
                    name: res.product_name,
                    description: res.description,
                    order_id: res.order_id,
                    handler: function (response) {
                        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                    },
                    theme: { color: '#2300a3' },
                };

                const razorpayObject = new window.Razorpay(options);
                razorpayObject.open();
            } else {
                alert('Error: ' + res.msg);
            }
        } catch (error) {
            console.error('Error processing payment:', error);
            alert('Error processing payment. Please try again.');
        }
    };

    const trainingPrograms = [
        {
            name: '1 Month Training',
            amount: 1500,
            description: 'A complete professional-level training program covering every skill needed to excel in the field.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPScyIAqzxxOymnqIuzChPvjP_MMZIDaThQ&s',
        },
        {
            name: '6-Month Training',
            amount: 5000,
            description: 'A short-term program designed to boost your skills with expert guidance and practical projects.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCN71MP5tV-JQSk5rK9RRK2jOyv2OZz0Iu2A&s',
        },
        {
            name: '1-Year Training',
            amount: 15000,
            description: 'Comprehensive training to build a strong foundation with real-world project experience.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAFaeoSJCfWKTw55nlVh2g5bHjzOIBSYfG4A&s',
        },
        {
            name: '2-Year Training',
            amount: 25000,
            description: 'Advanced-level training focusing on in-depth learning and specialization in key areas.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjGp6f9dg2jOGQ1vlZPkO7Zh3TvHORcM9qw&s',
        },
        {
            name: '3-Year Training',
            amount: 35000,
            description: 'Mastery-level training with exclusive access to industry mentors and career opportunities.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLNUaxBrVCdN_0zFKpEnkXYavMJVRPCV01A&s',
        },
        {
            name: '4-Year Training',
            amount: 45000,
            description: 'Mastery-level training with exclusive access to industry mentors and career opportunities.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLNUaxBrVCdN_0zFKpEnkXYavMJVRPCV01A&s',
        },
    ];

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '20px', color: '#333' }}>Training Program Payments</h1>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', maxWidth: '1200px', margin: '20px auto' }}>
                {trainingPrograms.map((program, index) => (
                    <div key={index} className="box" style={{
                        backgroundColor: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                        padding: '20px',
                        maxWidth: '280px',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                    }}>
                        <img src={program.image} alt={program.name} style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '15px' }} />
                        <p className="title">{program.name}</p>
                        <p className="price" style={{ fontWeight: 'bold', color: '#555' }}>Amount: Rs. {program.amount}</p>
                        <p className="description" style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>{program.description}</p>
                        <button
                            onClick={() => handlePayment(program.name, program.amount, program.description)}
                            className="pay-button"
                            style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                        >
                            Pay Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentPage;
