import React from "react";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import alexa from "../src/images/alexa.jpg";
import asianpacific from "../src/images/asian-pacific.jpg";
import earthday from "../src/images/earth-day.jpg";
import hispanicgoods from "../src/images/hispanic-goods.jpg";
import Product from "./Product";

function Home() {
  //   const [currentSlide, setCurrentSlide] = useState(0);
  //   const slides = [
  //     "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
  //     "https://m.media-amazon.com/images/I/61l316SGmuL._SX3000_.jpg",
  //     "https://m.media-amazon.com/images/I/61ZxL5rpLTL._SX3000_.jpg",
  //
  //     // "https://m.media-amazon.com/images/I/71Nmgj6nl0L._SX3000_.jpg",
  //
  //     // "https://m.media-amazon.com/images/I/611Hit0i2SL._SX3000_.jpg",
  //   ];
  // const goToPreviousSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 0 ? slides.length - 1 : prevSlide - 1
  //   );
  // };

  // const goToNextSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === slides.length - 1 ? 0 : prevSlide + 1
  //   );
  // };
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  //   }, 3000);
  //   return () => clearInterval(intervalId);
  // }, [slides.length]);

  return (
    <div className="home">
      <div className="home__container">
        <FaChevronLeft className="slider-icon" />
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={2000}
          carousel-status={false}
          infiniteLoop={true}
          showThumbs={false}
        >
          <img
            className="home__image _cropped-image-link_style_fluidLandscapeImage__3eTVC 
 _cropped-image-link_style_fluidImage__iJ3aE"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
          <img
            className="home__image _cropped-image-link_style_fluidLandscapeImage__3eTVC 
 _cropped-image-link_style_fluidImage__iJ3aE"
            src={alexa}
            alt="#"
          />
          <img
            className="home__image _cropped-image-link_style_fluidLandscapeImage__3eTVC 
 _cropped-image-link_style_fluidImage__iJ3aE"
            src={asianpacific}
            alt="#"
          />
          <img
            className="home__image _cropped-image-link_style_fluidLandscapeImage__3eTVC 
 _cropped-image-link_style_fluidImage__iJ3aE"
            src={earthday}
            alt="#"
          />
          <img
            className="home__image _cropped-image-link_style_fluidLandscapeImage__3eTVC 
 _cropped-image-link_style_fluidImage__iJ3aE"
            src={hispanicgoods}
            alt="#"
          />
        </Carousel>
        <FaChevronRight className="slider-icon" />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
          price={1669}
          rating={5}
          image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
        />
        <Product
          id="49538094"
          title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
          price={159.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
          price={499.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
        />
        <Product
          id="99903850"
          title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
          price={139.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="903850"
          title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
          price={69.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
        />
        <Product
          id="8903851"
          title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
          price={999.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          price={1009}
          rating={4}
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
        <Product
          id="2"
          title="Solid Gold Petite Micropave"
          price={899}
          rating={5}
          image="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Mens Cotton Jacket"
          price={499}
          rating={5}
          image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        />
        <Product
          id="4"
          title="Mens Casual Slim Fit"
          price={699}
          rating={3}
          image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
        />
        <Product
          id="5"
          title="Mens Casual Premium Slim Fit T-Shirts"
          price={500}
          rating={5}
          image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
          price={49000}
          rating={4}
          image="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="7"
          title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
          price={5999}
          rating={3}
          image="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
        />
        <Product
          id="8"
          title="D 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
          price={4999}
          rating={5}
          image="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="9"
          title="Lock and Love Women's Removable Hooded Faux Leather Moto Biker JacketMens Cotton Jacket"
          price={1499}
          rating={5}
          image="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
        />
        <Product
          id="10"
          title="MBJ Women's Solid Short Sleeve Boat Neck V "
          price={1699}
          rating={4}
          image="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
        />
        <Product
          id="11"
          title="DANVOUY Womens T Shirt Casual Cotton Short"
          price={999}
          rating={5}
          image="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12"
          title="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
          price={5999}
          rating={3}
          image="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="13"
          title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
          price={9000}
          rating={4}
          image="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
        />
        <Product
          id="14"
          title="D 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
          price={4999}
          rating={5}
          image="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
