import { useState, useEffect } from "react";
import { useRatingsMutation } from "./app/recipeSlice";
import { useParams, useNavigate } from "react-router-dom";

function RatingsForm() {
    const [rating, setRatings] = useState('');
    const [comments, setComments] = useState('');
    const [review, reviewResult] = useRatingsMutation();
    const { recipeId } = useParams();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (reviewResult.isSuccess) {
    //         navigate(`/recipe/${recipeId}`);
    //     }
    // }, [reviewResult]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            rating: rating,
            comments: comments,
        }
        review({ body: body, recipe_id: recipeId });
        setRatings("");
        setComments("");
        alert("Review received successfully.")
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Review</h1>
                    <form onSubmit={handleSubmit} id="create-hat-form">
                        <div className="form-floating mb-3">
                            <input value={rating} onChange={(e) => setRatings(e.target.value)} placeholder="Rating" required type="number" id="rating" className="form-control" name="rating" />
                            <label htmlFor="rating">Rating</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Comments" required type="text" id="comments" className="form-control" name="comments" />
                            <label htmlFor="comments">Comments</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RatingsForm;
