import { useEffect, useState } from "react";
import Construct from "./Construct.js";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import SignUpForm from "./SignUpForm.js";
import LoginForm from "./LoginForm.js";



function App() {
    return (
        <>
        <div className="container">
            <BrowserRouter>
                <AuthProvider>
                {/* <TitleBar /> */}
                <Routes>
                    {/* <Route exact path="/" element={<Main />}></Route> */}
                    <Route exact path="/signup" element={<SignUpForm />}></Route>
                    <Route exact path="/login" element={<LoginForm />}></Route>
                </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
        </>
    );
}
export default App;
