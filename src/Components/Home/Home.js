import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className="all-contaner">
        <div className='home-container'>
            <div className="left-text">
            <h1>Programming beginner book</h1>
            <h2>Your best choose!</h2>
            <p>হাবলুদের জন্য প্রোগ্রামিং book is best for beginner programmers. This book helps you to know about basic programming. This book's author's name is Janker Mahbub. He founded Progromming hero. His have Web development course. This course name is Complete Web Developmet with Janker Mahbub. His has a strong teem to controle and maintain this course. His has a lot of students. Now he lead 5th Beach. There has almost 5000 students. He is teach programming with fun!</p>
            <button className='btn'>Book Buy Now</button>
            </div>

            <div className="image">
                <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/00ea58560_112222.jpg" alt="Book" />
            </div>
        </div>

        <div className="review">
            <h1>Customer Review</h1>
            
            <button className='review-btn'>See all review</button>
        </div>
        </div>
    );
};

export default Home;