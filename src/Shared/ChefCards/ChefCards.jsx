/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCards = () => {
    const [chefAllDatas, setChefAllData] = useState([])
    useEffect(() => {
        fetch('https://server-75mdnazmul.vercel.app/chefAllData')
            .then(res => res.json())
            .then(data => setChefAllData(data))
        }, [])
    return (
        <div className='container pb-5'>
            <div className='row'>
                <h2 className='text-center pb-5 fw-bold'>Our Best Chefs Gallery</h2>
                {
                    chefAllDatas.map(chefAllData =>
                        <div className='col-lg-4' key={chefAllData.id}>
                            <Card className='p-3 mb-5'>
                                <Card.Img variant="top" src={chefAllData.chef_photo} />
                                <Card.Body>
                                    <Card.Title className='fw-bold text-center pb-2 fs-4'>{chefAllData.chef_name}</Card.Title>
                                    <Card.Text>
                                        <span className='fw-bold'>Years Of Experience : {chefAllData.years_of_experience}</span><br/>
                                        <span className='fw-bold'>Numbers of recipes : {chefAllData.recipe_number}</span><br/>
                                        <span className='fw-bold'>Likes : {chefAllData.likes_number}</span>
                                    </Card.Text>
                                    <Link to={`/chefAllData/${chefAllData.id}`}><Button style={{ background: "#008906", border: 'none' }}> View Recipes </Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
    
};

export default ChefCards;