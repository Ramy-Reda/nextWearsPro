import { useEffect, useRef } from 'react';
import Link from 'next/link';
import index from '../styles/index.module.css';
import Product from "./to/product"

export default function Shop() {
    
    return (
        <div>
            <div className={index.container_fluid}>
                <div className={index.back}>
                    <div className={index.container}>
                        <h4>Shop</h4>
                        <p> <Link href="/">Home</Link> {`>`} shop </p>
                    </div>
                </div>
            </div>

            <div className={index.container_fluid}>
            <div className={index.plus}>
                        <p>Showing 1–12 of 126 results</p>
                        <div>
                        <span>Sort by Price : </span>
                        <select>
                            <option>
                                low to high
                            </option>
                            <option>$0-$55</option>
                            <option>$55-$100</option>
                        </select>
                        </div>
                    </div>
                <div className={index.rowShop}>
                    <div className={index.left}>
                        <input type="text" placeholder="search" />
                        <div className={index.catigory}>
                            <article className={index.box}>
                                <details>
                                    <summary>CATEGORIES </summary>
                                    <ul>
                                        <li>men (9)</li>
                                        <li>women(20)</li>
                                        <li>bags(20)</li>
                                        <li>clothing(20)</li>
                                        <li>shoes(20)</li>
                                        <li>Accessories (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                    </ul>
                                </details>
                            </article>
                        </div>
                        <div className={index.catigory}>
                            <article className={index.box}>
                                <details>
                                    <summary>CATEGORIES </summary>
                                    <ul>
                                        <li>men (9)</li>
                                        <li>women(20)</li>
                                        <li>bags(20)</li>
                                        <li>clothing(20)</li>
                                        <li>shoes(20)</li>
                                        <li>Accessories (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                    </ul>
                                </details>
                            </article>
                        </div>
                        <div className={index.catigory}>
                            <article className={index.box}>
                                <details>
                                    <summary>CATEGORIES </summary>
                                    <ul>
                                        <li>men (9)</li>
                                        <li>women(20)</li>
                                        <li>bags(20)</li>
                                        <li>clothing(20)</li>
                                        <li>shoes(20)</li>
                                        <li>Accessories (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                    </ul>
                                </details>
                            </article>
                        </div>
                        <div className={index.catigory}>
                            <article className={index.box}>
                                <details>
                                    <summary>CATEGORIES </summary>
                                    <ul>
                                        <li>men (9)</li>
                                        <li>women(20)</li>
                                        <li>bags(20)</li>
                                        <li>clothing(20)</li>
                                        <li>shoes(20)</li>
                                        <li>Accessories (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                    </ul>
                                </details>
                            </article>
                        </div>
                        <div className={index.catigory}>
                            <article className={index.box}>
                                <details>
                                    <summary>CATEGORIES </summary>
                                    <ul>
                                        <li>men (9)</li>
                                        <li>women(20)</li>
                                        <li>bags(20)</li>
                                        <li>clothing(20)</li>
                                        <li>shoes(20)</li>
                                        <li>Accessories (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                    </ul>
                                </details>
                            </article>
                        </div>
                        <div className={index.catigory}>
                            <article className={index.box}>
                                <details>
                                    <summary>CATEGORIES </summary>
                                    <ul>
                                        <li>men (9)</li>
                                        <li>women(20)</li>
                                        <li>bags(20)</li>
                                        <li>clothing(20)</li>
                                        <li>shoes(20)</li>
                                        <li>Accessories (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                        <li>kids (20)</li>
                                    </ul>
                                </details>
                            </article>
                        </div>
                    </div>
                    <div className={index.right}>
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}
