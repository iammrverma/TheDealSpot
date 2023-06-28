import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Navbar from './components.js/navbar/Navbar';
import CategoryComponent from './components.js/CategoryComponent/CategoryComponent';
import Carousel from './components.js/carousel/Carousel';
import Selection from './components.js/selection/Selection';
import Asus from './components.js/asus/Asus';
import CategoryImage from './components.js/CategoryImag/CategoryImage';
import Section7 from './components.js/section7/Section7';
import Section8 from './components.js/Section8/Section8';
import Section9 from './components.js/Section9/Section9';
import Footer from './components.js/footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
const slides = [
  { url: process.env.PUBLIC_URL + 'assets/laptopfolder/image1.png', alt: 'LENOVO' },
  { url: process.env.PUBLIC_URL + 'assets/laptopfolder/image2.png', alt: "ASUS E410KA-BV103WS" },
  { url: process.env.PUBLIC_URL + 'assets/laptopfolder/image3.png', alt: 'DELL' },
  { url: process.env.PUBLIC_URL + 'assets/laptopfolder/image4.jpg', alt: 'Intel UHD, Full HD LED, Indie Black, 90NB0TY5-M03EN0 (1)' }
]
root.render(
  <React.StrictMode>
    <Navbar />
    <CategoryComponent />
    <Carousel slides={slides} width={"100vw"} height={"28rem"} index={0}/>
    <Selection/>
    <Carousel slides={slides} width={"100vw"} height={"28rem"} index={2}/>
    <Asus src={process.env.PUBLIC_URL+"assets/asus series/img2.png"}/>
    <Carousel slides={slides} width={"100vw"} height={"28rem"} index={3}/>
    <CategoryImage/>
    <Section7/>
    <Section8/>
    {/* <Section9/> */}
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
