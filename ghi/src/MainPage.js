import { Link } from "react-router-dom";
import videoSource from "./style/food.mp4";
import "./style/mainpage.css";
import addFood from "./style/add-food.png";
import searchFood from "./style/search-food.jpeg";
import makeFood from "./style/make-food.jpeg";

function MainPage() {
    return (
        <>
            <div className="container">
                <video
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",
                        zIndex: "-1",
                        playbackRate: "0.5",
                    }}
                    autoPlay
                    loop
                    muted
                    src={videoSource}
                    type="video/mp4"
                />
                <div className="content-main">
                    <h1 className="title-main">RecipeHunt</h1>
                    <Link className="link-main" to={"/signup"}>Sign Up</Link>
                </div>
            </div>

            <div
                className="features-container"
            >
                <div className="features">
                    <div className="feature">
                        <h2>Add. </h2>
                        <img src={addFood} alt="Add" />
                    </div>
                    <div className="feature">
                        <h2>Search. </h2>
                        <img src={searchFood} alt="Search" />
                    </div>
                    <div className="feature">
                        <h2>Make. </h2>
                        <img src={makeFood} alt="Make" />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link className="about-link" to={"/about"}>Learn More</Link>
            </div>
        </>
    );
}

export default MainPage;
