/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const RecipeCard = () => {
    const [chefAllDatas, setChefAllData] = useState([])
    useEffect(() => {
        fetch('https://server-75mdnazmul.vercel.app/chefAllData')
            .then(res => res.json())
            .then(data => setChefAllData(data))
    }, [])
    return (
        <Container >
            <h2 className='fw-bold text-center pb-5'>More Recipes</h2>
            <Row>
                {
                    chefAllDatas.map(chefAllData =>
                        <div className='col-lg-4 col-sm-12' key={chefAllData.id}>
                            <Col >
                                {
                                    chefAllData.recipes.map(recipe =>
                                        <div key={recipe.name}>
                                            <Card className='mb-4'>
                                                <Card.Img style={{height:"200px"}} variant="top" src={recipe.image}/>
                                                <Card.Body>
                                                    <Card.Title >{recipe.name}</Card.Title>
                                                    <Card.Text>Views :&nbsp; 
                                                    {recipe.rating} K
                                                    </Card.Text>
                                                    <Button variant="primary">Show details</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>

                                    )
                                }
                            </Col>
                        </div>
                    )
                }
            </Row>
        </Container>
    );
};

export default RecipeCard;