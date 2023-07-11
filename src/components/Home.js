import styles from '../styles/Home.module.css';

function Home() {
  const homeContainer = {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };

  return (
    <div className={styles.homeContainer} style={homeContainer}>
      <h3>Welcome to our page!</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis
        officiis ratione blanditiis incidunt saepe, consequuntur vel deserunt
        molestiae dolorum delectus ex laboriosam amet ad perferendis, labore
        facere porro dignissimos. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Fugit nobis officiis ratione blanditiis incidunt
        saepe, consequuntur vel deserunt molestiae dolorum delectus ex
        laboriosam amet ad perferendis, labore facere porro dignissimos.
      </p>
    </div>
  );
}

export default Home;
