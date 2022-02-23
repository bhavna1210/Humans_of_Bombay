//- url - https://my.api.mockaroo.com/humans_of_bombay.json?key=04998030
import React, { useState, useEffect } from 'react';
import mockData from '../data/mockData.js'
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';



const Card = () => {
    const [cardData, setCardData] = useState(mockData);
    const [errorMessage, setErrorMessage] = useState();
    let url = "https://my.api.mockaroo.com/humans_of_bombay.json?key=9252b100";
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                if (data.error) {
                    setErrorMessage(data.error);
                    console.log('---errorMessage----', errorMessage);
                } else {
                    setCardData(data);
                    setErrorMessage();
                }
            });
    }, []);

    return (
        <>
            <section className=' text-center mt-10'>
                {(errorMessage && errorMessage.length > 0) ? (
                    <div className='py-5'>
                        <p className='font-xl font-bold text-red-400'>
                            There is some error occured while loading the data.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h1>Lastest Post</h1>
                        <h2>Hii</h2>
                        <div className="my-10 flex flex-wrap justify-around justify-items-stretch">
                            <div className="rounded-lg shadow-lg bg-white max-w-lg">
                                <a href="#">
                                    {/* <img className="rounded-t-lg" src={cardData[0].image} alt="no img" /> */}
                                    <img className="rounded-t-lg" src={image1} alt="no img" />
                                </a>
                                <div className="p-6">
                                    <p className="text-gray-700 text-base mb-4">{cardData[0].date} : {cardData[0].category}</p>
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{cardData[0].title}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-around justify-items-stretch">
                            {cardData.slice(1, 10).map((obj, index) => {
                                const { id, title, date, category, image } = obj;
                                console.log('id, title,date,category,image', id, title, date, category, image);
                                return (<>
                                    <div className="my-10" key={id}>
                                        <div className="rounded-lg shadow-lg bg-white max-w-lg">
                                            <a href="#">
                                                <img className="rounded-t-lg" src={image} alt="no img" />
                                                {/* <img className="rounded-t-lg" src={image2} alt="no img" /> */}
                                            </a>
                                            <div className="p-6">
                                                <p className="text-gray-700 text-base mb-4">{date} : {category}</p>
                                                <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            })}
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default Card