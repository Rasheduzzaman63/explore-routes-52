import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
           <h1>Friend Detaild Can Show here</h1> 
           <h3>Name: {friend.name}</h3>
           <p>Address: {friend.address.street}</p>
           <p>Phone : {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;