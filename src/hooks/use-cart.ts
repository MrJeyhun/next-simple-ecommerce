import { useState, useEffect, createContext, useContext, Context } from 'react';

import { DefaultProduct, StripeProduct, UseCartContext } from '@/types/products';
import { initiateCheckout } from '@/lib/payments';
import products from 'public/mock/products.json';

const defaultCart: DefaultProduct = {
    products: {},
};

//@ts-ignore TODO: fix ts problem
export const CartContext: Context<UseCartContext> = createContext();

export const useCartState = () => {
    const [cart, setCart] = useState(defaultCart);

    useEffect(() => {
        const stateFromLocalStore = window.localStorage.getItem('simple_store_cart');
        const data = stateFromLocalStore && JSON.parse(stateFromLocalStore);
        data && setCart(data);
    }, []);

    useEffect(() => {
        const data = JSON.stringify(cart);
        window.localStorage.setItem('simple_store_cart', data);
    }, [cart]);

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

    const updateCart = ({ price: id, quantity }: StripeProduct) => {
        // price here is actually stripe item id
        setCart(prevState => {
            let cartState = { ...prevState };

            if (cartState.products[id]) {
                cartState.products[id].quantity = quantity;
            }

            if (cart.products[id].quantity === 0) {
                delete cart.products[id];
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
        updateCart,
        checkout,
        cartItems,
    };
};

export const useCart = () => {
    const cartContext = useContext(CartContext);
    return cartContext;
};
