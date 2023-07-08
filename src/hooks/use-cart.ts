import { useState } from 'react';

import { DefaultProduct, StripeProduct } from '@/types/products';
import { initiateCheckout } from '@/lib/payments';
import products from 'public/mock/products.json';

const defaultCart: DefaultProduct = {
    products: {},
};

export default function useCart() {
    const [cart, setCart] = useState(defaultCart);

    const cartItems = Object.keys(cart.products).map(key => {
        const product = products.find(({ id }) => `${id}` === `${key}`);

        return {
            ...cart.products[key],
            pricePerItem: product?.price,
        };
    });

    const subTotal = cartItems.reduce((accumulator, { pricePerItem, quantity }) => {
        if (pricePerItem) {
            return accumulator + pricePerItem * quantity;
        } else {
            return accumulator;
        }
    }, 0);

    const totalItems = cartItems.reduce((accumulator, { quantity }) => {
        return accumulator + quantity;
    }, 0);

    const addToCart = ({ price: id }: Omit<StripeProduct, 'quantity'>) => {
        // price here is actually stripe item id
        setCart(prevState => {
            let cartState = { ...prevState };

            if (cartState.products[id]) {
                cartState.products[id].quantity = cartState.products[id].quantity + 1;
            } else {
                cartState.products[id] = {
                    price: id,
                    quantity: 1,
                };
            }

            return cartState;
        });
    };

    const checkout = () => {
        initiateCheckout({
            lineItems: cartItems.map(item => {
                return {
                    price: item.price,
                    quantity: item.quantity,
                };
            }),
        });
    };

    return {
        cart,
        setCart,
        subTotal,
        totalItems,
        addToCart,
        checkout,
    };
}
