import React from 'react';
import '../css/Home.css';

function Home() {
  const projectDescription = 'Math Magicians is a React project that combines a powerful calculator with a motivational touch. With its sleek interface, users can effortlessly perform complex mathematical calculations. Additionally, the project features a dedicated page filled with inspiring success quotes to uplift and motivate users during their mathematical journey.';
  return (
    <div className="home__container">
      <h2 className="home__title">Math Magicians</h2>
      <p className="home_intro">{projectDescription}</p>
    </div>
  );
}
export default Home;
