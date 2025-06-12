import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-logo">
          <h1>
            Book<strong>Hub</strong>
          </h1>
        </div>

        <div className="navbar-navegation">
          <a href="/">Home</a>
          <a href="">About</a>
          <a href="">Login</a>
        </div>
      </div>
    </>
  );
};
