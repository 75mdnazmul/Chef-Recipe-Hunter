/* eslint-disable no-unused-vars */
import React from 'react';
import "./Banner.css"
import { Carousel } from 'react-bootstrap';
import bannerImage1 from "../../assets/banner-1.webp"
import bannerImage2 from "../../assets/banner-2.webp"
import bannerImage3 from "../../assets/banner-3.webp"
import bannerImage4 from "../../assets/banner-4.webp"
import bannerImage5 from "../../assets/banner-5.webp"


const Banner = () => {
    return (
        <div className='banner mb-5'>
            <Carousel variant="dark">
                <Carousel.Item className='nk'>
                    <img
                        className="d-block w-100 banner-img"
                        style={{height: "600px",}}
                        src={bannerImage1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='align-middle text-white'>
                        <h1 style={{fontSize: "42px",}}>Food Gives Energy</h1>
                        <p style={{marginBottom:"150px"}}> The average adult needs around 2000 calories a day. Food groups such as carbohydrates and fats are broken down by the body to produce energy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        style={{height: "600px"}}
                        src={bannerImage2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='align-middle text-white'>
                        <h1 style={{fontSize: "42px",}}>Maintaining Body Weight</h1>
                        <p style={{marginBottom:"150px"}}>A balanced diet is needed to maintain a healthy and functioning body, and it is crucial to maintain a balanced body-height-weight ratio.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        style={{height: "600px"}}
                        src={bannerImage3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='align-middle text-white'>
                        <h1 style={{fontSize: "42px",}}>Builds Bones and Muscles</h1>
                        <p style={{marginBottom:"150px"}}> In adults, proteins and calcium help strengthen bones and balances muscles density.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        style={{height: "600px"}}
                        src={bannerImage4}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='align-middle text-white'>
                        <h1 style={{fontSize: "42px",}}>Builds Immunity</h1>
                        <p style={{marginBottom:"150px"}}>Vitamin C and other nutrients are necessary to defend the body against the attack of diseases.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        style={{height: "600px"}}
                        src={bannerImage5}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='align-middle text-white'>
                        <h1 style={{fontSize: "42px",}}>Provide energy, nutrients</h1>
                        <p style={{marginBottom:"150px"}}>Food is not just fuel for our bodies; it is also a source of pleasure and a way to connect with others. By choosing nutritious and delicious foods, we can nourish our bodies and enjoy the experience of eating.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;