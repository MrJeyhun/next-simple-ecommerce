import Head from 'next/head';
import { FaShoppingCart } from 'react-icons/fa';
import styles from '@/styles/cart.module.css';

import Table from '@/components/Table';
import { useCart } from '@/hooks/use-cart';
import products from 'public/mock/products.json';
import Quantity from '@/components/Quantity/Quantity';
import { CartData, TableColumns } from '@/types/products';

const columns: TableColumns[] = [
    {
        columnId: 'title',
        Header: 'Product Name',
    },
    {
        columnId: 'quantity',
        Header: 'Quantity',
    },
    {
        columnId: 'pricePerUnit',
        Header: 'Price Per Item',
    },
    {
        columnId: 'total',
        Header: 'Item Total',
    },
];

export default function Cart() {
    const { cartItems, checkout, updateCart } = useCart();

    const data: CartData[] = cartItems.map(cartItem => {
        //price here is actually stripe product id
        const product = products.find(({ id }) => id === cartItem.price);
        return {
            ...cartItem,
            quantity: <Quantity id={cartItem.price} quantity={cartItem.quantity} updateCart={updateCart} />,
            total: cartItem.quantity * cartItem.pricePerItem,
            title: product?.title,
        };
    });

    return (
        <div className={styles.container}>
            <Head>
                <title>Shopping Cart - Space Jelly</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <FaShoppingCart /> Cart
                </h1>

                <Table className={styles.table} data={data} columns={columns} />

                <p className={styles.checkout}>
                    <button className={styles.button} onClick={checkout}>
                        Check Out
                    </button>
                </p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    );
}
