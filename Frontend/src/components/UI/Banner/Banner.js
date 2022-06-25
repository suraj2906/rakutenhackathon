import React from 'react';
import './Banner.css';

const Banner = (props) => {
    return (
        <div className="banner py-8 mb-8">


            <div className="text-center text-white">
                <span className="heading__banner">{props.heading}</span>
                <p className="description__banner mt-6 mx-12 text-center">Instructions & Short Description about the circle- Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. In est dolor, tempus nec augue nec, mattis venenatis mauris.
                    Aliquam erat volutpat. Nam eget velit eget leo porta facilisis. Vivamus bibendum diam lorem.
                    Phasellus justo nisl, faucibus et neque vitae, auctor ullamcorper dui. Fusce tempor tellus ipsum, id
                    hendrerit justo ultricies nec. Nunc vitae massa vitae leo lacinia commodo. Cras id malesuada neque,
                    sit amet ornare eros. Integer auctor ipsum mi, eu venenatis tellus congue in. Duis dapibus nulla sed
                    urna vulputate, id vehicula orci congue.</p>
            </div>
        </div>
    );
};

export default Banner;