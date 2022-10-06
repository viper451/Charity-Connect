import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, name, picture } = props.data;
  // console.log(props.data);
  return (
    <Link to={"/register/" + id}>
      <div
        className="card card-custom m-4"
        style={{ width: "14rem", minHeight: "12rem" }}
      >
        <div className="gradient-border">
          <img className="card-img-top" src={picture} alt="Card  cap" />

          <div className="card-body">
            <p
              className="card-text text-center"
              style={{ textDecoration: "none" }}
            >
              {name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
