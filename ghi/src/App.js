import { useEffect, useState } from "react";
import Construct from "./Construct.js";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import SignUpForm from "./SignUpForm.js";
import LoginForm from "./LoginForm.js";
import Nav from "./Nav.js";
import MainPage from "./MainPage.js";
import RecipeDetails from "./RecipeDetails.js";
import SearchPage from "./searchPage.js";




function App() {
    return (
        <>

            <BrowserRouter>
            <div className="container">
            <Nav />
                <AuthProvider>
                {/* <TitleBar /> */}
                <Routes>
                    <Route exact path="/" element={<MainPage />}></Route>
                    <Route exact path="/signup" element={<SignUpForm />}></Route>
                    <Route exact path="/login" element={<LoginForm />}></Route>
                    <Route exact path="/recipe/:recipeId" element={<RecipeDetails />}></Route>
                    <Route exact path="/search" element={<SearchPage />}></Route>
                </Routes>
                </AuthProvider>
                </div>
            </BrowserRouter>
        </>
    );
}
export default App;
