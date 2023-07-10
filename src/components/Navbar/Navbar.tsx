import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import { useCart } from '@/hooks/use-cart';
import styles from '@/styles/navbar.module.css';

const Navbar = () => {
    const { subTotal, checkout } = useCart();
    return (
        <nav className={styles.nav}>
            <p className={styles.navTitle}>Simple Shop</p>
            <p className={styles.navCart}>
                <Link href="/cart">
                    <FaShoppingCart /> ${subTotal.toFixed(2)}
                </Link>
            </p>
        </nav>
    );
};

export default Navbar;
