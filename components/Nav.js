import React, { useEffect, useRef, useState } from 'react';
import index from '../styles/index.module.css';
import Link from "next/link";
import Head from 'next/head';
const Nav = () => {
    const pages = useRef();
    const hide = useRef();
    const create = useRef();
    const container = useRef();
    const shop = useRef();
    const links = useRef();
    const show = useRef();
    const hideMenu = useRef();

    useEffect(() => {
        const page = pages.current;
        const eleHide = hide.current;
        const showMenu = show.current;
        const hideMen = hideMenu.current;
        const linked = links.current;
        
        page.addEventListener('click', () => {
            eleHide.classList.add(`${index.drag}`)
        });
        window.onscroll = () => {
            if (window.scrollY) {
                eleHide.classList.remove(`${index.drag}`)
            }
            if (window.scrollY >= 50) {
                create.current.style.backgroundColor = "white";
            } else {
                create.current.style.backgroundColor = "transparent";
            }
        }

        showMenu.addEventListener('click', () => {
            linked.style.right = 0;
            showMenu.style.display = "none";
            hideMen.style.display = "block";
            hideMen.style.opacity = "1";
        })
        hideMen.addEventListener('click', () => {
            linked.style.right = -35 + "%";
            hideMen.style.display = "none";
            showMenu.style.display = "block";
        });
    }, []);
    return (
        <div ref={container} className = {index.container_fluid}>
            <Head>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <div ref={create} className={index.rowNav}>
                <div className={index.logo}>
                    Eng-Ramy Reda
                </div>
                <div ref={links} className={index.links}>
                    <Link href="/">Home</Link>
                    <Link href="/shop">Shop</Link>
                    <pre ref={pages} className={index.page}>Page</pre>
                    <div ref={hide} className={index.hide}>
                        <Link href="/pages/about">About US</Link>
                        <Link href="/pages/shopdetails">Shop Details</Link>
                        <Link href="/pages/shopingcart">Shoping Cart</Link>
                        <Link href="/pages/checkOut">Check Out</Link>
                        <Link href="/pages/blogDetails">Blog Details</Link>
                    </div>
                    <Link href="/blog">Blog</Link>
                </div>
                <div ref={shop} className={index.shop}>
                    <div className={index.navSearsh}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className={index.navHeart}>
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className={index.navBasket}>
                        <i className="fa-solid fa-cart-flatbed-suitcase"></i>
                    </div>
                </div>
                <div className={index.menus}>
                    <div ref={show} className={index.show}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div ref={hideMenu} className={index.hides}>
                    <i class="fa-solid fa-square-xmark"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
