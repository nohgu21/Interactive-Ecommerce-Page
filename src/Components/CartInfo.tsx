import React from 'react'
import type { CartItem } from './ProductType'
import Delete from "../assets/images/icon-delete.svg"
import useModalClose from './useModalClose'

interface CartInfoProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isOpen: boolean;
  onClose: () => void;
}

const CartInfo: React.FC<CartInfoProps> = ({ cart, setCart, isOpen, onClose }) => {
  console.log('CartInfo rendered, isOpen:', isOpen, 'cart length:', cart.length)
  const modalRef = useModalClose(isOpen, onClose);

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.product.id !== id));
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile */}
      
      <div  ref={modalRef} className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 z-40 mx-4">
        <h3 className="font-bold mb-4">Cart</h3>
        <hr className="mb-4 text-[hsl(220,14%,75%)]" />

        {cart.length === 0 ? (
          <p className="text-center text-[hsl(219,9%,45%)] py-8">Your cart is empty.</p>
        ) : (
          <div>
            <div className="max-h-64 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center gap-4 mb-4">
                  <img 
                    src={item.product.mainImage[0]} 
                    alt={item.product.name} 
                    className="w-12 h-12 rounded object-cover" 
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.product.price} x {item.quantity} = 
                      <span className="font-extrabold ml-1">
                        ${(parseFloat(item.product.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.product.id)}
                    className="hover:bg-[hsl(219,9%,45%)] p-1 rounded"
                  >
                    <img src={Delete} alt="Remove" className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full bg-[hsl(26,100%,55%)] hover:bg-[hsl(26,100%,50%)] text-[hsl(220,13%,13%)] py-3 rounded-lg font-bold transition-colors ">
              Checkout
            </button>
          </div>
        )}
      </div>

    {/* Desktop layout*/}
    <div className="hidden md:block md:absolute top-20 right-3 bg-white shadow-lg rounded-lg p-4 w-80 z-50">
      <h3 className="font-bold mb-4">Cart ({getTotalItems()})</h3>
      <hr className="mb-4 text-[hsl(220,14%,75%)]" />
      
      {cart.length === 0 ? (
    <p className="text-center text-[hsl(219,9%,45%)] py-8">Your cart is empty</p>
      ) : (
        <div>
          <div className="max-h-64 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.product.id} className="flex items-center gap-4 mb-4">
                <img 
                  src={item.product.mainImage[0]} 
                  alt={item.product.name} 
                  className="w-12 h-12 rounded object-cover" 
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.product.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.product.price} x {item.quantity} = 
                    <span className="font-extrabold ml-1">
                      ${(parseFloat(item.product.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.product.id)}
                  className="hover:bg-[hsl(219,9%,45%)] p-1 rounded"
                >
                  <img src={Delete} alt="Remove" className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          
          <button className="w-full bg-[hsl(26,100%,55%)] hover:bg-[hsl(26,100%,50%)] text-[hsl(220,13%,13%)] py-3 rounded-lg font-bold transition-colors ">
            Checkout
          </button>
        </div>
      )}
    </div>
   
    </>
  );
};

export default CartInfo;