'use client';
import { FaShoppingCart } from 'react-icons/fa';

import Head from 'next/head';
import styles from './page.module.css';

import useCart from '@/hooks/use-cart';
import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';

export default function Home() {
    const { subTotal, totalItems, addToCart, checkout } = useCart();

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
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
                    <Cart />
                </main>

                <footer className={styles.footer}>
                    <div>footer</div>
                </footer>
            </div>
        </>
    );
}
