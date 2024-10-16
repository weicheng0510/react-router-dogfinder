import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './NavBar'
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function App({ dogs }) {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar dogs={dogs} />
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
  ],
};

export default App;
