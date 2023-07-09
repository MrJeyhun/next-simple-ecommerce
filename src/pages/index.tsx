'use client';
import Head from 'next/head';
import styles from '@/styles/page.module.css';

import { CartContext, useCartState } from '@/hooks/use-cart';
import Cart from '@/components/Cart';

export default function Home() {
    return (
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
    );
}
