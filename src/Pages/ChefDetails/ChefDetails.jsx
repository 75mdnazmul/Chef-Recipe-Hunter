/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Accordion, Button, Card, ListGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
    const chefAllDatas = useLoaderData();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast('This recipe is now your favorite!'), {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }
    };


    const { chef_photo, chef_name, years_of_experience, recipes, bio, likes_number, recipe_number } = chefAllDatas

    return (
        <Card className='container' style={{ width: '70%', marginTop: "100px", marginBottom: "100px" }}>
            <Card.Img variant="top" src={chef_photo} />
            <Card.Body >
                <Card.Title>Chef Name : {chef_name}</Card.Title>
                <Card.Text>
                    <span className='fw-bold'>chef Bio : </span>{bio}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><span className='fw-bold'>Likes :</span> {likes_number}</ListGroup.Item>
                <ListGroup.Item><span className='fw-bold'>Recipes Number :</span> {recipe_number}</ListGroup.Item>
                <ListGroup.Item><span className='fw-bold'>Years Of Experience : </span>{years_of_experience}</ListGroup.Item>
            </ListGroup>
            <h1 className='text-center fw-bold py-3'>Some Recipes</h1>
            {
                recipes.map(recipe =>
                    <Accordion key={recipe.name} className='my-2'>
                        <Accordion.Item eventKey="0" className='text-center'>
                            <Accordion.Header><span className='fw-bold fs-4'>{recipe.name}</span></Accordion.Header>
                            <Accordion.Body>
                                <img className='img-fluid' src={recipe.image}></img>
                                <div className='fs-5'>
                                    <span className='fw-bold'>Ingredients :</span><p>{recipe.ingredients}</p>
                                    <span className='fw-bold'>Cooking method :</span><p>{recipe.method}</p>
                                    <span className='fw-bold'>Rating :</span><p>{recipe.rating}</p>
                                    <Button onClick={handleFavoriteClick} disabled={isFavorite} className='fw-bold bg-warning text-white border-0'>{isFavorite ? 'Favorited' : 'Add to Favorites'}</Button>
                                    <ToastContainer />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item >
                    </Accordion >
                )
            }

        </Card >
    );
};

export default ChefDetails;