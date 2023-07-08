'use client';
import Head from 'next/head';
import styles from './page.module.css';

import products from 'public/mock/products.json';
import { initiateCheckout } from 'lib/payments';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Simple Shop</h1>

                <p className={styles.description}>Real style must be simple!</p>

                <ul className={styles.grid}>
                    {products.map(product => {
                        return (
                            <li className={styles.card} key={product.id}>
                                <a href="#">
                                    <img src={product.image} alt={product.title} className={styles.img_md} />
                                    <h3>{product.title}</h3>
                                    <p>${product.price}</p>
                                    <p>{product.description}</p>
                                </a>
                                <p>
                                    <button
                                        className={styles.buyButton}
                                        onClick={() =>
                                            initiateCheckout({
                                                lineItems: [
                                                    {
                                                        price: product.id,
                                                        quantity: 1,
                                                    },
                                                ],
                                            })
                                        }
                                    >
                                        Buy Now!
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
