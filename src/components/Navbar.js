import { link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Blog post</h2>
      <div className="links">
        <link to="/">Home</link>
        <link to="Create">About</link>
      </div>
    </nav>
  );
};
export default Navbar;
