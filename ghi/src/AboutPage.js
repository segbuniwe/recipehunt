import "./style/aboutpage.css";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <>
            <div className="header-main">
                <h1 className="text-center">Welcome to RecipeHunt!</h1>
                <p className="aboutmedetails">
                    Welcome to RecipeHunt, your ultimate destination for culinary
                    inspiration! Sign up or log in to access a vast collection of
                    mouthwatering recipes. Customize your cooking experience by creating
                    your ingredient list on your profile page, ensuring you never miss a
                    key ingredient. Discover recipes that match your pantry with our
                    advanced search feature. Save your favorite finds for easy access,
                    and embark on a culinary journey filled with delicious flavors.
                    Happy hunting with RecipeHunt!
                </p>
                <div className="contact-container">
                <h1 className="text-center contact-title">Contact</h1>
                <p className="contact-details">
                    <Link className="contact-link" to={"https://www.linkedin.com/in/david-ra-049943268/"}>David Ra</Link>
                    <Link className="contact-link" to={"https://www.linkedin.com/in/javier-o-hernandez/"}>Javier Hernandez</Link>
                    <Link className="contact-link" to={"https://www.linkedin.com/in/shashwath-nayak/"}>Shashwath Nayak</Link>
                    <Link className="contact-link" to={"https://www.linkedin.com/in/sophia-tony-egbuniwe"}>Sophia Tony-Egbuniwe</Link>
                </p>
                </div>
            </div>
        </>
    )
}

export default AboutPage;
