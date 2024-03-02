import React from 'react';
import cart from '../../styles/shopCart.module.css'
import Link from 'next/link'; 
import Image from 'next/image';;
import cart1 from "../../public/img/shopping-cart/cart-1.jpg"
import cart2 from "../../public/img/shopping-cart/cart-2.jpg"
import cart3 from "../../public/img/shopping-cart/cart-3.jpg"

export default function ShopingCart() {
    return (
        <div className={cart.container_fluid}>
            <div className={cart.back}>
                    <div className={cart.container}>
                        <h2>about</h2>
                        <p> <Link href="/"><h3>Home</h3></Link> {`>`} <h3>Shop Cart</h3> </p>
                    </div>
            </div>
            <div className={cart.container}>
                <div className={cart.all}>
                    <div className={cart.right}>
                        <div className={cart.up}>
                            <p>PRODUCT</p>
                            <p>QUANTITY</p>
                            <p>TOTAL</p>
                        </div>
                        <hr />
                        <div className={cart.buypro}>
                            <div className={cart.img}>
                                <Image src={cart1} alt={cart} />
                                <h5>
                                    <p>T-shirt Contrast Pocket</p>
                                    <p>$95.5</p>
                                </h5>
                            </div>
                            <div className={cart.quant}>
                                <input type="number"  />
                            </div>
                            <div className={cart.total}>
                                $30.00
                            </div>
                            <div className={cart.close}>
                                <span>X</span>
                            </div>
                        </div>
                        <div className={cart.buypro}>
                            <div className={cart.img}>
                                <Image src={cart2} alt={cart} />
                                <h5>
                                    <p>T-shirt Contrast Pocket</p>
                                    <p>$99.3</p>
                                </h5>
                            </div>
                            <div className={cart.quant}>
                                <input type="number"  />
                            </div>
                            <div className={cart.total}>
                                $29.50
                            </div>
                            <div className={cart.close}>
                                <span>X</span>
                            </div>
                        </div>
                        <div className={cart.buypro}>
                            <div className={cart.img}>
                                <Image src={cart3} alt={cart} />
                                <h5>
                                    <p>T-shirt Contrast Pocket</p>
                                    <p>$98.5</p>
                                </h5>
                            </div>
                            <div className={cart.quant}>
                                <input type="number"  />
                            </div>
                            <div className={cart.total}>
                                $25.00
                            </div>
                            <div className={cart.close}>
                                <span>X</span>
                            </div>
                        </div>

                        <div className={cart.btn}>
                            <button className={cart.btnF}>CONTINUE SHOPPING</button>
                            <button className={cart.btnB}>UPDATE CART</button>
                        </div>
                    </div>
                    <div className={cart.left}>
                        <h3>DISCOUNT CODES</h3>

                        <form>
                            <input type="text" placeholder="coupon code" />
                            <input type="submit" value="APPLY" />
                        </form>

                        <div className={cart.boxes}>
                            <h4>CART TOTAL</h4>
                            <p className={cart.val}>
                                <p>Subtotal</p>
                                <p>$198.32</p>
                            </p>

                            <p className={cart.val}>
                                <p>Total</p>
                                <p>$198.32</p>
                            </p>
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
