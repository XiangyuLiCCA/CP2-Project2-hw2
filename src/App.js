import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    image: "start.jpg",
    leftLabel: "Train",
    middleLabel: "Airplane",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    middlePage: "ontheairplane",
    rightPage: "ontheship"
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    image: "train.jpg",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "setticket",
    rightPage: "sleeperticket"
  },
  ontheship: {
    text: "Welcome on board. Do you want something to eat? ",
    image: "ship.png",
    leftLabel: "seafood",
    rightLabel: "Orangejuice",
    leftPage: "food",
    rightPage: "juice"
  },
  ontheairplane: {
    text: "thank you for choosing CP2 airline, May I have your set namber? ",
    image: "737.jpg",
    leftLabel: "3A",
    rightLabel: "36D",
    leftPage: "firstclass",
    rightPage: "ecoclass"
  },
  setticket: {
    text: " Someone is stealing your wallet and you want to ...",
    image: "qianbao.jpeg",
    leftLabel: "Fight with them",
    rightLabel: "Yelling",
    leftPage: "death",
    rightPage: "life"
  },
  sleeperticket: {
    text: " You bought a bedroom ticket! Have a good dream, good night!",
    image: "sleep.jpeg",
    leftLabel: "keep sleeping",
    rightLabel: "wake up",
    leftPage: "death",
    rightPage: "life"
  },
  food: {
    text: " You want it raw or cooked?",
    image: "seafood.jpg",
    leftLabel: "raw",
    rightLabel: "cooked",
    leftPage: "death",
    rightPage: "life"
  },
  juice: {
    text: "Do you want iced or no ice? ",
    image: "juice.jpg",
    leftLabel: "no ice",
    rightLabel: "iced",
    leftPage: "death",
    rightPage: "life"
  },
  firstclass: {
    text:
      " Thank you for choosing our first class service. Would you like to lie in bed or sit in a chair?",
    image: "first.jpg",
    leftLabel: "bed",
    rightLabel: "chair",
    leftPage: "death",
    rightPage: "life"
  },
  ecoclass: {
    text: "ohhhhh the plane is crashing! ",
    image: "gg.jpg",
    leftLabel: "open TikTok and take a video",
    rightLabel: "Fasten your seat belt, Get ready for anti-impact posture",
    leftPage: "death",
    rightPage: "life"
  },

  death: {
    text: "You are dead, but you still have a chance to come back. ",
    image: "",
    leftLabel: "Let's start over",
    leftPage: "start"
  },
  life: {
    text: "You survive! Congratulations! wanna start again?",
    image: "",
    leftLabel: "Let's start over",
    leftPage: "start"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];
    var leftLabel;
    var middleLabel;
    var rightLabel;
    var image = "";

    if (pageData.image) {
      image = <img src={pageData.image} width="200" />;
    }

    if (pageData.leftLabel) {
      leftLabel = (
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
      );
    }

    if (pageData.middleLabel) {
      middleLabel = (
        <button onClick={() => this.goToPage(pageData.middlePage)}>
          {pageData.middleLabel}
        </button>
      );
    }

    if (pageData.rightLabel) {
      rightLabel = (
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
      );
    }

    return (
      <div className="App">
        <p>
          {pageData.text}
          <br />
          {image}
        </p>
        <p>
          {leftLabel}
          {middleLabel}
          {rightLabel}
        </p>
        {/* <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button> */}
      </div>
    );
  }
}

export default App;

//<input />
