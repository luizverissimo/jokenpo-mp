import React from "react";

import imgRock from "./assets/rock.png";
import imgPaper from "./assets/paper.png";
import imgScissors from "./assets/scissors.png";

function App() {
  return (
    <div
      className="container"
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="cards"
        style={{
          display: "flex",
        }}
      >
        <img
          src={imgRock}
          style={{ boxShadow: "3px 3px 5px 6px #ccc", margin: "30px" }}
          alt="rock"
          width="450"
        />
        <img
          src={imgPaper}
          style={{ boxShadow: "3px 3px 5px 6px #ccc", margin: "30px" }}
          alt="paper"
          width="450"
        />
        <img
          src={imgScissors}
          style={{ boxShadow: "3px 3px 5px 6px #ccc", margin: "30px" }}
          alt="scissors"
          width="450"
        />
      </div>
    </div>
  );
}

export default App;
