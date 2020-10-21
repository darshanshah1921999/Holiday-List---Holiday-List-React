import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let locations = [
      "Goa(India)",
      "Amsterdam(Netherlands)",
      "New York(USA)",
      "Darjeeling(India)",
      "Tokyo(Japan)",
      "Lonavala(India)"
    ];
    return (
      <>
        <ol key="cities">
          {locations.map((location, index) => (
            <li key={"location" + (index + 1)}>{location}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
