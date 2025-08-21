import React, { useState }from 'react'
import type { Product, CartItem } from './ProductType'
import ButtonCart from "../assets/images/icon-cart.svg"
import Remove from "../assets/images/icon-minus.svg"
import Add from "../assets/images/icon-plus.svg"


interface AddtoCartProps {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    product: Product;
}

const AddtoCart: React.FC<AddtoCartProps> = ({ cart, setCart, product })=> {
    const [quantity, setQuantity] = useState(0)

    const addtoCart = () => {
        if (quantity > 0) {
            const existingItem = cart.find(item => item.product.id === product.id)

            if (existingItem) {
                setCart(cart.map(item => 
                    item.product.id === product.id
                    ? {...item, quantity: item.quantity + quantity }
                    : item
                ))
            } else {
                const newItem: CartItem = {
                    product: product,
                    quantity: quantity
                }
                setCart([...cart, newItem])
            }
            
        }
        setQuantity(0)
    }
    return (
        <div className="flex gap-4 md:gap-6 flex-col md:flex-row" >
            <div className="flex items-center justify-between p-4 md:p-2 rounded-lg bg-[hsl(220,14%,75%)] w-full md:w-50">
                <button onClick={() => setQuantity(Math.max(0, quantity - 1))}>
                  <img src={Remove}/>
                </button>
                <p className="m-auto">{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <img src={Add}/>
                </button>
            </div>
            <button onClick={addtoCart} className="flex justify-center gap-2 p-4 md:p-2 items-center bg-[hsl(26,100%,55%)] hover:border-[hsl(26,100%,55%)] hover:opacity-50 w-full md:w-50 rounded-lg">
            <img src={ButtonCart}/>
            <p className="font-bold">Add to Cart</p>
            </button>
        </div>
    )
}

export default AddtoCart
