import { useState,useEffect } from 'react'
import QuoteCard from './components/QuoteCard/QuoteCard'
import SavedQuotes from './components/SavedQuotes/SavedQuotes'
import './App.css'

function App() {
  
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

   // Fetch random quote from API
   const fetchQuote = async () => {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Save the current quote to the saved list
  const saveQuote = () => {
    if (quote && !savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  return (
    <div className="app-container">
    <h1>Ron Swanson Quotes</h1>
    <QuoteCard quote={quote} fetchQuote={fetchQuote} saveQuote={saveQuote} />
    <SavedQuotes savedQuotes={savedQuotes} />
  </div>
  )
}

export default App
