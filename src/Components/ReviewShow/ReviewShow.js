import React from 'react';
import "./ReviewShow.css"

const ReviewShow = (props) => {
    const { reviewerName, rating, userImg, reviewComment } = props.review;
    return (
        <div className="single-review">
            <div className="name-ratting">
            <div className="image-section">
                <img src={userImg} alt="" />
            </div>
            <div className="name-rating">
                <div className="name">
                    <h3><small>by:</small> {reviewerName}</h3>
                </div>
                <div className="star-ratting">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>  {rating}
                </div>
            </div>
            </div>
            <div className="comment">
                {/* { reviewComment.length < 100 ? : reviewComment.slice(0, 100) + "<span className='fw-bold'>... read more</span>"} */}
                {reviewComment}
            </div>
        </div>
    );
};

export default ReviewShow;