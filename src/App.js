import React from "react";

import Calendar from "./reactCalendar";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span className="">
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
