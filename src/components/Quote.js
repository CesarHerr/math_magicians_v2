import { useEffect, useState } from 'react';

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
  }, [setData, setIsLoading]);

  if (hasError) return hasError || <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <p className="quote">{data.quote}</p>
      <strong><p>{data.author}</p></strong>
    </div>
  );
}

export default Quotes;
