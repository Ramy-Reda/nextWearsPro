import React from 'react';
import Link from 'next/link';
import index from '../../styles/index.module.scss'
import Image from 'next/image';
import Image1 from '../../public/img/about/about-us.jpg'
import author from '../../public/img/about/testimonial-author.jpg';
import sea from '../../public/img/about/testimonial-pic.jpg';
import team1 from '../../public/img/about/team-1.jpg';
import team2 from '../../public/img/about/team-2.jpg';
import team3 from '../../public/img/about/team-3.jpg';
import team4 from '../../public/img/about/team-4.jpg';
import cleint1 from '../../public/img/clients/client-1.png';
import cleint2 from '../../public/img/clients/client-2.png';
import cleint3 from '../../public/img/clients/client-3.png';
import cleint4 from '../../public/img/clients/client-4.png';
import cleint5 from '../../public/img/clients/client-5.png';
import cleint6 from '../../public/img/clients/client-6.png';
import cleint7 from '../../public/img/clients/client-7.png';
import cleint8 from '../../public/img/clients/client-8.png';


const About = () => {
    return (
        <div>
            <div className={index.container_fluid}>
                <div className={index.back}>
                    <div className={index.container}>
                        <h4>about</h4>
                        <p> <Link href="/">Home</Link> {`>`} about </p>
                    </div>
                </div>
            </div>
            <div className={index.container_fluid}>
                <Image src={Image1} alt={Image1} />
            </div>
            <div className={index.container}>
                <div className={index.write}>
                    <div className={index.box}>
                        <h1>Who We Are ?</h1>
                        <p>Contextual advertising programs sometimes have strict policies that need to be adhered too. Let’s take Google as an example</p>
                    </div>
                    <div className={index.box}>
                        <h1>Who We Do ?</h1>
                        <p>In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance.</p>
                    </div>
                    <div className={index.box}>
                        <h1>Why Choose Us</h1>
                        <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home sits, but for older or infirm people.</p>
                    </div>
                </div>
            </div>
            <div className={index.container_fluid}>
                <div className={index.custom}>
                    <div className={index.word}>
                        <div className={index.text}>
                            <span className={index.icon}>,,</span>
                            <pre>
                            “Going out after work? Take your butane curling iron with you to the office, heat it up, style your hair before you leave the office and you won’t have to make a trip back home.”
                            </pre>
                            <p>
                                <Image src={author} alt="author" />
                                <p>
                                    <span>Augusta Schultz</span>
                                    <span>Fashion Design</span>
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className={index.sea}>
                        <Image src={sea} alt="sea" />
                    </div>
                </div>
            </div>
            <div className={index.stat}>
                <ul>
                    <li><h1>102</h1><h5> Our Clients</h5></li>
                    <li><h1>30</h1><h5>Total Categories</h5></li>
                    <li><h1>102</h1><h5>In Country</h5></li>
                    <li><h1>98%</h1><h5>Happy Customer</h5></li>
                </ul>
            </div>

            <div className={index.container_fluid}>
                <div className={index.header}>
                    <h3 style={{color: "#f52323"}}>OUR TEAM</h3>
                    <h1>Meet Our Team</h1>
                </div>
                <div className={index.ourTeam}>
                    <div className={index.box}>
                        <Image src={team1} alt="team" />
                        <div className={index.wordes}>
                            <div className={index.name}>
                                John Smith
                            </div>
                            <div className={index.jops}>
                                Fashion Design
                            </div>
                        </div>
                    </div>
                    <div className={index.box}>
                        <Image src={team2} alt="team" />
                        <div className={index.wordes}>
                            <div className={index.name}>
                            Christine Wise
                            </div>
                            <div className={index.jops}>
                                CEO
                            </div>
                        </div>
                    </div>
                    <div className={index.box}>
                        <Image src={team3} alt="team" />
                        <div className={index.wordes}>
                            <div className={index.name}>
                            Sean Robbins
                            </div>
                            <div className={index.jops}>
                                maneger
                            </div>
                        </div>
                    </div>
                    <div className={index.box}>
                        <Image src={team4} alt="team" />
                        <div className={index.wordes}>
                            <div className={index.name}>
                            Lucy Myers
                            </div>
                            <div className={index.jops}>
                            Delivery
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={index.container}>
                <div className={index.header}>
                    <p style={{color: "#f52323"}}>PARTNER</p>
                    <h1>Happy Clients</h1>
                </div>

                <div className={index.cleints}>
                    <Image src={cleint1} alt="cleints" />
                    <Image src={cleint2} alt="cleints" />
                    <Image src={cleint3} alt="cleints" />
                    <Image src={cleint4} alt="cleints" />
                    <Image src={cleint5} alt="cleints" />
                    <Image src={cleint6} alt="cleints" />
                    <Image src={cleint7} alt="cleints" />
                    <Image src={cleint8} alt="cleints" />
                </div>
            </div>
        </div>
    );
}

export default About;
