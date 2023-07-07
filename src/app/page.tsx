import { useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css';

import products from 'public/mock/products.json';

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

                {/**
                 * @lesson-02-todo Exercise 1
                 * We want to add products to our app. How can we use the code that
                 * already comes with Next.js to get started adding our products?
                 *
                 * @lesson-02-todo Exercise 2
                 * Our product details are important, but it's also important to show
                 * some images of our products. Let's import pictures of our products
                 * and display those images above our product titles.
                 *
                 * @lesson-02-todo Exercise 3
                 * Using an unordered list typically makes more sense semantically when
                 * showing a list of something like in our case, products. Update the
                 * grid of products to an unordered list with a list item that wraps
                 * each product card.
                 */}

                <ul className={styles.grid}>
                    {products.map(product => {
                        return (
                            <li className={styles.card} key={product.id}>
                                <a href="#">
                                    <img src={product.image} alt={product.title} />
                                    <h3>{product.title}</h3>
                                    <p>{product.price}</p>
                                    <p>{product.description}</p>
                                </a>
                            </li>
                        );
                    })}
                    {/* <li className={styles.card}>
                        <a href="https://nextjs.org/docs">
                            <img src="/images/colorfuljacket.jpg" alt="colorfuljacket" />
                            <h3>Title</h3>
                            <p>Description</p>
                        </a>
                    </li>

                    <li className={styles.card}>
                        <a href="https://nextjs.org/learn">
                            <img src="/images/jacket.jpg" alt="jacket" />
                            <h3>Title</h3>
                            <p>Description</p>
                        </a>
                    </li>

                    <li className={styles.card}>
                        <a href="https://github.com/vercel/next.js/tree/master/examples">
                            <img src="/images/milada.jpg" alt="milada" />
                            <h3>Nice crop</h3>
                            <p>Nice as you</p>
                        </a>
                    </li>

                    <li className={styles.card}>
                        <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                            <img src="/images/pinktshirt.jpg" alt="pinktshirt" />
                            <h3>Title</h3>
                            <p>Description</p>
                        </a>
                    </li>

                    <li className={styles.card}>
                        <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                            <img src="/images/blacktshirt.jpg" alt="blacktshirt" />
                            <h3>Title</h3>
                            <p>Description</p>
                        </a>
                    </li>

                    <li className={styles.card}>
                        <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                            <img src="/images/whitetshirt.jpg" alt="whitetshirt" />
                            <h3>Title</h3>
                            <p>Description</p>
                        </a>
                    </li> */}
                </ul>
            </main>

            <footer className={styles.footer}>
                <div>footer</div>
            </footer>
        </div>
    );
}
