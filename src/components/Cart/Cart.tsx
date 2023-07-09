import styles from '@/app/page.module.css';
import useCart from '@/hooks/use-cart';
import products from 'public/mock/products.json';

const Cart = () => {
    const { subTotal, totalItems, addToCart, checkout } = useCart();

    return (
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

export default Cart;
