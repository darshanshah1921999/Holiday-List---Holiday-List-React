import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let locations = [
      {
        city: "Goa",
        country: "India"
      },
      {
        city: "Amsterdam",
        country: "Netherlands"
      },
      {
        city: "New York",
        country: "USA"
      },
      {
        city: "Darjeeling",
        country: "India"
      },
      {
        city: "Lonavala",
        country: "India"
      }
    ];
    return (
      <>
        <ol key="cities">
          {locations.map(
            (location, index) =>
              location.country.toLowerCase() === "India".toLowerCase() && (
                <li key={"location" + (index + 1)}>{location.city}</li>
              )
          )}
        </ol>
      </>
    );
  }
}

export default App;
