import { Link } from "react-router-dom";

function MainPage() {
    return (
        <>
            <div className="px-4 py-5 my-5 mt-0 text-center bg-info">
                <img className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg" alt="" width="600" />
                <h1 className="display-5 fw-bold">RecipeHunt</h1>
                <div className="col-lg-6 mx-auto">
                    {/* <p className="lead mb-4">
                        The only resource you'll ever need to plan an run your in-person or
                        virtual conference for thousands of attendees and presenters.
                    </p> */}
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to="/signup" className="btn btn-primary btn-lg px-4 gap-3">Sign Up!</Link>
                    </div>
                </div>
            </div>
        </>

    );
}

export default MainPage;
