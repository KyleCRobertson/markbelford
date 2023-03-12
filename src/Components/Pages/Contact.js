import React from 'react';
import './Contact.css';

class Contact extends React.Component{
    render(){
        return(
            <main id='app'>
                <section className='content content-top'>
                    <div className='row'>
                        <div className='col-md-6'>
                        <h1>contact</h1>
                        <p>
                            Interested in owning your own bespoke work of art by Mark Belford? Please fill out the form below.
                        </p>
                    </div>
                    <div className='row'>
                        <form className='col-md-4'>
                            <input type="text" id='first-name' name='first-name' title='your first name is required' tabIndex='1' placeholder='first name' aria-required='true'></input>
                            <input type="text" id='last-name' name='last-name' title='your last name is required' tabIndex='2' placeholder='last name' aria-required='true'></input>
                            <input type="text" id='phone' name='phone' title='your phone number is required' tabIndex='3' placeholder='phone' aria-required='true'></input>
                            <input type="text" id='email' name='email' title='your email address is required' tabIndex='4' placeholder='email' aria-required='true'></input>
                            <input type='text' id='comments' name='comments' tabIndex='5' placeholder='comments' aria-required='true'></input>
                            <button>submit</button>
                        </form>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Contact;