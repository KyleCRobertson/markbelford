import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'
import { ScrollToTop } from '../components/scrollToTop';
import styles from '../styles/Contact.module.scss';

export default function Contact(){
    useEffect(() => {
            ScrollToTop()
        });
    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            comments: "",
        }
    });
    const [thankYouMessage, setThankYouMessage] = useState("");
    const onSubmit = (data) => {
        const contactFormCont = document.querySelector('.contact-form');
        const templateParams = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            comments: data.comments,
        };
        emailjs
        .send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY )
        .then(() => {
            reset();
            contactFormCont.classList.add('off');
            setThankYouMessage(() => {
                return `Thank you ${data.firstName} for your interest in Mark Belford Couture. We will be in touch shortly.`;
            })
        }).catch((error) => {
            console.error("error", error);
        });
    }
    return(
        <main>
            <div className='page-marker'></div>
            <section className='content content-top fixed-top'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h1 className={`hot-pink ${styles.pageHeader}`}>Contact Mark</h1>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-1'></div>
                    <div className="col-md-3">
                        <div className='spec-text-1'>
                        <span className='no-wrap'>Ever dreamed of</span><br/>
                        <span className='no-wrap'>owning a couture</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                        <div className={`spec-text-10 ${styles.wrkOfArt}`}>
                            work<br/>of art<div className={`benguiatCaslon ${styles.qstnMrkAdj}`}>¿</div>
                        </div>
                        <div className={styles.regTextBlk}>
                            Or perhaps you just want to be kept in the loop regarding the world of Mark Belford's couture creations and events? Please fill out the form below and lets <span className='no-wrap'>get acquainted.</span><br/><br/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-1'></div>
                    <div className={`col-sm-5 col-md-4 col-lg-3 col-xxl-2 spec-text-1 ${styles.dsrTxt}`}>
                        <span className='no-wrap'>Let's turn your</span><br/><span className='no-wrap'>desire into</span><br/>something <span className='no-wrap'>dangerously chic.</span>
                    </div>
                </div>
                <div className={`row ${styles.contactForm}`}>
                    <div className='col-md-1'></div>
                    <div className='col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-4'>
                        <h5>{thankYouMessage}</h5>
                        <div className='contact-form'>
                            <form  onSubmit={handleSubmit(onSubmit)}>
                                <p className={styles.errorMessage}>{errors.firstName?.message}</p>
                                <label for='firstName'></label>
                                <input {...register('firstName', { required: 'Please enter your first name' })} placeholder='first name' />
                                <p className={styles.errorMessage}>{errors.lastName?.message}</p>
                                <label for='lastName'></label>
                                <input {...register('lastName', { required: 'Please enter your last name', minLength: {value: 4, message: "Min length is 4"} })} placeholder='last name' />
                                <p className={styles.errorMessage}>{errors.phone?.message}</p>
                                <label for='phone'></label>
                                <input {...register('phone', { required: 'Please enter your phone number', pattern: { value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, message: 'Invalid phone number'} })}  placeholder='phone'></input>
                                <p className={styles.errorMessage}>{errors.email?.message}</p>
                                <label for='email'></label>
                                <input {...register('email', { required: 'Please enter your email address', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address'}, })}  placeholder='email'></input>
                                <label for='comments'></label>
                                <textarea {...register('comments')} placeholder='comments' ></textarea>
                                <input className={styles.submitBtn} type='submit' />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};