import React from "react";
import "./hero-page.css";
const HeroPageComponent = () => {
  return (
    <div className="parent">
      <h1>Aptitude Guru Hem</h1>
      <h2>
        At AGH, we shape futures and build skills that strive for your
        excellence.
      </h2>
      <p>
        Where Success Meets Opportunity! Are you ready to embark on a
        transformative journey towards success? At Aptitude Guru Hem, we are
        committed to providing you with the essential skills and knowledge to
        excel in your professional endeavors. Our expert training in aptitude
        and coding equips you to conquer every challenge, from company interview
        assessments to prestigious coding platforms like LeetCode,
        GeeksForGeeks, HackerRank , and more.
      </p>
      <div className="button__box">
        <button className="button_1">Start your learning</button>
        <button className="button_2">Join your live demo</button>
      </div>
    </div>
  );
};
export default HeroPageComponent;
