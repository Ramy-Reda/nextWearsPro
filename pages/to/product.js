import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import index from '../../styles/index.module.css';
import pro from '../../public/img/product/product-1.jpg';
import pro2 from '../../public/img/product/product-2.jpg';
import pro3 from '../../public/img/product/product-3.jpg';
import pro4 from '../../public/img/product/product-4.jpg';
import pro5 from '../../public/img/product/product-5.jpg';
import pro6 from '../../public/img/product/product-6.jpg';
import pro7 from '../../public/img/product/product-7.jpg';
import pro8 from '../../public/img/product/product-8.jpg';

const Product = () => {
    const boxes = useRef();
    const listed = useRef();

    useEffect(() => {
        let pros = listed.current.querySelectorAll('ul li');
        let prosImag = boxes.current.getElementsByClassName(index.box)
        let ImageArray = Array.from(prosImag) 
        pros.forEach( (child) => {
        child.addEventListener("click", function () {
            pros.forEach( (ele) => {
                ele.classList.remove(index.active);
                this.classList.add(index.active)
            })

            ImageArray.forEach( (img) => {
                img.style.display= "none";
            })

            document.querySelectorAll(this.dataset.cat).forEach( (port) =>{
                port.style.display = "block";
            })
        })
    })
    },);
    return (
        <div className={index.container_fluid}>
        <div ref={listed} className={index.listed}>
            <ul>
            <li data-cat='.all' className = {index.active}>Best Sellers</li>
            <li data-cat='.new'> New Arrivals</li>
            <li data-cat='.hot'>Hot Sales </li>
            </ul>
        </div>
        <div ref={boxes} className={index.marketing}>
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
            <div className={`${index.box} all hot `}style={{transition: "all 0.5s;"}}>
            <Image src={pro5} alt={pro} />
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
            <div className={`${index.box} all hot `} style={{transition: "all 0.5s;"}}>
            <Image src={pro6} alt={pro} />
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
            <div className={`${index.box} all hot `} style={{transition: "all 0.5s;"}}>
            <Image src={pro7} alt={pro} />
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
            <div className={`${index.box} all hot `} style={{transition: "all 0.5s;"}}>
            <Image src={pro8} alt={pro} />
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
    );
}

export default Product;
