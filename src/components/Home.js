import {useState} from "react";
import Posts from './posts/Posts';
const Home = () => {
    // let name = "Ali"

     let [name, setName] = useState("Ali")
     const handleClick = () => {
      // name="Mohammed_Azzam";
      setName("Mohammed_Azzam")
      // console.log(name);
     };
     console.log(name);

  return (
    <div className="home">
<button className="btn"onClick={handleClick}>
        Click Me
      </button>
      <h1>{name}</h1>
      <Posts />
    </div>
  );
};

export default Home;
