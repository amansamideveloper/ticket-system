import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <div className={styles.container}>
            <Link href="/">Ticket System</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/">Booking</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/">About us</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/">Contact us</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/">Contact</Link>
                </li>

            </ul>
            <div className={styles.humberger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul onClick={() => setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
                <li className={styles.menuItem}>
                    <Link href="/products/design">Booking</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/development">Contact us</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/product">about us</Link>
                </li>

            </ul>
        </div>
    )
}

export default Navbar