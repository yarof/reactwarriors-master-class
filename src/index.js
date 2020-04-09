import React from "react";
import ReactDOM from "react-dom";

function MovieItem(props) {
  console.log("props =", props);
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.vote_average}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem title="Title new" vote_average={10.1} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
