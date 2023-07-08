'use client';
import { FaShoppingCart } from 'react-icons/fa';

import Head from 'next/head';
import styles from './page.module.css';

import products from 'public/mock/products.json';
import useCart from '@/hooks/use-cart';

export default function Home() {
    const { subTotal, totalItems, addToCart, checkout } = useCart();

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
