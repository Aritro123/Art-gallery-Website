const Header = () => {
  const redirectToLogin = () => {
    window.location.href = "/Login"; // Redirect to login page
  };

  const redirectToRegister = () => {
    window.location.href = "/Register"; // Redirect to register page
  };
  return (
    <header>
      <div className="wrapper">
        <h1>
          DevArt<span className="color">.</span>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li className="explore-dropdown">
              <a href="/#">Explore</a>
              <div className="dropdown-content">
                <a href="/Gallery">Gallery</a>
              </div>
            </li>
            <li>
              <a href="/Learn">Learn</a>
            </li>
            {/* Add a styled sign-in and sign-up buttons */}
            <li>
              <div className="sign-in-up-buttons">
                <button className="sign-in-button" onClick={redirectToLogin}>
                  Sign In
                </button>
                <button className="sign-up-button" onClick={redirectToRegister}>
                  Sign Up
                </button>
              </div>
            </li>
            {/* End of styled sign-in and sign-up buttons */}
            {/* Add a search bar */}
            <li>
              <form className="search-form">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <button type="submit" className="search-button">
                  Search
                </button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
