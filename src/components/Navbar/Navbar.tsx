import { FaShoppingCart } from 'react-icons/fa';

import styles from './navbar.module.css';
import { useCart } from '@/hooks/use-cart';

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
