"use client";

import Link from "next/link";
import styles from "./Navigation.module.css"

const Navigation = () => {
    return(
        <nav className={styles.navbar}>

            <h1 className={styles.font}><Link href="/">KAREL VANĚK</Link></h1>
            <div className={styles.alignright}>
                <h2><Link href="/blog">BLOG</Link></h2>
                <h2><Link href="/">KE STAŽENÍ</Link></h2>
                <h2><Link href="/">KONTAKT</Link></h2>
            </div>


        </nav>
    );
}

export default Navigation;