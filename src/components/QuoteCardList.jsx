import React, {useState} from 'react'
import QuoteCard from './QuoteCard'
import axios from 'axios'

function QuoteCardList() {
    const [quoteCards, setQuoteCards] = useState([]);
    const simpson = () => {
        axios
        .get("https://simpsons-quotes-api.herokuapp.com/quotes")
        .then((res) => res.data)
        .then((data) => setQuoteCards(data));
    };
    return (
        <div className = "QuoteCardList">
            <button className = "filter-btn" onClick={simpson}>Quote
            </button>
                
           <div className = "quoteCards-container">
               {quoteCards
               .map((quoteCard, index) =>(
                   <div key={quoteCard.index}>
                       <QuoteCard quoteCard={quoteCard} />
                   </div>
               ))}
           </div>     
        </div>
    )
}

export default QuoteCardList
