'use client';
import Head from 'next/head';
import styles from '@/styles/page.module.css';

import ProductCard from '@/components/ProductCard';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <p className={styles.description}>Real style must be simple!</p>
                <ProductCard />
            </main>

            <footer className={styles.footer}>
                <div>footer</div>
            </footer>
        </div>
    );
}
