import React from "react";
import ReactDOM from "react-dom";

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  overview:
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."
};

function Image(props) {
  // console.log("Image props", props);
  return <img src={props.src} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log("MovieItemprops", props);
//   const {
//     data: { title, vote_average, image }
//   } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_average}</p>
//     </div>
//   );
// }

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    console.log("state", this.state);
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <button
          type="button"
          onClick={() => {
            this.setState({
              show: !this.state.show
            });
          }}
        >
          {this.state.show ? "show" : "hide"}
        </button>

        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
