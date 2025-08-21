
import { useEffect, useRef } from 'react';


const useModalClose = (isOpen: boolean, onClose: () => void) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    

    if (!isOpen) return;


    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };


    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
   
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOutsideClick);

 
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return modalRef;
};

export default useModalClose;