import Posts from './posts/Posts'
const Home = () => {
  const title="HOME";
  const styles = { color:"red", backgroundColor:"black" };
  return (
    <div className="home">
      <h1 style={styles}>{title}</h1>
      <Posts />
    </div>
  );
};

export default Home;
