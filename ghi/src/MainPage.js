import { Link } from "react-router-dom";
import videoSource from "./style/food.mp4";
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
      </div>
      {/* <div
        style={{
          position: "relative",
          minHeight: "100vh",
          paddingTop: "100vh",
        }}
      >
        <header style={{ position: "relative" }}>
          <h1 className="text-center">Welcome to RecipeHunt!</h1>
          <p>
            Welcome to RecipeHunt, your ultimate destination for culinary
            inspiration! Sign up or log in to access a vast collection of
            mouthwatering recipes. Customize your cooking experience by creating
            your ingredient list on your profile page, ensuring you never miss a
            key ingredient. Discover recipes that match your pantry with our
            advanced search feature. Save your favorite finds for easy access,
            and embark on a culinary journey filled with delicious flavors.
            Happy hunting with RecipeHunt!
          </p>
        </header>
      </div> */}
    </>
  );
}

export default MainPage;
