import React, { useState } from 'react'
import type { CartItem } from './ProductType'
import myCart from '../assets/images/icon-cart.svg'
import Logo from '../assets/images/logo.svg'
import Avatar from '../assets/images/image-avatar.png'
import CartInfo from './CartInfo'

interface NavbarProps {
    cart: CartItem[]
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const Navbar: React.FC<NavbarProps> = ({ cart, setCart })=> {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    console.log('Navbar rendering, isCartOpen:', isCartOpen);


    
    
    return (

        <>
        {/*Mobile*/}
            <nav aria-label='main' className="md:hidden flex items-center justify-between px-4 py-4 relative">
               
                <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="flex flex-col justify-center items-center w-6 h-6"
                >
                    <span className="w-4 h-0.5 bg-gray-800 block mb-1"></span>
                    <span className="w-4 h-0.5 bg-gray-800 block mb-1"></span>
                    <span className="w-4 h-0.5 bg-gray-800 block"></span>
                </button>

              
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img src={Logo} alt="Brand Logo" className="h-6"/>
                </div>

                
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className="relative"
                    >
                        <img src={myCart} alt="Cart" className="w-5 h-5"/>
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                {cart.reduce((total, item) => total + item.quantity, 0)}
                            </span>
                        )}
                    </button>
                    <img src={Avatar} alt="Avatar Profile" className="w-7 h-7 rounded-full"/>
                </div>
            </nav>

        {/*Desktop*/}
        <nav aria-label='main' className="hidden md:flex flex-row items-center justify-between px-12 relative">

            <div className="flex flex-row">
                    <div className="px-6 cursor-pointer">
                        <img src={Logo} alt="Brand Logo"/>
                    </div>

                <ul className="flex flex-row gap-4">
                    <li className="cursor-pointer hover:text-gray-600 transition-all">Collections</li>
                    <li className="cursor-pointer hover:text-gray-600 transition-all">Men</li>
                    <li className="cursor-pointer hover:text-gray-600 transition-all">Women</li>
                    <li className="cursor-pointer hover:text-gray-600 transition-all">About</li>
                    <li className="cursor-pointer hover:text-gray-600 transition-all">Contact</li>  
                </ul>
            </div>
            
            <div className="flex">
                <button onClick={() => {
                    setIsCartOpen(!isCartOpen);
                }}>
                    <img src={myCart} alt="Button Icon" className="hover:opacity-75 transition-opacity cursor-pointer"/>
                     {cart.length > 0 && (
                        <span className="absolute top-9 right-35 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            {cart.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                    )}
                </button>
                <CartInfo 
                        cart={cart}
                        setCart={setCart}
                        isOpen={isCartOpen}
                        onClose={() => setIsCartOpen(false)}
                        
                    />
                <img src={Avatar} alt="Avatar Profile" className="scale-50 cursor-pointer hover:border-2 hover:border-[hsl(26,100%,55%)] rounded-full transition-all"/>
            </div>
        
        </nav>

        
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div className="absolute left-0 top-0 h-full w-60 bg-white">
                        <div className="p-6">
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mb-12 text-gray-500"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <nav className="space-y-6">
                                <div className="text-lg font-bold text-gray-900 cursor-pointer">Collections</div>
                                <div className="text-lg font-bold text-gray-900 cursor-pointer">Men</div>
                                <div className="text-lg font-bold text-gray-900 cursor-pointer">Women</div>
                                <div className="text-lg font-bold text-gray-900 cursor-pointer">About</div>
                                <div className="text-lg font-bold text-gray-900 cursor-pointer">Contact</div>
                            </nav>
                        </div>
                    </div>
                </div>
            )}

            <CartInfo 
                cart={cart}
                setCart={setCart}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
    </>
    )
}

export default Navbar
