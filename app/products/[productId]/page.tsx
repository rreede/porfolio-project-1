"use client";

import productsList from '../../productsList';
import Header from '@/app/ui/Header';
import Image from 'next/image';

export default function Details({ params }: { params: { productId: string } }) {

  const handleClick = () => {
    handleInputChange(1); // Default quantity of 1 when clicking "Add to cart"
    handleAddedToCart();
  };

  const handleAddedToCart = () => {
    alert('Added to cart');
  };

  // Handle adding item to cart
  const handleInputChange = (quantity: number) => {
    const productId = Number(params.productId);

    // Retrieve the existing cart from localStorage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Find the index of the product in the cart
    const existingProductIndex = cart.findIndex((item: { productId: number }) => item.productId === productId);

    // If the product is already in the cart, update the quantity
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add a new entry
      const product = productsList.find((item: any) => item.id === productId);
      if (product) {
        cart.push({
          productId,
          name: product.name,
          price: product.price,
          quantity,
          image: product.img[0], // Assuming the first image is the main one
        });
      }
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // Filter the product based on the productId
  const filteredItem = productsList.filter((item: any) => item.id === Number(params.productId));

  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          {filteredItem.length > 0 ? (
            filteredItem.map((item: any) => (
              <div key={item.id} className="flex">
                <div className="left-container">
                  <Image
                    src={`/${item.img[0]}`}
                    className="mb-6"
                    width={200}
                    height={200}
                    alt={item.name}
                  />
                  <h2>{item.name}</h2>
                  <p>{item.price}$</p>
                  
                </div>

                <div className="right-container">
                  <p>{item.description}</p>
                  <input
                    type="number"
                    onChange={(e) => handleInputChange(Number(e.target.value))}
                    min="1"
                    className="outline-black placeholder:text-gray-800"
                    placeholder="Quantity"
                  />
                  <button
                    onClick={handleClick}
                    className="bg-blue-600 rounded-md py-3 px-6 mt-3 text-white"
                  >
                    Add to shopping cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Product not found</p>
          )}
        </div>
      </main>
    </>
  );
}
