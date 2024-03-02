import React from 'react';
import Link from 'next/link';
import index from '../styles/index.module.css';
const Footer = () => {
    return (
        <div className={index.container_fluid}>
            <div className={index.foot}>
                <div className={index.me}>
                    <h3>ENG / Ramy Reda</h3>
                    <p>The customer is at the heart of our unique business model, which includes design.</p>
                </div>
                <div className= {index.FootShoping}>
                    <h1> Shopping </h1>
                    <Link href=""> contact us</Link>
                    <Link href=""> shopping</Link>
                    <Link href=""> Letters</Link>
                </div>
                <div className={index.newLetter}>
                <input type="text"  placeholder="your Email"/>
                    <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                </div>
                <div className={index.break}></div>
                <div className={index.finish}>
                Copyright © 2022 All rights reserved | This template is made with myself |by <span>ENG / Ramy Reda</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
