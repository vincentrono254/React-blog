import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <Link to="/create" className="button">
        Create a new blog post
      </Link>
    </div>
  );
};

export default Home;
