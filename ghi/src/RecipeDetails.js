import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery, useGetAllRatingsQuery } from "./app/recipeSlice";
import FavoritesButton from "./FavoritesButton";
import { useGetAccountQuery } from "./app/apiSlice";
import { Link } from "react-router-dom";
import RatingsForm from "./RatingsForm";

function RecipeDetails() {
    const { recipeId } = useParams();
    const { data, isLoading } = useGetRecipeByIdQuery(recipeId);
    const { data: account } = useGetAccountQuery();
    const { data: ratings } = useGetAllRatingsQuery(recipeId);
    console.log(ratings);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="container">
            <h1 className="text-center mt-3">{data.name}</h1>
            <p className="text-center">Rating/Stars Goes Here</p>
            <div className="text-center mt-3">
                <img className="img-thumbnail" src={data.thumbnail_url} alt={data.name} />
            </div>
            <div className="row mx-md-n5 mt-5">
                <p className="text-center">{data.description}</p>
            </div>
            <div className="text-center mt-3">
                {account ? (
                    <FavoritesButton />
                ) : (
                    <Link to={"/login"}>Login to add to favorites</Link>
                )}
            </div>
            <div className="mt-4">
                <div className="border border-primary p-3">
                    <div className="row">
                        <div className="col text-left">
                            <p>Ready in Minutes: {data.total_time_minutes}</p>
                        </div>
                        <div className="col text-end">
                            <p>Servings: {data.num_servings}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-left">
                            <p>whatever you want here </p>
                        </div>
                        <div className="col text-end">
                            <p>Whatever you want here</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col">
                        <h3>Ingredients</h3>
                        <ul>
                            {data.sections.map((section) =>
                                section.components.map((component) => (
                                    <li>{component.raw_text}</li>
                                ))
                            )}
                        </ul>
                    </div>
                    <div className="col text-end">
                        <h3>Instructions</h3>
                        <ol>
                            {data.instructions.map((step) => (
                                <li>{step.display_text}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
                {data.original_video_url ? (
                    <video width="320" height="240" controls>
                        <source
                            src={data.original_video_url}
                            type="video/mp4"
                        />
                    </video>
                ) : (
                    <p>This video does not exist</p>
                )}
            </div>
            <div className="text-center mt-3">
                <h3>Reviews</h3>
            </div>
            <div className="text-center mt-3">
                <Link className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" to={`/ratings/${recipeId}`}>Write a review</Link>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Leave Review</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <RatingsForm />
                        </div>
                    </div>
                </div>
            </div>
            {ratings.length > 0 ?
                (ratings.map((rating) => {
                    return (
                        <div>
                            <p>
                                {rating.comments} {rating.rating}
                                <div>
                                <small>
                                    {rating.account_first_name} {rating.account_last_name}
                                </small>
                                </div>
                            </p>
                        </div>
                    );
                })) : (<p>No comments for this recipe</p>)
            }
        </div>
    );
}

export default RecipeDetails;
