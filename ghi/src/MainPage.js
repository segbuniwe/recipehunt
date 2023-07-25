import { Link } from "react-router-dom";
import videoSource from "./food.mp4";
function MainPage() {
    return (
        <>
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
        }}
        autoPlay
        loop
        muted
        src={videoSource}
        type="video/mp4"
      />
            <div className="px-4 py-5 my-5 mt-0 text-center bg-info">
                <img
                    className="bg-white rounded shadow d-block mx-auto mb-4"
                    src="/logo.svg"
                    alt=""
                    width="600"
                />
                <h1 className="display-5 fw-bold">RecipeHunt</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                    Welcome to RecipeHunt, your ultimate destination for culinary
                    inspiration! Sign up or log in to access a vast collection of
                    mouthwatering recipes. Customize your cooking experience by
                    creating your ingredient list on your profile page, ensuring you never
                    miss a key ingredient. Discover recipes that match your pantry with
                    our advanced search feature. Save your favorite finds for easy access,
                    and embark on a culinary journey filled with delicious flavors.
                    Happy hunting with RecipeHunt!
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link
                            to="/signup"
                            className="btn btn-primary btn-lg px-4 gap-3"
                        >
                            Sign Up!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
