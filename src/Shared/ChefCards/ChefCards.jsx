/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ChefCards = () => {
    const [chefAllDatas, setChefAllData] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/chefAllData')
            .then(res => res.json())
            .then(data => setChefAllData(data))
    }, [])
    // console.log(chefAllDatas);
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
                                        <p className='fw-bold'>Years Of Experience : {chefAllData.years_of_experience}</p>
                                        <p className='fw-bold'>Numbers of recipes : {chefAllData.recipe_number}</p>
                                        <p className='fw-bold'>Likes :{chefAllData.likes_number}</p>
                                    </Card.Text>
                                    <Button variant="primary">View Recipes  </Button>
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