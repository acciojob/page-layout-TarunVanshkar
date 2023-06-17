
import React from "react";
import './../styles/App.css';
import Content from "./content";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Content header={"Welcome to my website"} children={"This is the content of my website."} footer={"© 2023 My Website. All rights reserved."} />
    </div>
  )
}

export default App
