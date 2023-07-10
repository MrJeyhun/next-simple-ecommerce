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

export interface CartItems {
    pricePerItem: number;
    price: string;
    quantity: number;
}

export interface UseCartContext {
    cart: DefaultProduct;
    setCart: Dispatch<SetStateAction<DefaultProduct>>;
    subTotal: number;
    totalItems: number;
    addToCart: ({ price }: Omit<StripeProduct, 'quantity'>) => void;
    updateCart: ({ price, quantity }: StripeProduct) => void;
    checkout: () => void;
    cartItems: CartItems[];
}

export interface QuantityProps {
    id: string;
    quantity: number;
    updateCart: ({ price, quantity }: StripeProduct) => void;
}

export interface CartData {
    pricePerItem: number;
    price: string;
    quantity: JSX.Element;
    total: number;
    title: string | undefined;
}

export interface TableProps {
    className: string;
    data: CartData[];
    columns: TableColumns[];
}

export interface TableColumns {
    columnId: string;
    Header: string;
}
