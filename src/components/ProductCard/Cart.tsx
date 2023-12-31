import Link from 'next/link';

import styles from '@/styles/page.module.css';
import { useCart } from '@/hooks/use-cart';
import products from 'public/mock/products.json';

const ProductCard = () => {
    const { addToCart } = useCart();

    return (
        <ul className={styles.grid}>
            {products.map(product => {
                const { id, title, description, price, image } = product;
                return (
                    <li className={styles.card} key={id}>
                        <Link href={`/products/${id}`}>
                            <img src={image} alt={product.title} className={styles.img_md} />
                            <h3>{title}</h3>
                            <p>${price}</p>
                            <p className={styles.product_description}>{description}</p>
                        </Link>
                        <p>
                            <button className={styles.buttonBlueViolet} onClick={() => addToCart({ price: id })}>
                                Add to Cart
                            </button>
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};

export default ProductCard;
