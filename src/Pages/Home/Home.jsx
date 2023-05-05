/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import ChefCards from '../../Shared/ChefCards/ChefCards';
import Contact from '../../Shared/Contact/Contact';
import RecipeCard from '../../Shared/RecipeCard/RecipeCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefCards></ChefCards>
            <RecipeCard></RecipeCard>
            <Contact></Contact>
        </div>
    );
};

export default Home;