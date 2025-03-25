import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Donation = () => {
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleDonate = async () => {
    if (!amount) {
      alert("Please enter an amount to donate.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:4000/api/donate", { amount });

      const options = {
        key: data.key, // Get key from backend response
        amount: data.amount,
        currency: "INR",
        name: "Donation",
        description: "Support Our Cause",
        order_id: data.orderId,
        handler: function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Support Our Cause</h1>
        <p className="text-gray-700 mb-6">
          Your donation helps us continue our mission and support those in need. Every contribution makes a difference.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Choose Your Donation Amount</h2>
          <div className="flex justify-center gap-4 mb-4">
            <button onClick={() => setAmount(100)} className="px-4 py-2 bg-blue-500 text-white rounded">₹100</button>
            <button onClick={() => setAmount(500)} className="px-4 py-2 bg-blue-500 text-white rounded">₹500</button>
            <button onClick={() => setAmount(1000)} className="px-4 py-2 bg-blue-500 text-white rounded">₹1000</button>
          </div>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Custom Amount"
            className="w-full p-2 border rounded mb-4"
          />

          <button
            onClick={handleDonate}
            className="w-full bg-green-500 text-white py-2 rounded-lg text-lg"
          >
            Donate ₹{amount || "Now"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donation;
