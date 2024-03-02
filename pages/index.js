import Head from 'next/head';
import Image from 'next/image';
import index from '../styles/index.module.css';
import slide1 from '../public/img/hero/hero-1.jpg';
import slide2 from '../public/img/hero/hero-2.jpg';
import colc1 from '../public/img/banner/banner-1.jpg';
import colc2 from '../public/img/banner/banner-2.jpg';
import colc3 from '../public/img/banner/banner-3.jpg';
import pro from '../public/img/product/product-1.jpg';
import pro2 from '../public/img/product/product-2.jpg';
import pro3 from '../public/img/product/product-3.jpg';
import pro4 from '../public/img/product/product-4.jpg';
import pro5 from '../public/img/product/product-5.jpg';
import pro6 from '../public/img/product/product-6.jpg';
import pro7 from '../public/img/product/product-7.jpg';
import pro8 from '../public/img/product/product-8.jpg';
import timer from '../public/img/product-sale.png';
import insta1 from '../public/img/instagram/instagram-1.jpg'
import insta2 from '../public/img/instagram/instagram-2.jpg'
import insta3 from '../public/img/instagram/instagram-3.jpg'
import insta4 from '../public/img/instagram/instagram-4.jpg'
import insta5 from '../public/img/instagram/instagram-5.jpg'
import insta6 from '../public/img/instagram/instagram-6.jpg'
import blog1 from '../public/img/blog/blog-1.jpg'
import blog2 from '../public/img/blog/blog-2.jpg'
import blog3 from '../public/img/blog/blog-3.jpg'
import { useEffect, useRef } from 'react';
export default function Home({}) {
  const res = useRef();
  const right = useRef();
  const left = useRef();
  const listed = useRef();
  const boxes = useRef();
  const count = useRef();
  useEffect(() => {
    let box = res.current.getElementsByClassName(index.box);
    let boxArrays = Array.from(box)
    let current = 0;

    right.current.addEventListener("click", () =>{
      if (current === boxArrays.length - 1) {
        right.current.classList.add(index.disapald);
      } else {
        right.current.classList.remove(index.disapald);
        current++;
      }
      addClasses();
    });

    left.current.addEventListener("click", () =>{
      if (current === 0) {
        left.current.classList.add(index.disapald);
      } else {
        current--;
        left.current.classList.remove(index.disapald);
      }
      addClasses()
    })

    const removeClasses = () => {
      boxArrays.forEach(ele => {
        ele.classList.remove(index.active);
      });
    }

    const addClasses = () => {
      removeClasses();
      box[current].classList.add(index.active);
    }

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
      let counter = count.current;
      let army = new Date("Dec 31, 2023 23:59:59").getTime();
      let clear = setInterval(() =>{
        let main = new Date().getTime(),
        diff = army + main,
        day = Math.floor(diff / (1000 * 60 * 60 * 24)),
        houres = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minute = Math.floor(diff % (1000 * 60 * 60 ) / (1000 * 60)),
        scondes = Math.floor(diff % (1000 * 60) / 1000);

        counter.querySelector('.days').innerHTML = day;
        counter.querySelector('.hours').innerHTML = houres;
        counter.querySelector('.minutes').innerHTML = minute;
        counter.querySelector('.sconde').innerHTML = scondes;
      })

  }, []);

    
  
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div className={index.container_fluid}>
          <div ref={res} className={index.res}>
            <div className={`${index.box} ${index.active}`}>
              <div className={index.img}>
                <Image src={slide1} alt="slide" />
              </div>
                <div className={index.text}>
                  <div className={index.clr}>
                    Summer colection
                  </div>
                  <h1>
                    Fall-Winter cllection 2030
                  </h1>
                  <div className={index.lorem}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo provident, libero fugit quasi consectetur odio illum aliquid, iusto dignissimos nemo? Distinctio eum alias porro saepe vero fuga tenetur sequi!
                  </div>

                  <button className={`${index.btn} ${index.btn_black}`}>
                    Shop Now
                  </button>

                  <div className={index.sociel}>
                    <p>face</p>
                    <p>twitter</p>
                    <p>instagram</p>
                    <p>linkedin</p>
                  </div>
                </div>
            </div>
            <div className={index.box}>
              <div className={index.img}>
                <Image src={slide2} alt="slide" />
              </div>
              <div className={index.text}>
                <div className={index.clr}>
                  Summer colection
                </div>
                <h1>
                  Fall-Winter cllection 2030
                </h1>
                <div className={index.lorem}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo provident, libero fugit quasi consectetur odio illum aliquid, iusto dignissimos nemo? Distinctio eum alias porro saepe vero fuga tenetur sequi!
                </div>

                <button className={`${index.btn} ${index.btn_black}`}>
                  Shop Now
                </button>

                <div className={index.sociel}>
                  <p>face</p>
                  <p>twitter</p>
                  <p>instagram</p>
                  <p>linkedin</p>
                </div>
              </div>
            </div>
            <div className={index.dicrention}>
              <div ref={right} className={index.right}>
                right
              </div>
              <div ref={left} className={index.left}>
                left
              </div>
            </div>
          </div>
      </div>
      <div className={index.container_fluid}>
        <div className={index.colection}>
          <div className={index.clothing}>
            <div className={index.txtclo}>
              <h1>clothing colection 2030</h1>
              <div className={index.hovercol}>
                shop now
              </div>
            </div>
            <div className={index.img}>
              <Image src={colc1} alt="clothing" />
            </div>
          </div>

          <div className={index.shoes}>
            <div className={index.txtsho}>
              <h1>shose spring</h1>
              <div className={index.hovercol}>
                shop now
              </div>
            </div>
            <div className={index.imgsho}>
              <Image src={colc2} alt="clothing" />
            </div>
          </div>

          <div className={index.acces}>
            <div className={index.txtacc}>
              <h1>Accessories</h1>
              <div className={index.hovercol}>
                shop now
              </div>
            </div>
            <div className={index.imgacc}>
              <Image src={colc3} alt="clothing" />
            </div>
          </div>
        </div>
      </div>
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
    <div className={index.container_fluid}>
      <div className={index.timer}>
        <div className={index.disc}>
          <div className={index.pos}>
            <h2>Clothings Hot</h2>
            <h2>Shoe Collection</h2>
            <h2>Accessories</h2>
          </div>
        </div>
        <div className={index.pho}>
          <Image src={timer} alt="timer" />
          <p>
            <span>sale of</span>
            <span>29.62$</span>
          </p>
        </div>
        <div className={index.clock}>
          <p>DEAL OF THE WEEK</p>
          <h1>Multi-pocket Chest Bag Black</h1>
          <div ref={count} className={index.time}>
            <span className={"days"}>days</span> : 
            <span className={"hours"}>houre</span> : 
            <span className={"minutes"}>minutes</span> : 
            <span className={"sconde"}>sconde</span>
          </div>
          <div className={`${index.btn} ${index.btn_black}`}>shop now</div>
        </div>
      </div>
    </div>
    <div className={index.container}>
      <div className={index.insta}>
        <div className={index.photo}>
          <Image src={insta1} alt="instagram" />
          <Image src={insta2} alt="instagram" />
          <Image src={insta3} alt="instagram" />
          <Image src={insta4} alt="instagram" />
          <Image src={insta5} alt="instagram" />
          <Image src={insta6} alt="instagram" />
        </div>
        <div className={index.instaText}>
          <h1>instagram</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <pre>#Male_Fashion</pre>
        </div>
      </div>
    </div>
    <div className={index.container}>
      <div className={index.header}>
        <p>LATEST NEWS</p>
        <h1>Fashion New Trends</h1>
      </div>
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
      </div>
      </div>
    </div>
    </div>
  )
}
