import React from 'react';

export default function Main(props) {
    console.log(props)
    return (
        <section className='main-sec'>
            <img src={`${props.item.imageUrl}`} className='photos'/>
            <article className='main-article'>
                <div className='loc--div'>
                    <img src='https://png.pngtree.com/element_our/sm/20180515/sm_5afb0cf8193f6.png' className='mapIcon'/>
                    <p>{props.item.location}</p>
                    <a href={`${props.item.googleMapsUrl}`}> View on Google Maps </a>
                </div>
                <h2 className='header-title'>{props.item.title}</h2>
                <h4 className='header-date'>{props.item.startDate} - {props.item.endDate}</h4>
                <p className='description-text'>{props.item.description}</p>
            </article>
        </section>
    );
}