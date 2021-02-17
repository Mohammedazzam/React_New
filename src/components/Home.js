import Posts from './posts/Posts'
const Home = () => {

  // const handleClick = (e) =>{
  //   console.log("Mohammed");
  //   console.log(e);

  // const handleClick = (name) =>{
  //   console.log(name);
    // console.log(e);

    let name = "Ali"
    const handleClick = () =>{
      name="Mohammed_Azzam";
      console.log(name);
  };
  return (
    <div className="home">
      {/* <button className="btn" onClick={handleClick}> */}
      

      {/* <button 
      className="btn"
      onClick={() =>{
        return handleClick("Azzam")
      }}>

        Click Me
      </button> */}


<button className="btn"onClick={handleClick}>
        Click Me
      </button>
      <h1>{name}</h1>
      <Posts />
    </div>
  );
};

export default Home;
