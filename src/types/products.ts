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
