import { FaShoppingCart } from 'react-icons/fa';

import { useCart } from '@/hooks/use-cart';
import styles from '@/styles/navbar.module.css';

const Navbar = () => {
    const { subTotal, checkout } = useCart();
    return (
        <nav className={styles.nav}>
            <p className={styles.navTitle}>Simple Shop</p>
            <p className={styles.navCart}>
                <button onClick={checkout}>
                    <FaShoppingCart /> ${subTotal.toFixed(2)}
                </button>
            </p>
        </nav>
    );
};

export default Navbar;
