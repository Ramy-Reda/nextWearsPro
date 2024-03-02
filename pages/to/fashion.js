import React from 'react';
import Image from 'next/image';
import index from '../../styles/index.module.css';
import blog1 from '../../public/img/blog/blog-1.jpg';
import blog2 from '../../public/img/blog/blog-2.jpg';
import blog3 from '../../public/img/blog/blog-3.jpg';
import blog5 from '../../public/img/blog/blog-5.jpg';
import blog6 from '../../public/img/blog/blog-6.jpg';
import blog7 from '../../public/img/blog/blog-7.jpg';
import blog8 from '../../public/img/blog/blog-8.jpg';
import blog9 from '../../public/img/blog/blog-9.jpg';
import blog4 from '../../public/img/blog/blog-4.jpg';

const Fashion = () => {
    return (
        <div>
            <div className={index.fashion}>
                <div className={index.blog}>
                    <div className={index.box}>
                    <Image src={blog1} alt="blog1" />
                    <div className={index.boxHover}>
                        <p>20 Dec 2022</p>
                        <h2>What Curling Irons Are The Best Ones</h2>
                        <div className={index.btn}>
                        read more
                        </div>
                    </div>
                    </div>
                    <div className={index.box}>
                    <Image src={blog2} alt="blog1" />
                    <div className={index.boxHover}>
                        <p>20 Dec 2022</p>
                        <h2>What Curling Irons Are The Best Ones</h2>
                        <div className={index.btn}>
                        read more
                        </div>
                    </div>
                    </div>
                    <div className={index.box}>
                    <Image src={blog3} alt="blog1" />
                    <div className={index.boxHover}>
                        <p>20 Dec 2022</p>
                        <h2>What Curling Irons Are The Best Ones</h2>
                        <div className={index.btn}>
                        read more
                        </div>
                    </div>
                    </div>
                    <div className={index.box}>
                    <Image src={blog4} alt="blog1" />
                    <div className={index.boxHover}>
                        <p>20 Dec 2022</p>
                        <h2>What Curling Irons Are The Best Ones</h2>
                        <div className={index.btn}>
                        read more
                        </div>
                    </div>
                    </div>
                    <div className={index.box}>
                    <Image src={blog5} alt="blog1" />
                    <div className={index.boxHover}>
                        <p>20 Dec 2022</p>
                        <h2>What Curling Irons Are The Best Ones</h2>
                        <div className={index.btn}>
                        read more
                        </div>
                    </div>
                    </div>
                    <div className={index.box}>
                    <Image src={blog6} alt="blog1" />
                    <div className={index.boxHover}>
                        <p>20 Dec 2022</p>
                        <h2>What Curling Irons Are The Best Ones</h2>
                        <div className={index.btn}>
                        read more
                        </div>
                    </div>
                    </div>
                    <div className={index.box}>
                    <Image src={blog7} alt="blog1" />
                    <div className={index.boxHover}>
                        <p>20 Dec 2022</p>
                        <h2>What Curling Irons Are The Best Ones</h2>
                        <div className={index.btn}>
                        read more
                        </div>
                    </div>
                    </div>
                    <div className={index.box}>
                    <Image src={blog8} alt="blog1" />
                    <div className={index.boxHover}>
                        <p>20 Dec 2022</p>
                        <h2>What Curling Irons Are The Best Ones</h2>
                        <div className={index.btn}>
                        read more
                        </div>
                    </div>
                    </div>
                    <div className={index.box}>
                    <Image src={blog9} alt="blog1" />
                    <div className={index.boxHover}>
                        <p>20 Dec 2022</p>
                        <h2>What Curling Irons Are The Best Ones</h2>
                        <div className={index.btn}>
                        read more
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fashion;
