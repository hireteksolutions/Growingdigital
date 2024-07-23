import React, { useEffect } from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import dev2 from '../../Assets/Dev2.jpg'

import style from './Webdevelopment.module.css';
import { useNavigate } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';

import devsub1 from '../../Assets/devsub1.jpg'
import devsub2 from '../../Assets/devsub2.png'
import devsub3 from '../../Assets/devsub3.png'
import devsub4 from '../../Assets/devsub4.png'

function Webdevelopment() {

    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <>
            <Helmet>
                <title>GROWING DIGITAL WEB DEVELOPMENT SERVICES</title>
                <meta name="description" content="Explore the importance of integrating brand values into web development and its impact on audience engagement and loyalty." />
                <meta property="og:title" content="GROWING DIGITAL WEB DEVELOPMENT SERVICES" />
                <meta property="og:description" content="Discover why integrating brand values into web development is crucial for fostering authenticity, building trust, and cultivating meaningful connections with audiences." />
                <meta property="og:type" content="article" />
                <link rel="canonical" href="https://www.growingdigital.in/web-development" />
            </Helmet>

            <header className={style.header}>
                <Navbar />
            </header>

            <div className={style.heading}>
                <h1 className={style.title}>
                    GROWING DIGITAL WEB DEVELOPMENT SERVICES
                </h1>
                <p className={`uppercase ${style.subtitle}`}>
                    Service » WEB DEVELOPMENT COMPANY IN DELHI
                </p>
            </div>

            <div className={style.content}>

                <div className={style.box}>
                    <p className={style.p}>
                        At Growing Digital, a proficient team of professional web developers & designers are involved in creating innovative, user-friendly and result-driven websites and applications. We believe that a lot can be determined about a company from its website. And why not, a website is the only representation of YOUR company in the online world.
                    </p>

                    <h2 className={`${style.sectionTitle} ${style.greenText}`}>
                        WHY IS WEB DESIGN SO IMPORTANT?
                    </h2>


                    <div className={style.content2}>
                        <img className={style.image} src={dev2} alt="Web development image 2" />
                        <p className={style.p}>
                            In the bustling landscape of digital business, finding the right web design and development partner can be a game-changer. Your website isn't just a digital placeholder; it's a crucial tool for establishing your brand's online presence, connecting with your target audience, and driving conversions. In the vibrant tech hub of India, where innovation thrives, having a top-tier website is more than just a luxury—it's a necessity. Enter our web design and development center based at Delhi, where we combine expertise, creativity, and cutting-edge technology to craft websites that stand out from the crowd.
                        </p>
                    </div>

                    <h2 className={`${style.sectionTitle} ${style.greenText}`}>
                        WHY CHOOSE OUR WEB DEVELOPMENT COMPANY?
                    </h2>

                    <p className={style.p}>
                        Regarding web creation and advancement, our standing is highly esteemed. We are a leading website development company, possessing a demonstrated history of achieving outstanding outcomes for companies of every scale and sector. Here's why you should consider partnering with us
                    </p>


                    <div >
                        <ul className="space-y-6">
                            <li className="flex items-start p-4 bg-white shadow-md rounded-lg" data-aos="fade-up">
                                <div className="flex-shrink-0 mr-4">
                                    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414L8.414 15H14a1 1 0 110 2H6a1 1 0 01-1-1V9a1 1 0 112 0v5.586l8.293-8.293a1 1 0 011.414 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Extensive Experience</h3>
                                    <p className="text-gray-700">
                                        Our journey in web development spans several years, during which we have honed our skills and adapted to the ever-evolving digital landscape.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start p-4 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="100">
                                <div className="flex-shrink-0 mr-4">
                                    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414L8.414 15H14a1 1 0 110 2H6a1 1 0 01-1-1V9a1 1 0 112 0v5.586l8.293-8.293a1 1 0 011.414 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Dedicated Team of Experts</h3>
                                    <p className="text-gray-700">
                                        Our team comprises talented web developers in who are passionate about their craft. They bring creativity, innovation, and technical prowess to every project.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start p-4 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="200">
                                <div className="flex-shrink-0 mr-4">
                                    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414L8.414 15H14a1 1 0 110 2H6a1 1 0 01-1-1V9a1 1 0 112 0v5.586l8.293-8.293a1 1 0 011.414 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Comprehensive Services</h3>
                                    <p className="text-gray-700">
                                        We're not just a web development company; we're a one-stop solution for all your digital needs. From web development to website maintenance, we've got you covered.
                                    </p>
                                </div>
                            </li>
                            <li class="flex items-start p-4 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="300">
                                <div class="flex-shrink-0 mr-4">
                                    <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414L8.414 15H14a1 1 0 110 2H6a1 1 0 01-1-1V9a1 1 0 112 0v5.586l8.293-8.293a1 1 0 011.414 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800">Visual Excellence</h3>
                                    <p class="text-gray-700">
                                        We understand the importance of a visually appealing website. Our developer create stunning layouts that capture your brand's essence and leave a lasting impression.
                                    </p>
                                </div>
                            </li>
                            <li class="flex items-start p-4 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="400">
                                <div class="flex-shrink-0 mr-4">
                                    <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414L8.414 15H14a1 1 0 110 2H6a1 1 0 01-1-1V9a1 1 0 112 0v5.586l8.293-8.293a1 1 0 011.414 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800">User-Centric Approach</h3>
                                    <p class="text-gray-700">
                                        Our websites are designed with the end user in mind. We prioritize user experience to ensure seamless navigation and engagement.
                                    </p>
                                </div>
                            </li>
                            <li class="flex items-start p-4 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="500">

                                <div class="flex-shrink-0 mr-4">
                                    <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414L8.414 15H14a1 1 0 110 2H6a1 1 0 01-1-1V9a1 1 0 112 0v5.586l8.293-8.293a1 1 0 011.414 0z"></path></svg>
                                </div>

                                <div>
                                    <h3 class="text-xl font-bold text-gray-800">Responsive Design</h3>
                                    <p class="text-gray-700">
                                        In today's mobile-first world, responsiveness is key. Our websites adapt seamlessly to various devices and screen sizes, ensuring your audience has an optimal experience.
                                    </p>
                                </div>
                            </li>
                            <li class="flex items-start p-4 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="600">
                                <div class="flex-shrink-0 mr-4">
                                    <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414L8.414 15H14a1 1 0 110 2H6a1 1 0 01-1-1V9a1 1 0 112 0v5.586l8.293-8.293a1 1 0 011.414 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800">SEO-Friendly</h3>
                                    <p class="text-gray-700">
                                        In our web development workflow, we apply SEO top strategies to enhance your website's appearance in online search platforms.
                                    </p>
                                </div>
                            </li>
                            <li class="flex items-start p-4 bg-white shadow-md rounded-lg" data-aos="fade-up" data-aos-delay="700">
                                <div class="flex-shrink-0 mr-4">
                                    <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414L8.414 15H14a1 1 0 110 2H6a1 1 0 01-1-1V9a1 1 0 112 0v5.586l8.293-8.293a1 1 0 011.414 0z"></path></svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800">Client-Centric</h3>
                                    <p class="text-gray-700">
                                        Your satisfaction is our priority. Our team collaborates closely with you, ensuring you're kept in the loop and that your input is always considered and included.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        {/* One-Stop Destination Section */}
                        <section className="mb-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="p-6 bg-green-100 shadow-lg rounded-lg flex  flex-col md:flex-row items-stretch " data-aos="fade-up">
                                    <img src={devsub1} alt="Web Design & Development" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
                                    <div>
                                        <h2 className="text-4xl font-bold text-center md:text-left text-green-800   mb-4">Upgrade Your Business With Our Top-Notch Assistance.</h2>
                                        <p className="text-lg text-gray-800 mb-4">
                                            At Growing Digital, we assure top-notch online design services crafted with modern technologies. Our skilled and innovative developers explore all options to advance your business in the competitive world. You can expect a detailed planning, financial considerations, and forecasting steps, considering your business category and the latest industry trends to create designs that truly reflect your brand.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Why Choose Us Section */}
                        <section className="mb-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="p-6 bg-yellow-100 shadow-lg rounded-lg flex flex-col md:flex-row items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <img src={devsub2} alt="Why Choose Us" className="w-full  md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
                                    <div>
                                        <h2 className="text-4xl font-bold text-center md:text-left text-yellow-800 mb-4">
                                            Destination for all Your Web based needs.
                                        </h2>
                                        <p className="text-lg text-gray-800 mb-4">
                                            As a web development company, we have been providing outstanding web and application development solutions to our customers.
                                            Check out our huge portfolio & client testimonials! We make sure that the websites created have an excellent user experience, with unique aesthetics and a responsive layout as well. We utilize both our market and design expertise to deliver you the best possible outcomes in the longer run.
                                            We offer a blend of technologies that build success driven platform: PHP, Node.js, Python, Java, React, Wordpress, Magento, Django, Shopify, Full-stack and many more.
                                        </p>
                                        <p className="text-lg text-gray-800 mb-4">
                                            All our websites are SEO-friendly, streamlined with W3C approval, and in line with HTML coding principles. This methodology makes us the best development company.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Ultimate Combination Section */}
                        <section className="mb-8">
                            <div className="max-w-7xl mx-auto">

                                <div className="p-6 bg-blue-100 shadow-lg rounded-lg flex flex-col md:flex-row items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <img src={devsub3} alt="Design And Technology" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
                                    <div>
                                        <h2 className="text-4xl font-bold text-center md:text-left text-blue-800 mb-4">
                                            Ultimate Combination Of Design And Technology Based on your requirements.
                                        </h2>

                                        <p className="text-lg text-gray-800 mb-4">
                                            Today, we are a prominent development company, and it is simply because we have delivered splendid web design and development solutions.
                                            We go beyond merely being a website development firm. Our main expertise is in effectively utilizing the newest technology to meet your project needs and deliver outstanding outcomes for sustained achievement.
                                        </p>
                                        <p className="text-lg text-gray-800 mb-4">
                                            Our years of experience enable us to understand the needs of customers from various kinds of businesses, across industries and sectors. The first crucial step in our process is to understand our client and their requirements thoroughly. We are equipped to deliver a wide range of services, including desktop-exclusive websites, tablet-based sites, mobile-friendly websites, landing pages, dynamic sites, and fully responsive sites, tailored to your needs. We ideate sites from the ground up, create fresh UIs, make way for ultimate user experience, and deliver exceptionally professional websites.
                                        </p>
                                        <p className="text-lg text-gray-800 mb-4">
                                            For website redesign projects, you need to ensure that you get a professional that understands web development & design in and out. This is an area we can proudly vouch for - creating outstanding websites that look incredible and are wonderful to use.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="mb-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="p-6 bg-red-100 shadow-lg rounded-lg flex flex-col md:flex-row items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <img src={devsub4} alt="Design And Technology" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
                                    <div>
                                        <h2 className="text-4xl font-bold text-center md:text-left text-red-800 mb-4">
                                            Why Should You Choose Growing Digital as your Website development partner?
                                        </h2>

                                        <p className="text-lg text-gray-800 mb-4">
                                            With our industry knowledge and expertise, we take pride in providing personalized web design services to our clients. We craft engaging websites and mobile apps for you, offering a cooperative approach that guides your company towards expansion. Our group of talented website developers works hard to uncover your brand's essence, creating effective strategies that convey your message effectively and forge a brilliant brand presence for your enterprise.
                                            At Growing Digital, we create in harmony with our clients and their expectations. Your feedback is an integral part of the process, which maximizes our chances of providing you the perfect outcome you’ve been waiting for!
                                        </p>
                                        <p className="text-lg text-gray-800 mb-4">
                                            Before beginning your web design project, we decide its scope, budget, and deadlines. We boast a flawless track record of finishing every project on time and within budget. We assure you complete satisfaction with our website creation and maintenance services, no matter the nature of your business.
                                        </p>
                                        <p className="text-lg text-gray-800 mb-4">
                                            To elevate your business to new heights, your website must engage the largest audience possible, and ultimately, turn them into prospective clients. With this goal in mind, we employ the newest web design technologies and effective search engine optimization tactics to create a website that appears at the forefront of search engine results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Webdevelopment;
