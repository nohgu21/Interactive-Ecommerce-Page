import React from 'react';
import type { Product } from './ProductType';
import Prev  from '../assets/images/icon-previous.svg'
import Next from '../assets/images/icon-next.svg'
import Close from '../assets/images/icon-close.svg'
import useModalClose from './useModalClose';


interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ 
  isOpen, 
  onClose, 
  product, 
  selectedImage, 
  setSelectedImage 
}) => {

  const modalRef = useModalClose(isOpen, onClose)

  if (!isOpen) return null;

  const nextImage = () => {
    setSelectedImage((selectedImage + 1) % product.mainImage.length);
  };

  const prevImage = () => {
    setSelectedImage((selectedImage - 1 + product.mainImage.length) % product.mainImage.length);
  };

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
      <div ref={modalRef} className="relative max-w-md w-full mx-4">
       
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl hover:text-orange-500 transition-colors"
        >
          <img src={Close}/>
        </button>
        
       
        <div className="relative">
          <img 
            src={product.mainImage[selectedImage]} 
            alt={product.name} 
            className="w-full rounded-lg"
          />
          
          <button 
            onClick={prevImage}
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center transition-all"
          >
            <img src={Prev}/>
          </button>
          <button 
            onClick={nextImage}
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center transition-all"
          >
            <img src={Next}/>
          </button>
        </div>
        
        <div className="flex justify-center gap-4 mt-6">
          {product.thumbnail.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`${product.name} thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(index)}
              className={`w-16 h-16 rounded-lg cursor-pointer transition-all hover:opacity-80 ${
                selectedImage === index 
                  ? "border-2 border-orange-500 opacity-60" 
                  : "border-2 border-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;