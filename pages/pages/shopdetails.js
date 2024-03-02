import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import index from '../../styles/index.module.css'
import Image from 'next/image';
import left1 from '../../public/img/shop-details/thumb-1.png'
import left2 from '../../public/img/shop-details/thumb-2.png'
import left3 from '../../public/img/shop-details/thumb-3.png'
import left4 from '../../public/img/shop-details/thumb-4.png'
import right1 from '../../public/img/shop-details/product-big.png'
import right2 from '../../public/img/shop-details/product-big-2.png'
import right3 from '../../public/img/shop-details/product-big-3.png'
import right4 from '../../public/img/shop-details/product-big-4.png'
import buys from '../../public/img/shop-details/details-payment.png';
import pro from '../../public/img/product/product-1.jpg';
import pro2 from '../../public/img/product/product-2.jpg';
import pro3 from '../../public/img/product/product-3.jpg';
import pro4 from '../../public/img/product/product-4.jpg';

const Shopdetails = () => {
    const leftD = useRef();
    const rightD = useRef();
    const size = useRef();
    const listed = useRef();
    const choose = useRef();

    useEffect(() => {
        let boxes = leftD.current.getElementsByClassName(index.box);
        let boxesArray = Array.from(boxes);
        let apps = rightD.current.getElementsByClassName(index.boxS);
        const appArray = Array.from(apps);
        let currentslide = 1 ; 
        let sizeChoose = size.current.querySelectorAll("span");
        let lis = listed.current.querySelectorAll("li");
        let chooses = choose.current.getElementsByClassName(index.boxWord);

        let ArrayCho = Array.from(chooses);


        lis.forEach((ele) => {
            ele.addEventListener("click", function() {
                lis.forEach((e) => {
                    e.classList.remove(index.active);
                    this.classList.add(index.active);

                    ArrayCho.forEach(d => {
                        d.classList.remove(index.activeop)
                    });

                    document.querySelectorAll(this.dataset.cat).forEach((x) =>{
                        x.classList.add(index.activeop)
                    });
                });
            })
        })
        
        sizeChoose.forEach((ele) => {
            ele.addEventListener("click", function() {
                sizeChoose.forEach((e) => {
                    e.classList.remove(index.active);
                    this.classList.add(index.active);
                });
            })
        })

            for (let i = 0; i < boxesArray.length; i++) {
                boxesArray[i].setAttribute('data-index', i);
                boxesArray[i].onclick = function () {
                    currentslide = parseInt(boxesArray[i].getAttribute('data-index'));
                    check();
                }
            }

            const check = () => {
                removeActive();
                appArray[currentslide].classList.add(index.activeslider);
            }

            const removeActive = () => {
                appArray.forEach(app => {
                    app.classList.remove(index.activeslider);
                    });

                boxesArray.forEach(box => {
                    box.classList.remove(index.activeImage);
                });
            }
            check()
    }, [])
    return (
        <div>
            <div style={{backgroundColor : '#f3f2ee' , marginTop : '50px'}} className={index.container_fluid}>
                <div className={index.rowdetails}>
                        <div className={index.backShop}>
                            <span>Shop Details</span>
                            <span> <Link href="/">Home</Link> {`>`} Shop  {`>`} Product Details</span>
                        </div>
                        <div className={index.slideDetails}>
                        <div ref={leftD} className={index.leftDetails}>
                            <div className={`${index.box} ${index.activeImage}`}>
                                <Image src={left1} alt={left1} />
                            </div>
                            <div className={index.box}>
                                <Image src={left2} alt={left2} />
                            </div>
                            <div className={index.box}>
                                <Image src={left3} alt={left3} />
                            </div>
                            <div className={index.box}>
                                <Image src={left4} alt={left4} />
                            </div>
                        </div>
                        <div ref={rightD} className={index.rigthDetails}>
                            <div className={`${index.boxS} ${index.activeslider}`}>
                                <Image src={right2} alt={right1} />
                            </div>
                            <div className={index.boxS}>
                                <Image src={right3} alt={right2} />
                            </div>
                            <div className={index.boxS}>
                                <Image src={right1} alt={right3} />
                            </div>
                            <div className={index.boxS}>
                                <Image src={right4} alt={right4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={index.container}>
                <div className={index.information}>
                    <div className={index.header}>
                        <h1>Hooded thermal anorak</h1>
                    </div>
                    <div className="rev">
                        stars - 5 Reviews
                    </div>
                    <div className={index.salary}>
                            <h1 className={index.yes}>$70.00</h1>
                            <h1 className={index.no}>$270.00</h1>
                    </div>
                    <div className={index.text}>
                    Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening with placket
                    </div>
                    <div className={index.choose}>
                        <div ref={size} className={index.size}>
                            size :
                            <span className={index.active}>XXL</span>
                            <span>XL</span>
                            <span>L</span>
                            <span>S</span>
                        </div>

                        <div className={index.color}>
                            <div>Color :</div>
                            <p style={{backgroundColor: '#0b090c'}}></p>
                            <p style={{backgroundColor: '#20315f'}}></p>
                            <p style={{backgroundColor: '#f1af4d'}}></p>
                            <p style={{backgroundColor: '#ed1c24'}}></p>
                            <p style={{backgroundColor: '#ffffff'}}></p>
                        </div>
                        <input type="number" value="1" />
                        <button>Add To Cart</button>

                        <div className={index.addes}>
                            <span>ADD TO WISHLIST</span> <pre>  -  </pre> <span>ADD TO COMPARE</span>
                        </div>

                        <div className={index.buy}>
                            <h3>Guaranteed Safe Checkout</h3>
                            <Image src={buys} alt="payment" />
                        </div>
                    </div>
                    <div className={index.info}>
                            <div className={index.boxI}>
                                <span>SKU : </span>
                                <span>1558488</span>
                            </div>

                            <div className={index.boxI}>
                                <span>Categories : </span>
                                <span>clothes</span>
                            </div>

                            <div className={index.boxI}>
                                <span>tag : </span>
                                <span>Clothes, Skin, Body</span>
                            </div>
                    </div>

                    <div className={index.switch}>
                        <ul ref={listed}>
                            <li className={index.active} data-cat=".styles_all__qOelW">Description</li>
                            <li data-cat=".styles_cust__VgV5v">Customer Previews(5)</li>
                            <li data-cat=".styles_Addition__9LFoX">Additional information</li>
                        </ul>
                        <hr />
                        <div ref={choose} className={index.wordes}>
                            <div className={`${index.activeop} ${index.boxWord} ${index.all}`}>
                                <h3>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.</h3>

                                <div>
                                    <h2>Products Infomation</h2>
                                    <p>A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.

As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased</p>
                                </div>
                                <div>
                                    <h2>Material used</h2>
                                    <p>Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
                                </div>
                            </div>
                            <div className={`${index.boxWord} ${index.cust}`}>
                                <div>
                                <h3>Products Infomation</h3>
                                <p>A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.

As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.</p>
                                </div>
                                <div>
                                    <h3>Material used</h3>
                                    <p>Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
                                </div>
                            </div>
                            <div className={`${index.boxWord} ${index.Addition} `}>
                                <h3>
                                Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.
                                </h3>

                                <div>
                                    <h3>Products Infomation</h3>
                                    <p>
                                    A Pocket PC is a handheld computer, which features many of the same capabilities as a modern PC. These handy little devices allow individuals to retrieve and store e-mail messages, create a contact file, coordinate appointments, surf the internet, exchange text messages and more. Every product that is labeled as a Pocket PC must be accompanied with specific software to operate the unit and must feature a touchscreen and touchpad.

As is the case with any new technology product, the cost of a Pocket PC was substantial during it’s early release. For approximately $700.00, consumers could purchase one of top-of-the-line Pocket PCs in 2003. These days, customers are finding that prices have become much more reasonable now that the newness is wearing off. For approximately $350.00, a new Pocket PC can now be purchased.
                                    </p>
                                </div>
                                <div>
                                    <h3>Material used</h3>
                                    <p>Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. Polyester suits tend to have a shine to them compared to wool and cotton suits, this can make the suit look cheap. The texture of velvet is luxurious and breathable. Velvet is a great choice for dinner party jacket and can be worn all year round.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={index.relatedpro}>
                        <h2>Related Product</h2>
                        <div className={index.ralatedmarket}>
                        <div className={`${index.box} all new`} style={{transition: "all 0.5s;"}}>
                        <Image src={pro} alt={pro} />
                        <div className={index.right}>
                            <i className="fa-regular fa-heart"></i>
                            <i className="fa-solid fa-right-left"></i>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className={index.under}>
                            <div className={index.colors}>
                            <p></p>
                            <p></p>
                            <p></p>
                            </div>
                            <div className={index.hover}>
                            <p>+add to card</p>
                            <pre>Shose</pre>
                            </div>
                            <div className={index.stars}>
                            stars
                            </div>
                            <div className={index.price}>
                            $68.24
                            </div>
                        </div>
                        </div>
                        <div className={`${index.box} all new `} style={{transition: "all 0.5s;"}}>
                        <Image src={pro2} alt={pro} />
                        <div className={index.right}>
                            <i className="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-right-left"></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className={index.under}>
                            <div className={index.colors}>
                            <p></p>
                            <p></p>
                            <p></p>
                            </div>
                            <div className={index.hover}>
                            <p>+add to card</p>
                            <pre>Shose</pre>
                            </div>
                            <div className={index.stars}>
                            stars
                            </div>
                            <div className={index.price}>
                            $68.24
                            </div>
                        </div>
                        </div>
                        <div className={`${index.box} all new  `}style={{transition: "all 0.5s;"}}>
                        <Image src={pro3} alt={pro} />
                        <div className={index.right}>
                            <i className="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-right-left"></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className={index.under}>
                            <div className={index.colors}>
                            <p></p>
                            <p></p>
                            <p></p>
                            </div>
                            <div className={index.hover}>
                            <p>+add to card</p>
                            <pre>Shose</pre>
                            </div>
                            <div className={index.stars}>
                            stars
                            </div>
                            <div className={index.price}>
                            $68.24
                            </div>
                        </div>
                        </div>
                        <div className={`${index.box} all new `} style={{transition: "all 0.5s;"}}>
                        <Image src={pro4} alt={pro} />
                        <div className={index.right}>
                            <i className="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-right-left"></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className={index.under}>
                            <div className={index.colors}>
                            <p></p>
                            <p></p>
                            <p></p>
                            </div>
                            <div className={index.hover}>
                            <p>+add to card</p>
                            <pre>Shose</pre>
                            </div>
                            <div className={index.stars}>
                            stars
                            </div>
                            <div className={index.price}>
                            $68.24
                            </div>
                        </div>
                    </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Shopdetails;
