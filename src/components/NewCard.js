import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NewCard = (props) => {
  //   const { id, name, picture } = props.data;
  //   console.log(props.data.fileName.path);
  //  console.log(props.fileName)

  const { _id, title } = props.data;
  //  const {path}=props.data.fileName.path
  //    console.log(path)
  let path = String(props.data.fileName.path);
  //  let unkownpath=String("\images\unkown.png")
  //  console.log(String(path.length)>20)
  //  console.log(String(path))
  let finalpath =
    String(path.length) > 20
      ? String(path.substring(10))
      : "\\images\\unkown.png";
  //  console.log(String(props.data.fileName.path))
  //  console.log(finalpath)
  return (
    <Link to={"/register/" + _id}>
      <div
        className="card card-custom m-2"
        style={{ width: "14rem", minHeight: "12rem" }}
      >
        <img className="card-img-top" src={finalpath} alt="" />
        <div className="gradient-border">
        <div className="card-body">
          <p className="card-text text-center ">{title}</p>
        </div>
        </div>
      </div>
    </Link>
  );
};

export default NewCard;
