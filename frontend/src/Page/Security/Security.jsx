import React, { useEffect } from 'react'
import style from './Security.module.css'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import Value from '../../Component/Value/Value'
import Form1 from '../../Component/Form1/Form1'
import img from '../../Assets/cloud.jpg'
import software from '../../Assets/software-developer.jpg'
import { FiSmartphone } from "react-icons/fi";
import Client from '../../Component/Client/Client'
import Card from '../../Component/Card/Card'
import banner from '../../Assets/SEC.jpg'
import markett from '../../Assets/markett.webp'
import Link from '../../Assets/link.jpg'
import brand from '../../Assets/brand.jpg'

import Aos from "aos";
import "aos/dist/aos.css";

function Security() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div style={{ position: "sticky", top: '0', zIndex: '3' }}>
                <Navbar />
            </div>

            <section className={style.sec}>


                <div data-aos="fade-up" className={style.bg} >
                    <img src={img} alt="" />
                </div>

                <div data-aos="fade-down" className={style.content}>
                    <h1>
                        WORDPRESS/WEBFLOW MAGIC
                    </h1>
                    <h2>
                        WORDPRESS
                    </h2>
                    <p>
                        Transform your digital presence effortlessly with WordPress and Webflow. Our expertise turns your ideas into stunning, functional websites. Experience the magic of seamless web design and development.
                    </p>

                </div>
            </section>


            <section className={style.alt}>


                <div data-aos="fade-down" className={style.content}>
                    <h1>
                        SEO ALCHEMY
                    </h1>
                    <h2>
                        Search Engine Optimization (SEO)
                    </h2>

                    <p>
                        We make your website visible on search
                        engines like Google, Bing, and Yahoo. With
                        expert keyword research, on-page
                        optimization, and backlink building, we ensure
                        you reach the top of the search results.
                    </p>


                </div>

                <div data-aos="fade-up" className={style.bg} >
                    <img src={software} alt="" />
                </div>

            </section>




            <section className={style.sec}>


                <div data-aos="fade-up" className={style.bg} >
                    <img src={banner} alt="" />
                </div>

                <div data-aos="fade-down" className={style.content}>
                    <h1>
                        CAMPAIGN DESIGN
                    </h1>
                    <h2>
                        Content That Captivates
                    </h2>
                    <p>
                        Our content marketing strategies include
                        high-quality blogs, articles, infographics,
                        videos, and more. We help you establish
                        authority in your industry and keep your
                        audience engaged.
                    </p>

                </div>
            </section>


            <section className={style.alt}>

                <div data-aos="fade-down" className={style.content}>
                    <h1>
                        SOCIAL MEDIA MARKETING
                    </h1>
                    <h2>
                        Experience the change
                    </h2>

                    <p>
                        Our social media campaigns on platforms like
                        Facebook, Instagram, Twitter, and LinkedIn
                        will allure your audience. Compelling design,
                        exciting contests, and expert community
                        management are our specialties.
                    </p>


                </div>

                <div data-aos="fade-up" className={style.bg} >
                    <img src={markett} alt="" />
                </div>

            </section>


            <section className={style.sec}>


                <div data-aos="fade-up" className={style.bg} >
                    <img src={Link} alt="" />
                </div>

                <div data-aos="fade-down" className={style.content}>
                    <h1>
                        LINKEDIN OPTIMIZATION
                    </h1>
                    <h2>
                        LinkedIn Optimization for Success
                    </h2>
                    <p>
                        Unlock Your LinkedIn Potential
                        Maximize your LinkedIn profile's potential
                        with our services: Profile Enhancement;
                        Resume Perfection; and Cover Letter
                        Brilliance.
                    </p>

                </div>
            </section>


            <section className={style.alt}>

                <div data-aos="fade-down" className={style.content}>
                    <h1>
                        Design-As-A-Service
                    </h1>
                    <h2>
                        Crafting Your Career Success
                    </h2>

                    <p>
                        Our DaaS services redefine your digital
                        presence: Online Reputation Management;
                        Social Media Domination; SEO Mastery; and
                        Content Creation Expertise
                    </p>


                </div>

                <div data-aos="fade-up" className={style.bg} >
                    <img src={software} alt="" />
                </div>

            </section>


            <section className={style.sec}>


                <div data-aos="fade-up" className={style.bg} >
                    <img src={brand} alt="" />
                </div>

                <div data-aos="fade-down" className={style.content}>
                    <h1>
                        BRAND BUILDING

                    </h1>
                    <h2>
                        Brand Building Beyond Boundaries Elevating Reputations
                    </h2>
                    <p>
                        Our service empowers your brand to transcend
                        borders with creative innovation, forging a
                        cross-cultural brand identity that ensures global
                        recognition and resonance.
                    </p>

                </div>
            </section>


            <Card />

            <Value />

            <Client />

            <section className={style.formh}>
                <h1>
                    Need a personalized solution?
                </h1>
                <p data-aos="fade-up">
                    Talk to one of our customer solution engineers today to discuss how your business can be taken to the next level
                </p>

            </section>

            <section className={style.form}>

                <div className={style.container}>

                    <div data-aos="fade" className={style.info}>

                        <p>
                            Get a personal consultation and start digitalizing today!
                        </p>

                        <h4 className='mt-[1em]'> <FiSmartphone />	Email</h4>
                        <h4 className='mb-[1em]'>info@growingdigital.in</h4>

                        <h4 className='mt-[1em]'> <FiSmartphone />	Phone</h4>
                        <h4 className='mb-[1em]'> +91 95999 01561</h4>

                    </div>


                    <div className={style.info2}>
                        <Form1 />
                    </div>

                </div>

            </section>

            <Footer />
        </>
    )
}

export default Security