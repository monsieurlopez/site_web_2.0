import chefsMarioAndAdrian1Img from "./assets/personal_photo.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story" id="about">
      <div className="our-story-description">
        <h2>About me</h2>
        <p>
        I am passionate about computers, which is why in 2023 I decided to make a career change into the world of web development. 
        <br/><br/>After working for eight years in the financial sector, covering areas such as marketing, recruitment, and training, 
        I decided to make a significant shift in my professional profile to enter the field of web development.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrian1Img} alt="Chefs Mario and Adrian #1" />
      </div>
    </section>
  );
};

export default OurStory;
