import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <div className="flex flex-col items-center gap-4">
        <h2>Welcome to My portfolio</h2>
        <img
          className="w-64 h-auto"
          src="../ProfilePhoto.jpeg"
          alt="Profile-img"
        />
        <p className="mx-auto text-center max-w-md">
          A self-motivated and dedicated software engineer with good knowledge
          of algorithms and programming concepts and AWS cloud. I'm a passionate
          Software Engineer with 18 months of experience and an AWS Certified
          Developer Associate indulging in learning & gaining experience about
          the latest technology i.e., cloud computing, Java, and Selenium.
          Education
        </p>
      </div>
    </div>
  );
};

export default Home;
