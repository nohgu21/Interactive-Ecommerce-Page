import React, { useState } from "react";
import type { Product, CartItem } from "./ProductType";
import Product1 from "../assets/images/image-product-1.jpg";
import Product2 from "../assets/images/image-product-2.jpg";
import Product3 from "../assets/images/image-product-3.jpg";
import Product4 from "../assets/images/image-product-4.jpg";
import Thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import Navbar from "./Navbar";
import AddtoCart from "./AddtoCart";
import LightBox from "./LightBox";

const ProductPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [product] = useState<Product>({
    id: "1",
    name: "Fall Limited Edition\nSneakers",
    price: "$125.00",
    company: "SNEAKER COMPANY",
    description:
      "These low-profile sneakers are your perfect casual wear\ncompanion. Featuring a durable rubber outer sole, they'll\nwithstand everything the weather can offer.",
    mainImage: [Product1, Product2, Product3, Product4],
    thumbnail: [Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4],
  });

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.mainImage.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.mainImage.length) % product.mainImage.length);
  };

  return (
    <>
      <div className="box-border">
        <Navbar cart={cart} setCart={setCart} />
        <hr className="m-auto w-[92%] text-[hsl(220,14%,75%)]"></hr>
        
        {/*Desktop*/}
        <div className="hidden md:flex flex-row">
          <div className="md:w-1/2 md:px-12 ">
            <div className="-mt-6">
              <img
                src={product.mainImage[selectedImage]}
                alt={product.name}
                className="rounded-lg scale-75 cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />
            </div>
            <div className="grid grid-cols-4 gap-6 -mt-25 scale-76">
              {product.thumbnail.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-xl px-1 cursor-pointer transition-all hover:opacity-50 ${
                    selectedImage === index
                      ? "border-2 border-[hsl(26,100%,55%)] opacity-50"
                      : "border-2 border-transparent hover:border-[hsl(26,100%,55%)]"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 mt-[100px] space-y-4 p-4">
            <div className="font-semibold tracking-wider text-[hsl(219,9%,45%)]">
              {product.company}
            </div>
            <div className="text-4xl font-bold tracking-wider whitespace-pre-line">
              {product.name}
            </div>
            <div className="text-lg text-[hsl(219,9%,45%)] whitespace-pre-line">
              {product.description}
            </div>
            <div className="flex gap-2 font-bold text-2xl">
              {product.price}
              <span className="bg-[hsl(220,13%,13%)] p-2 rounded-lg text-white text-sm">
                50%
              </span>
            </div>
            <p className="line-through font-bold text-[hsl(219,9%,45%)]">
              $250
            </p>
            <AddtoCart cart={cart} setCart={setCart} product={product} />
          </div>
        </div>
      </div>
      
      <div className="md:hidden">
          {/* Mobile */}
          <div className="relative">
            <img
              src={product.mainImage[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          
          <div className="px-6 py-6 space-y-4">
            <div className="text-sm font-bold text-[hsl(219,9%,45%)] tracking-wider uppercase">
              SNEAKER COMPANY
            </div>
            
            <h1 className="text-3xl font-bold text-black leading-tight">
              Fall Limited Edition Sneakers
            </h1>
            
            <p className="text-[hsl(219,9%,45%)] leading-relaxed">
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">$125.00</span>
                <span className="bg-black text-white px-2 py-1 rounded text-sm font-bold">50%</span>
              </div>
              <span className="text-[hsl(219,9%,45%)] font-bold line-through">$250.00</span>
            </div>
            
            <AddtoCart cart={cart} setCart={setCart} product={product} />
          </div>
        </div>
   
      




      <LightBox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        product={product}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
};

export default ProductPage;
