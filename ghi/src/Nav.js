import { NavLink } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "./app/apiSlice";
import "./navbar.css";

function Nav() {
  const { data: account } = useGetAccountQuery();
  const [logout] = useLogoutMutation();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-4">
              <NavLink className="navbar-brand" to="/">
                RecipeHunt
              </NavLink>
            </div>
            <div className="col-4 text-center">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                  <li>
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
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
                        to="/profile/mine"
                      >
                        My Account
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
              </div>
            </div>
            <div className="col-4 text-end">
              {!account && (
                <NavLink
                  className="nav-link text-dark"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
              {account && (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
