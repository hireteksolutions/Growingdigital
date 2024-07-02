import React, { useState,useEffect } from 'react';
import style from './Form1.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Aos from "aos";
import "aos/dist/aos.css";

function Form1() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    };

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone' && !/^\d*$/.test(value)) {
            return;
        }

        if (name === 'message' && value.length > 100) {
            setErrors({ ...errors, message: 'Message should be within 100 characters' });
            return;
        }

        setForm({
            ...form,
            [name]: value
        });

        setErrors({ ...errors, [name]: '' });
    };

    const validate = () => {
        let newErrors = {};
        if (!form.firstName) newErrors.firstName = 'First name is required';
        if (!form.email) newErrors.email = 'Email address is required';
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email address is invalid';
        if (form.phone && form.phone.length !== 10) newErrors.phone = 'Phone number must be 10 digits';
        if (!form.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error(Object.values(validationErrors).join('. '));
        } else {
            try {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, form);
                console.log('Form submitted', response.data);
                setForm(initialState);
                setErrors({});
                toast.success('Your response has been submitted.');
            } catch (error) {
                console.error('There was an error submitting the form!', error);
                const serverErrors = error.response?.data?.errors || [{ msg: 'Server error. Please try again later.' }];
                toast.error(serverErrors.map(err => err.msg).join('. '));
            }
        }
    };

    return (
        <>
            <form data-aos="fade-up" onSubmit={handleSubmit}>
                <div className={style.Form1}>
                    <div className={style.inputGroup}>
                        <div className={style.formGroup}>
                            <label>First name *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className={errors.firstName ? style.errorInput : ''}
                            />
                            {errors.firstName && <span className={style.error}>{errors.firstName}</span>}
                        </div>
                        <div className={style.formGroup}>
                            <label>Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={style.inputGroup}>
                        <div className={style.formGroup}>
                            <label>Email address *</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className={errors.email ? style.errorInput : ''}
                            />
                            {errors.email && <span className={style.error}>{errors.email}</span>}
                        </div>
                        <div className={style.formGroup}>
                            <label>Phone number</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className={errors.phone ? style.errorInput : ''}
                            />
                            {errors.phone && <span className={style.error}>{errors.phone}</span>}
                        </div>
                    </div>

                    <div className={style.formGroup}>
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label>Message *</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className={errors.message ? style.errorInput : ''}
                        />
                        {errors.message && <span className={style.error}>{errors.message}</span>}
                    </div>
                    <button className={style.submit} type="submit">
                        Submit
                    </button>
                </div>
            </form>
            <ToastContainer />
        </>
    );
}

export default Form1;
