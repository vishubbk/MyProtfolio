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
    <div className="min-h-screen flex flex-col bg-gray-50">
    <Navbar />

    <div className="flex flex-col items-center justify-center flex-grow px-6 mt-25 py-12">
      <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Support Our Cause</h1>
        <p className="text-gray-600 mb-6">
          Your donation helps us continue our mission. Every contribution makes a difference.
        </p>

        {/* Donation Options */}
        <div className="flex justify-center gap-4 mb-6">
          {[100, 500, 1000].map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`px-5 py-2 rounded-lg text-white font-semibold transition ${
                amount === amt ? "bg-indigo-700" : "bg-indigo-500 hover:bg-indigo-600"
              }`}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Custom Amount"
          className="w-full p-3 border border-gray-300 rounded-md text-center mb-4 focus:ring focus:ring-indigo-200"
        />

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
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
