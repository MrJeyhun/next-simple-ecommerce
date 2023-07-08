export interface InitialCheckoutProps {
    lineItems: LineItems[];
}

export interface LineItems {
    price: string;
    quantity: number;
}
