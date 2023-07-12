import { useState } from "react";

function DetailsPage() {
    const [name, setName] = useState("");

    const recipeData = async () => {
        const recipeID = 72585;
        const recipeURL = `https://api.spoonacular.com/recipes/${recipeID}/information`;
        const apiKey = "051aebf11bd2eb585102f0d8a755af4af31da1ad";
        const response = await fetch(recipeURL + `?apiKey =${apiKey}`);
        const data = response.json();
        console.log(data);
    };

    return <button onClick={recipeData}>Test for details</button>;
}

export default DetailsPage;
