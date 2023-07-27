import { NavLink } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "./app/apiSlice";
import "./style/navbar.css";

function Nav() {
  const { data: account } = useGetAccountQuery();
  const [logout] = useLogoutMutation();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            RecipeHunt
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              {account && (
                <li>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/search"
                  >
                    Search Recipes
                  </NavLink>
                </li>
              )}
              {account && (
                <li>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/favorites"
                  >
                    My Favorites
                  </NavLink>
                </li>
              )}
            </ul>
            <ul className="navbar-nav">
              {!account && (
                <li>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                </li>
              )}
              {!account && (
                <li>
                  <NavLink
                    className="nav-link text-dark"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              )}
              {account && (
                <li>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/profile/mine"
                  >
                    My Account
                  </NavLink>
                </li>
              )}
              {account && (
                <li>
                  <button className="btn" onClick={logout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
