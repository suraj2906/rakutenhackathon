import React from 'react';
import Header from "../Header/Header";
import Card from "../UI/Card/Card";
import './Options.css';
import Button from "../UI/Button/Button";

const Options = () => {
    return (
        <>
            <Header/>
            <div className="flex justify-around options-main mt-12">
                <div className="op-1">
                    <a>
                        <Card className="w-[80vh] py-10 px-[15%] text-center hover:bg-sky-200">
                        <span className="block text-left options-text">
                            Become an existing customer/influencer
                        </span>
                            <hr className="my-3 w-[25%] border-2 border-black"/>
                            <p className="text-left font-[Montserrat] font-[300] text-[20px]">Explain here what will
                                have to
                                be done by it, what are the advantages of it and all that! Explain here what will have
                                to be
                                done by it, what are the advantages of it and all that! Explain here what will have to
                                be
                                done by it, what are the advantages of it and a!</p>
                        </Card>
                    </a>
                </div>
                <div className="op-2">
                    <a>
                        <Card className="w-[80vh] py-10 px-[15%] text-center hover:bg-sky-200">
                        <span className="block text-left options-text">
                            Browse other Bajaj products
                        </span>
                            <hr className="my-3 w-[25%] border-2 border-black"/>
                            <p className="text-left font-[Montserrat] font-[300] text-[20px]">Explain here what will
                                have to
                                be done by it, what are the advantages of it and all that! Explain here what will have
                                to be
                                done by it, what are the advantages of it and all that! Explain here what will have to
                                be
                                done by it, what are the advantages of it and a!</p>
                        </Card>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Options;