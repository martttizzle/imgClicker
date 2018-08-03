import React from "react";
import { NavBar, Header, Main, Footer } from "./Layout";
import solarList from "../images.json";
// import ImageCard from "./ImageCard";

class Current extends React.Component {
  state = {
     images: solarList,
    // unClickedImages: imageList,
    score: 0,
    topScore: 0,
    gameStatus: "Click Image to start!"
  };

  render() {
    return (
      <div>
        <NavBar navState={this.state} />
        <Header />
        <Main solarImages={this.state}/>
        <Footer />
      </div>
    );
  }
}

export default Current;
