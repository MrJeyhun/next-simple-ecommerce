'use client';
import { FaShoppingCart } from 'react-icons/fa';

import Head from 'next/head';
import styles from './page.module.css';

import { CartContext, useCartState } from '@/hooks/use-cart';
import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';

export default function Home() {
    const cart = useCartState();

    return (
        <CartContext.Provider value={cart}>
            <Navbar />
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <p className={styles.description}>Real style must be simple!</p>
                    <Cart />
                </main>

                <footer className={styles.footer}>
                    <div>footer</div>
                </footer>
            </div>
        </CartContext.Provider>
    );
}
