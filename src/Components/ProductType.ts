export interface Product {
    id: string,
    name: string,
    price: string,
    company: string,
    description: string,
    mainImage: string[],
    thumbnail: string[],
}

export interface CartItem {
    product: Product,
    quantity: number,
}