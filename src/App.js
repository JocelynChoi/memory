import React from "react";
import Header from "./components/Header.js"
// import HelloBootstrap from "./components/HelloBootstrap";

import antelope from "./components/images/africanantelope.jpg";
import elephant from "./components/images/africanelephant.jpg";
import little from "./components/images/africanlittle.jpg";
import rhino from "./components/images/africanrhino.jpg";
import tiger from "./components/images/africantiger.jpg";
import giraffe from "./components/images/africangiraffe.jpg"


import List from "./components/List";
// const Appa = () => <HelloBootstrap />;

const images = [
  {
    id: 1,
    name: "antelope",
    purchased: true,
    image: antelope
  },
  {
    id: 2,
    name: "elephant",
    purchased: true,
    image: elephant
  },
  {
    id: 3,
    name: "little",
    purchased: false,
    image: little

  },
  {
    id: 4,
    name: "giraffe",
    purchased: false,
    image: giraffe
  },
  {
    id: 5,
    name: "rhino",
    purchased: false,
    image: rhino
  },
  {
    id: 6,
    name: "tiger",
    purchased: true,
    image: tiger
  }
];


const App = () => (
  <div>

    <Header />
    <List images={images} />
  </div>


);


export default App;




