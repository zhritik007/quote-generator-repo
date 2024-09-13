import './QuoteCard.css';

const QuoteCard = ({ quote, fetchQuote, saveQuote }) => {
  return (
    <div className="quote-card">
      <p className="quote">{quote}</p>
      <div className="button-group">
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={saveQuote}>Save Quote</button>
      </div>
    </div>
  );
};

export default QuoteCard;
