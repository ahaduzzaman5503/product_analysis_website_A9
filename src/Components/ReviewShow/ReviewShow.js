import React from 'react';
import "./ReviewShow.css"

const ReviewShow = (props) => {
    const { reviewerName, rating, userImg, reviewComment } = props.review;
    return (
        <div className="main">
            <div className="about-review">
            <div className="book-image">
                <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/00ea58560_112222.jpg" alt="Book" />
            </div>
            <div className="book-writer">
                <h2>হাবলুদের জন্য প্রোগ্রামিং</h2>
                <h3>ঝংকার মাহবুব</h3>
            </div>
            <div className="image-user">
                    <img src="https://ds.rokomari.store/rokomari110/people/f05844bf5ab4_40266.jpg" alt="" />
            </div>
            </div>
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
        </div>
    );
};

export default ReviewShow;