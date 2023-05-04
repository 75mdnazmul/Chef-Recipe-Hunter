/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const ChefDetails = (id) => {
    const [chefDetails, setChefDetails] = useState([])

    // useEffect(()=> {
    //     fetch(`http://localhost:7000/chefAllData/${id}`)
    //     .then(res => res.json())
    //     .then(data => setChefDetails(data))
    // },[id])
    // console.log(chefDetails);
    return (
        <div className='container mt-5 py-5'>
            <h2>chef Complete Details</h2>
        </div>
    );
};

export default ChefDetails;