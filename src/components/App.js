
import React from "react";
import './../styles/App.css';
import Heading from "./heading";
import Content from "./content";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Heading header={"Welcome to my website"} />
        <Content footer={"© 2023 My Website. All rights reserved."} children={"This is the content of my website."} />
    </div>
  )
}

export default App
