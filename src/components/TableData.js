import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

// const onClickDelete=async(id)=>{
//   console.log(id)
//      axios.delete('http://localhost:3006/deleteActivity',id)
// }

export default function TableData(props) {
  console.log(props);
  useEffect(() => {}, [props.info]);
  const [information, setInformation] = useState(props.info);
  console.log(information);

  const { name, date, mail, location, description, organize, _id, status } =
    information;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{mail}</td>
        <td>{date}</td>
        <td>{location}</td>
        <td>{organize}</td>
        <td>{status}</td>
        <td>
          <Button
            onClick={() => props.onClickDelete(_id)}
            className="btn btn-danger"
          >
            DELETE
          </Button>
        </td>
      </tr>
    </tbody>
  );
}
