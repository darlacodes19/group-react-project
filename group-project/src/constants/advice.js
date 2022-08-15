import axios from 'axios';
import { useState, useEffect } from 'react';

const Advice = () => {
    const [quotes, setQuotes] =useState("");

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
            let randomNumber = Math.floor(Math.random() * data.length);
            setQuotes(data[randomNumber]);
        })
    }

    return (
        <div className='advice-div'>
            {/* <div className ="getquotes"> */}
                <h1 className = "advice-title">Click for Daily Wisdom</h1>
                <p className="get-advice">Advice for Today: {quotes.text}</p>
                <p className="advice-author">- {quotes.author}</p>
                <div className = 'advice-btn'>
                
                <button type="button" id="advicebtn" onClick={getQuote} className="button">Click for Good Advice</button>
            </div>
        </div>
    )
}
export default Advice;
