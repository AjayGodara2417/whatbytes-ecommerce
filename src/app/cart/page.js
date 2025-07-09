'use client';

import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-10 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-6 items-center border-b pb-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">${item.price}</p>
                  <div className="flex gap-2 items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >-</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >+</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-10">
              <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
              <button className="mt-4 bg-black text-white px-6 py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
