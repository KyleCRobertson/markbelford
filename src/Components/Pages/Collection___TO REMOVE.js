import React from 'react';
import '../styles/Collection.css';
import stylesCollection from '../styles/Collections.module.css';

const Collection = () => {
    return(
        <main>
            <section className='content content-top large-adjust'>
                <div>
                    <h1>
                        Collection
                    </h1>
                </div>
                <div className='row'>
                    <div className='col-xl-2 col-xxl-3 lrg-1'></div>
                    <div className={`col-xl-8 col-xxl-6 ${stylesCollection.contentTopParagraph}`}>
                        <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h6>
                    </div>
                    </div>
            </section>
        </main>
    );
};

export default Collection;