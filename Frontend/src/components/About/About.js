import React from 'react';
import Header from "../Header/Header";

const About = () => {
    return (
        <>
            <Header/>
            <div className="w-screen h-[100vh] bg-[#132B4B]">

            </div>
            <div className="w-screen">
                <div className="flex-col m-5">
                    <div className="flex justify-around items-center">
                        <div className="w-[50%]">Our web application gives users the chance to join a community that uses customer collaboration to promote brands,
                            suggest products, and offer a forum for direct dialogue between influencers and interested parties. The interested parties can take advantage of a variety of benefits, including speaking with existing customers or influencers,
                            learning in-depth about the product of interest, getting any queries resolved, and receiving the best quote on any insurance
                            Bajaj Allianz offers in all markets.</div>
                        <div><img src={require("../Assets/about-image-1.png")}/></div>
                    </div>
                    <div className="flex justify-around items-center">
                        <div><img src={require("../Assets/about-image-1.png")}/></div>
                        <div className="w-[50%]">Our web application gives users the chance to join a community that uses customer collaboration to promote brands,
                            suggest products, and offer a forum for direct dialogue between influencers and interested parties. The interested parties can take advantage of a variety of benefits, including speaking with existing customers or influencers,
                            learning in-depth about the product of interest, getting any queries resolved, and receiving the best quote on any insurance
                            Bajaj Allianz offers in all markets.</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default About;