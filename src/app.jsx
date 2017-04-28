import React from "react";
import "../styles/index.scss";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MusicCard />
      </div>
    );
  }
}

//Main Music Card
const Card = props => {
  return (
    <div>

      <div className="music-card rightSide">
        <div className="image">
          <img src={props.avatar_url} />
        </div>
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="info">
          <h2 className="title">{props.name}</h2>
          <author className="artist">{props.company}</author>
        </div>
      </div>
    </div>
  );
};

//Music Card Class
class MusicCard extends React.Component {
  state = {
    Cards: [
      {
        avatar_url: "https://avatars3.githubusercontent.com/u/9699183?v=3",
        name: "Blake Mastrud",
        company: "Williams Companies"
      },
      {
        avatar_url: "https://avatars3.githubusercontent.com/u/9699183?v=3",
        name: "Blake Mastrud",
        company: "Williams Companies"
      },
      {
        avatar_url: "https://avatars3.githubusercontent.com/u/9699183?v=3",
        name: "Blake Mastrud",
        company: "Williams Companies"
      },
  
    ]
  };
  render() {
    return (
      <div>

        <CardList cards={this.state.Cards} />
      </div>
    );
  }
}

//Loop over each object in array
const CardList = props => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};






















/*class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = event => {
    event.preventDefault();
    console.log("Event: Form Submit", this.userNameInput.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="Github username"
          required
        />
        <button type="submit">Add card</button>
      </form>
    );
  }
}*/