import { useEffect, useState } from 'react';
import styles from '../styles/Quotes.module.css';

function Quotes() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const category = 'knowledge';

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': 'XtpaXk3lGZsb6+8mmX6fyg==F1s0lRAD1hANrJxh',
              'Content-Type': 'application/json',
            },
          },
        );
        const json = await resp.json();
        setData(json[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) return hasError || <div>Something went wrong!</div>;

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loading__roller}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div>Loading</div>
      </div>
    );
  }

  const quoteStyle = {
    marginTop: '5rem',
    fontSize: '2rem',
    width: '80vw',
    minWidth: '350px',
  };

  return (
    <div style={quoteStyle}>
      <p>{data.quote}</p>
      <strong>
        <p>{data.author}</p>
      </strong>
    </div>
  );
}

export default Quotes;
