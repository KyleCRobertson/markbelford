import React from 'react';
import '../styles/Scale.scss';

const scaleOn = () => {
    document.querySelector('.bg-scale').classList.toggle('on') ;
    }

export default function Scale(){
    return (
        <>
        <div className='scale-button' onClick={scaleOn}></div>
        <div className='bg-scale'>
        <div className='row'>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
            <div className='col-sm-1 column'></div>
        </div>
    </div> 
    </>
    )
}