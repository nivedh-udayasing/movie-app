import movie from "../assets/movie.svg";
const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary p-0">
        <div className="container-fluid p-0">
          <a
            className="navbar-brand d-flex align-items-center justify-content-center"
            href="#"
          >
            <img
              src={movie}
              alt="Logo"
              width="80"
              height="60"
              className="d-inline-block align-text-top"
            />
            IMDB Movies
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
