import React from 'react';

const HomeReview = (props) => {
    const { reviewerName, rating, userImg, reviewComment } = props.review;
    return (
        <div>
            {reviewerName}
            {rating}
            {userImg}
            {reviewComment}
        </div>
    );
};

export default HomeReview;