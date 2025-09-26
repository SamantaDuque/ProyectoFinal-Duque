import React from "react";
import ItemListContainer from "../containers/ItemListContainer";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Teje y Desteje</h1>
      <p>Aquí encontrarás nuestros productos destacados:</p>
      <ItemListContainer />
    </div>
  );
};

export default Home;
