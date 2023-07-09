import { Dispatch, SetStateAction } from 'react';

export interface InitiateCheckoutProps {
    lineItems: StripeProduct[];
}

export interface DefaultProduct {
    products: Products;
}

export interface Products {
    [key: string]: StripeProduct;
}

export interface StripeProduct {
    price: string;
    quantity: number;
}

export interface CartItem {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
}

export interface CartContext {
    cart: DefaultProduct;
    setCart: Dispatch<SetStateAction<DefaultProduct>>;
    subTotal: number;
    totalItems: number;
    addToCart: ({ price }: Omit<StripeProduct, 'quantity'>) => void;
    checkout: () => void;
}
