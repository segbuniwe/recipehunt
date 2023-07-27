import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm.js";
import LoginForm from "./LoginForm.js";
import Nav from "./Nav.js";
import MainPage from "./MainPage.js";
import RecipeDetails from "./RecipeDetails.js";
import SearchPage from "./SearchPage.js";
import RatingsForm from "./RatingsForm.js";
import ProfilePage from "./ProfilePage.js";
import IngredientForm from "./IngredientForm.js";
import FavoritesList from "./FavoritesList.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Routes>
            <Route exact path="/" element={<MainPage />}></Route>
            <Route exact path="/signup" element={<SignUpForm />}></Route>
            <Route exact path="/login" element={<LoginForm />}></Route>
            <Route
              exact
              path="/recipe/:recipeId"
              element={<RecipeDetails />}
            ></Route>
            <Route exact path="/search" element={<SearchPage />}></Route>
            <Route
              exact
              path="/ratings/:recipeId"
              element={<RatingsForm />}
            ></Route>
            <Route exact path="/profile/mine" element={<ProfilePage />}></Route>
            <Route
              exact
              path="/ingredients"
              element={<IngredientForm />}
            ></Route>
            <Route exact path="/favorites" element={<FavoritesList />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
