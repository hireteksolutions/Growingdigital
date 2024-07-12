import React from 'react'
import style from './Footer.module.css'
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";

import Form from '../Form/Form';


function Footer() {
    return (
        <>
            <div className={style.Footer}>

                <div className={style.child1}>
                    <h1 className=' text-4xl text-white pl-[1%]'>
                        Growing Digital
                    </h1>

                    <div className={style.address}>
                        <p>
                            H-7, Lower Ground Floor Lajpat Nagar III, New Delhi, Delhi 110024
                        </p>
                        <p>
                            &nbsp;
                            <strong>Email:</strong>
                            &nbsp;

                            info@growingdigital.in
                        </p>
                        <p>
                            &nbsp;
                            <strong>Phone:</strong>
                            &nbsp;

                            +91 95999 01561
                        </p>
                    </div>

                    <div className={style.icon}>
                        <a href="https://www.instagram.com/officialgrowingdigital/?hl=en" title='Instagram' target="_blank" rel="noopener noreferrer">
                            <IoLogoInstagram className={style.icon1} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61550251507883" title='Facebook' target="_blank" rel="noopener noreferrer">
                            <RiFacebookLine className={style.icon2} />
                        </a>
                        <a href="https://www.linkedin.com/company/99891789/admin/feed/posts/" title='Linkedin' target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className={style.icon3} />
                        </a>
                    </div>

                </div>


                <div className={style.child2}>
                    <Form />
                </div>

            </div>
            <hr />
            <div className={style.bottom}>
                <p> Powered by Growing Digital | @2024 Growing Digital | info@growingdigital.in</p>
            </div>
        </>
    )
}

export default Footer