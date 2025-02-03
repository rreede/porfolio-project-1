"use client"
import Header from "../ui/Header";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Checkout3() {
  const [cart, setCart] = useState<any[]>([]);
  const [deliveryMethod, setDeliveryMethod] = useState<string | null>(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const storedDelivery = JSON.parse(localStorage.getItem("deliveryMethod") || "null");

    setCart(storedCart);
    setDeliveryMethod(storedDelivery);
  }, []);

  return (
    <>

    <Header/>
    <main>

        <div className="wrapper">
        <h1>Checkout 3</h1>

{cart.length > 0 ? (
  <ul>
    {cart.map((item, index) => (
      <li key={index}>
        {item.name} - {item.quantity} x ${item.price}
      </li>
    ))}
  </ul>
) : (
  <p>Your cart is empty.</p>
)}

{deliveryMethod ? <p>Delivery Method: {deliveryMethod}</p> : <p>No delivery method selected.</p>}


<div className="button-nav-container flex justify-between">
<button className="bg-blue-600 py-3 px-6 mt-3 text-white rounded-md">
<Link href="/checkout-step-1">Back to your cart</Link>
</button>
<button className="bg-blue-600 py-3 px-6 mt-3 text-white rounded-md">
            <Link href="/checkout-step-3"><h2>Finalize Order</h2></Link>
          </button>
</div>

</div>

    </main>
     
    </>
  );
}
