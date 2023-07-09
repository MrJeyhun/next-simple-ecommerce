import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';

import { CartItem } from '@/types/products';
import styles from '@/styles/product-page.module.css';
import { useCart } from '@/hooks/use-cart';
import products from 'public/mock/products.json';

interface Params extends ParsedUrlQuery {
    productId: string;
}

interface CartItemProps {
    product: CartItem;
}

export default function Product({ product }: CartItemProps) {
    const { id, title, description, image, price } = product;

    const { addToCart } = useCart();

    return (
        <div className={styles.container}>
            <Head>
                <title>{title} - Space Jelly</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.productImage}>
                    <img src={image} alt={title} />
                </div>

                <div>
                    <h1>{title}</h1>

                    <p className={styles.description}>{description}</p>

                    <p className={styles.description}>${price.toFixed(2)}</p>

                    <p>
                        <button className={styles.button} onClick={() => addToCart({ price: id })}>
                            Add to Cart
                        </button>
                    </p>
                </div>
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

//@ts-ignore TODO: fix ts problem
export const getStaticProps: GetStaticProps<CartItemProps, Params> = async ({ params }) => {
    const product = products.find(({ id }) => id === params?.productId);

    return {
        props: {
            product,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = products.map(product => {
        return {
            params: {
                productId: product.id,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};
