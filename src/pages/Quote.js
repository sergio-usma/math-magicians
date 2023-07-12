import React, { useState, useEffect } from 'react';
import '../css/Quote.css';

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiGet = async () => {
    const category = 'success';
    const response = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${category}`,
      {
        headers: {
          'X-Api-Key': 'FqOqeVw4GFlIRRD+ul7ajA==JGa9IaPYU0DTGK9Y',
        },
      },
    );

    if (response.ok) {
      const json = await response.json();
      setData(json);
      setLoading(false);
    } else {
      setError(response.statusText);
    }
  };

  useEffect(() => {
    apiGet();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } if (error) {
    return (
      <div>
        <p>
          Error:
          {error}
        </p>
      </div>
    );
  }
  const quote = data[0]?.quote;
  const author = data[0]?.author;

  return (
    <div className="quote__container">
      <p className="quote">
        &quot;
        {quote}
        &quot;
        <br />
        {author}
      </p>
      <button className="quote__btn" type="button" onClick={apiGet}>New quote</button>
    </div>
  );
};

export default FetchApi;
