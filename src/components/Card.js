import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, name, picture } = props.data;
  console.log(props.data);
  return (
    <Link to={"/register/" + id}>
      <div
        className="card card-custom m-2"
        style={{ width: "14rem", minHeight: "12rem" }}
      >
        <img className="card-img-top" src={picture} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text text-center ">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
