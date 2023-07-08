'use client';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import Head from 'next/head';
import styles from './page.module.css';

import products from 'public/mock/products.json';
import { initiateCheckout } from '@/lib/payments';
import { DefaultProduct, StripeProduct, CartItem } from '@/types/products';

const defaultCart: DefaultProduct = {
    products: {},
};

export default function Home() {
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

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Simple Shop</h1>

                <p className={styles.description}>Real style must be simple!</p>

                <ul className={styles.cart}>
                    <li>
                        <strong>Items:</strong> {totalItems}
                    </li>
                    <li>
                        <strong>Total:</strong> ${subTotal}
                    </li>
                    <li>
                        <button className={`${styles.buttonBlueViolet} ${styles.cartButton}`} onClick={checkout}>
                            <FaShoppingCart />
                            Check Out
                        </button>
                    </li>
                </ul>

                <ul className={styles.grid}>
                    {products.map(product => {
                        const { id, title, description, price, image } = product;
                        return (
                            <li className={styles.card} key={id}>
                                <a href="#">
                                    <img src={image} alt={product.title} className={styles.img_md} />
                                    <h3>{title}</h3>
                                    <p>${price}</p>
                                    <p>{description}</p>
                                </a>
                                <p>
                                    <button
                                        className={styles.buttonBlueViolet}
                                        onClick={() => addToCart({ price: id })}
                                    >
                                        Add to Cart
                                    </button>
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </main>

            <footer className={styles.footer}>
                <div>footer</div>
            </footer>
        </div>
    );
}
