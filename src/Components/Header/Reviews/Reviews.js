import React, { useEffect, useState } from 'react';
import ReviewShow from '../../ReviewShow/ReviewShow';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div className='comment-display'>
            {
                reviews.map(review=><ReviewShow 
                    key={review.id}
                    review={review}
                    ></ReviewShow>)
            }
        </div>
    );
};

export default Reviews;