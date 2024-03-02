import React from 'react';
import index from '../../styles/checkOut.module.css';
import Link from 'next/link';

const CheckOut = () => {
    return (
        <div className={index.container_fluid}>
            <div className={index.back}>
                <div className={index.container}>
                    <h4>Check Out</h4>
                    <p> <Link href="/">Home</Link> {`>`} Check Out </p>
                </div>
            </div>
            <div className={index.container}>
                <div className={index.check}>
                    <div className={index.left}>
                        <div className={index.head}>
                            <span>icon</span> <span> Have a coupon? Click here to enter your code</span>
                        </div>
                        <h3>BILLING DETAILS</h3>
                        <hr />

                        <form action="">
                            <div className={index.box2}>
                                <div>
                                    <label>Fist Name <span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>Last Name <span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={index.box1}>
                                <label>Country <span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className={index.box1}>
                                <label>Address<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className={index.box1}>
                                <label>Town/City<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className={index.box1}>
                                <label>Country/State<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className={index.box1}>
                                <label>Postcode / ZIP <span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className={index.box2}>
                                <div>
                                    <label>Phone <span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>Email<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>

                            <label className={index.checkBox}>
                                <input type="checkbox" />
                                <p>   Create an account?   </p>
                            </label>
                            <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page</p>
                            <div className={index.box1}>
                                <label> Account Password<span>*</span></label>
                                <input type="text" />
                            </div>
                            <label className={index.checkBox}>
                                <input type="checkbox" />
                                <p>   Order notes</p>
                            </label>
                            <div className={index.box1}>
                                <label>Order notes<span>*</span></label>
                                <input type="text" />
                            </div>
                        </form>
                    </div>
                    <div className={index.right}>
                        <div className={index.container}>
                            <h2>YOUR ORDER</h2>
                            <hr />
                            <div className={index.descroption}>
                                <p>Product</p>
                                <p>total</p>
                            </div>
                                <div className={index.moreDesc}>
                                    <ul >
                                        <li>
                                            <p> Vanilla salted caramel</p>
                                            <p>$ 700</p>
                                        </li>
                                        <li>
                                            <p>German chocolate</p>
                                            <p>$ 55</p>
                                        </li>
                                        <li>
                                            <p> Sweet autumn</p>
                                            <p>$ 100</p>
                                        </li>
                                        <li>
                                            <p>Cluten free mini dozen</p>
                                            <p>$ 2000</p>
                                        </li>
                                        <hr />
                                        <li>
                                            <p>Subtotal</p>
                                            <p style={{color: "red"}}>$ 2000</p>
                                        </li>
                                        <li>
                                            <p>total</p>
                                            <p style={{color: "red"}}>$ 2000</p>
                                        </li>
                                    </ul>
                                    <hr />
                                    <input type="checkbox" />
                                    <p className={index.hags}>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <input type="checkbox" />
                                    <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
