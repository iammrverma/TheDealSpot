import React, { useRef, useEffect } from 'react';
import './Selection.css';

const Selection = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        if (scrollWidth > clientWidth) {
            container.style.overflowY = 'hidden';
        }
    }, []);

    const divs = [
        { id: 1, imageSrc: 'assets/electronics/image1.png', heading: 'Heading 1', price: 'From 3000/-', description: 'Lorem ipsum dolor sit amet.' },
        { id: 2, imageSrc: 'assets/electronics/image2.png', heading: 'Heading 2', price: 'From 4000/-', description: 'Lorem ipsum dolor sit amet.' },
        { id: 3, imageSrc: 'assets/electronics/image3.png', heading: 'Heading 3', price: 'From 4000/-', description: 'Lorem ipsum dolor sit amet.' },
        { id: 4, imageSrc: 'assets/electronics/image4.png', heading: 'Heading 4', price: 'From 4000/-', description: 'Lorem ipsum dolor sit amet.' },
        { id: 1, imageSrc: 'assets/electronics/image1.png', heading: 'Heading 1', price: 'From 3000/-', description: 'Lorem ipsum dolor sit amet.' },
        { id: 2, imageSrc: 'assets/electronics/image2.png', heading: 'Heading 2', price: 'From 4000/-', description: 'Lorem ipsum dolor sit amet.' },
        { id: 3, imageSrc: 'assets/electronics/image3.png', heading: 'Heading 3', price: 'From 4000/-', description: 'Lorem ipsum dolor sit amet.' },
        { id: 4, imageSrc: 'assets/electronics/image4.png', heading: 'Heading 4', price: 'From 4000/-', description: 'Lorem ipsum dolor sit amet.' },
    ];

    return (
        <div className="Selection">
            <div className="container" ref={containerRef}>
                <div className="static">
                    Electonics
                    <button className='button-53'>View All</button>
                    <img src={process.env.PUBLIC_URL + `assets/electronics/image5edited.png`} alt="" />
                </div>
                <div className='selectionRight'>
                <div className="slider">
                    {divs.map((div) => (
                        <div key={div.id} className="electronicSlide">
                            <img src={process.env.PUBLIC_URL + div.imageSrc} alt="hey" />
                            <div className="about">
                                <h4>{div.heading}</h4>
                                <h4 className="price">{div.price}</h4>
                                <p>{div.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Selection;
