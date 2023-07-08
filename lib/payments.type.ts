export interface InitiateCheckoutProps {
    lineItems: LineItems[];
}

export interface LineItems {
    price: string;
    quantity: number;
}
