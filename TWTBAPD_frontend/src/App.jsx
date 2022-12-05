import React from "react";
import MainNavbar from "./components/layout/MainNavbar";
import MainSidebar from "./components/layout/MainSidebar";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="columns m-0 p-5">
        <MainSidebar />
        <div className="column is-9">
          <section className="hero has-background-primary column">
            <div className="hero-body">
              <h1 className="title has-text-centered has-text-white">
                The Way To Become A Python Developer
              </h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
