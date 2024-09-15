import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return(
        <main>
            <div className='page-marker'></div>
            <section className='content content-top'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h1 className='pull-left'>Contact Mark</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                        <p>
                        Interested in owning your own bespoke work of art by Mark Belford? Click on the email link below and please describe what you are looking for.<br/><br/>
                        </p>
                        <a href='mailto:info@markbelford.ca?subject=markbelford.ca Enquiry' className={styles.contactLink}>info@markbelford.ca</a>
                    </div>
                    {/*
                    <form className='col-md-4'>
                    <p>
                    Interested in owning your own bespoke work of art by Mark Belford? Please fill out the form below.<br/><br/>
                    </p>
                    <input type="text" id='first-name' name='first-name' title='your first name is required' tabIndex='1' placeholder='first name' aria-required='true'></input>
                    <input type="text" id='last-name' name='last-name' title='your last name is required' tabIndex='2' placeholder='last name' aria-required='true'></input>
                    <input type="text" id='phone' name='phone' title='your phone number is required' tabIndex='3' placeholder='phone' aria-required='true'></input>
                    <input type="text" id='email' name='email' title='your email address is required' tabIndex='4' placeholder='email' aria-required='true'></input>
                    <input type='text' id='comments' name='comments' tabIndex='5' placeholder='comments' aria-required='true'></input>
                    <button>SUBMIT</button>
                    </form>
                    */}   
                </div>
            </section>
        </main>
    );
};

export default Contact;