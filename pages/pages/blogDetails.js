import React from 'react';
import index from '../../styles/blogDetails.module.css';
import Image from 'next/image';
import imgBlogs from "../../public/img/blog/details/blog-details.jpg";
import author from "../../public/img/blog/details/blog-author.jpg"

export default function blogDetails() {
    return (
        <div>
            <div className={index.container_fluid}>
                <div className={index.start}>
                    <h2>Are you one of the thousands of Iphone owners who has no idea</h2>
                    <ul>
                        <li>By Deercreative  |  </li>
                        <li> February 21, 2019  |  </li>
                        <li> 8 Comments</li>
                    </ul>
                </div>

                <Image src={imgBlogs} alt="blog Details" />
            </div>
            <div className={index.container}>
                <div className={index.writer}>
                        <p>
                                Hydroderm is the highly desired anti-aging cream on the block. This serum restricts the occurrence of early aging sings on the skin and keeps the skin younger, tighter and healthier. It reduces the wrinkles and loosening of skin. This cream nourishes the skin and brings back the glow that had lost in the run of hectic years.

    The most essential ingredient that makes hydroderm so effective is Vyo-Serum, which is a product of natural selected proteins. This concentrate works actively in bringing about the natural youthful glow of the skin. It tightens the skin along with its moisturizing effect on the skin. The other important ingredient, making hydroderm so effective is “marine collagen” which along with Vyo-Serum helps revitalize the skin.</p>
                        <div className={index.box}>
                            “When designing an advertisement for a particular product many things should be researched like where it should be displayed.”

                            <span>_ JOHN SMITH _</span>
                        </div>
                        <p>Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of skin. Problems like dark circles, puffiness, and crow’s feet can be control from the strong effects of this serum.</p>
                        <p>Hydroderm is a multi-functional product that helps in reducing the cellulite and giving the body a toned shape, also helps in cleansing the skin from the root and not letting the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging from the sensitive near the eyes.</p>
                </div>
                <hr />
                <div className={index.picts}>
                    <div className={index.pict}>
                        <Image src={author} alt="Aiden" />
                        <p>Aiden Blair</p>
                    </div>
                    <div className={index.word}>
                        <span>#Fashion</span>
                        <span> #Trending</span>
                        <span> #2024</span>
                    </div>
                </div>
                <div className={index.rev}>
                    <div className={index.box}>
                        <span> Previous Pod</span>
                        <p>It S Classified How To Utilize Free Classified Ad Sites</p>
                    </div>
                    <div className={index.box}>
                        <span>Next Pod </span>
                        <p>Tips For Choosing The Perfect Gloss For Your Lips</p>
                    </div>
                </div>
                <div className={index.Leave}>
                    <h1>Leave A Comment</h1>
                    <form action="">
                        <input type="text" placeholder="Enter Name" />
                        <input type="text" placeholder="Enter Email" />
                        <input type="text" placeholder="Enter Phon" />
                        <textarea placeholder="Comment" id="" cols="30" rows="10"></textarea>
                    </form>
                    <button> POST COMMENT </button>
                </div>
            </div>
        </div>
    )
}
