# E-commerce Product Page
The project showcases a responsive sneaker product page with cart functionality, image gallery, and lightbox modal.

### The challenge
Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it
- Navigate through product images using previous/next buttons
- Close modals by pressing Escape key or clicking outside the modal area

## My process
Built with
- React 18 with TypeScript
- Tailwind CSS for styling
- Mobile-first responsive design
- Semantic HTML5 markup
- Flexbox and Grid layout
- Custom React hooks for modal functionality

### What I learned
This project was an entire learning experience that taught me valuable lessons about React development, TypeScript, and attention to detail.
Key Challenges Faced:

1. TypeScript Prop Passing
I struggled initially with passing props correctly using TypeScript syntax, especially with complex object types and function props

2. Mathematical Calculations
I had to work through various mathematical operations for cart totals, quantity calculations, and image navigation indices. Finding the most appropriate approach for each scenario was challenging.

3. Desktop Cart Modal Issue
I encountered another issue with the desktop cart modal not appearing when clicked after making my designs responsive. After extensive debugging, I discovered the issue was caused by Tailwind's hidden class in the AddtoCart component, which was interfering with the modal's visibility. This reinforced the importance of paying attention to the smallest details.

### Key learnings:
1. Attention to Detail: Small things like CSS class names can have big impacts
2. TypeScript Proficiency: Gained better understanding of TypeScript syntax and proper prop typing
3. State Management: Learned proper patterns for managing complex state across components
4. Modal Patterns: Implemented reusable modal close functionality with custom hooks
5. Responsive Design: Gained better grasp of mobile-first approach with Tailwind CSS

### Useful resources
1. TypeScript Documentation - Comprehensive guide for TypeScript fundamentals
2. TypeScript React Cheatsheet - Excellent resource for React + TypeScript patterns
3. Tailwind CSS Documentation - Complete reference for utility classes
4. React Documentation - Official React documentation with hooks and best practices



