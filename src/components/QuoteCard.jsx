import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quoteCard }) => (
  <figure className="QuoteCard">
    <img src={quoteCard.image} alt={quoteCard.character} />
    <figcaption>
      <blockquote>{quoteCard.quote}</blockquote>
      <cite>{quoteCard.character}</cite>
    </figcaption>
  </figure>
);

export default QuoteCard;
