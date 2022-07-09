import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";



function HomePage() {
  return (
    <div>
      <Navbar showSignInButton={false} logOut={true} />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=0bfe5a1e3f30cdf946fbdc0290721647&language=en-US"
        isLargeRow
      />
      <Row
        title="Comedy"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=0bfe5a1e3f30cdf946fbdc0290721647&with_genres=35"
      />
      <Row
        title="Horror"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=0bfe5a1e3f30cdf946fbdc0290721647&with_genres=27"
      />
      <Row
        title="Action"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=0bfe5a1e3f30cdf946fbdc0290721647&language=en-US"
      />
      <Row
        title="Adventures"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=0bfe5a1e3f30cdf946fbdc0290721647&with_genres=28"
      />
    </div>
  );
}

export default HomePage;