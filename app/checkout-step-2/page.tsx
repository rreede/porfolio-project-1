"use client";

import Header from '../ui/Header';
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Checkout1() {


    const [viewDeliveryOptions, setViewDeliveryOptions] = useState<string | null>(null);



localStorage.setItem('deliveryMethod','')





  return (
    <>
      <Header />

      <main>
        <div className="wrapper">
          <h1 className="text-3xl mb-3">Select Delivery Method</h1>

          <form>
            <div className="flex flex-col gap-2">
              <label>
                <input
                  type="radio"
                  name="delivery"
                  onClick={() => setViewDeliveryOptions('courier')}
                />
                Courier
              </label>

              <label>
                <input
                  type="radio"
                  name="delivery"
                  onClick={() => setViewDeliveryOptions('parcel')}
                />
                Parcel Machine
              </label>
            </div>
          </form>

          {/* Show additional delivery options based on selection */}
          {viewDeliveryOptions === 'parcel' && (
            <div className="mt-3">
              <h2 className="text-lg font-semibold">Select a Parcel Machine</h2>
              <label>
                <input type="radio" name="parcel-option" />
                Omniva (2.49$)
              </label>
              <label>
                <input type="radio" name="parcel-option" />
                DPD (2.49$)
              </label>
              <label>
                <input type="radio" name="parcel-option" />
                Venipak (2.49$)
              </label>
            </div>
          )}


{viewDeliveryOptions === 'courier' && (
            <div className="mt-3">
              <h2 className="text-lg font-semibold">Select a Courier provider</h2>
              <label>
                <input type="radio" name="parcel-option" />
                Omniva (5.49$)
              </label>
              <label>
                <input type="radio" name="parcel-option" />
                Venipak (2.49$)
              </label>
            </div>
          )}



<div className="button-nav-container flex justify-between">
<button className="bg-blue-600 py-3 px-6 mt-3 text-white rounded-md">
<Link href="/checkout-step-1">Back to your cart</Link>
</button>
<button className="bg-blue-600 py-3 px-6 mt-3 text-white rounded-md">
            <Link href="/checkout-step-3" ><h2>Finalize Order</h2></Link>
          </button>

          </div>

        </div>
      </main>
    </>
  );
}
