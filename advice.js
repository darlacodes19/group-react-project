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
        <div>
            <div className ='getquotes'>
                <p>Advice for Today: {quotes.text}</p>
                <p>- {quotes.author}</p>
                <button onClick={getQuote}>Click for Good Advice</button>
            </div>
        </div>
    )
}
export default Advice;