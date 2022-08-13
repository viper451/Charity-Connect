import React, { useEffect, useState } from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";





export default function OrganizationTableData(props) {
  // console.log(props)
  useEffect(() => {}, [props.info]);
  const [information, setInformation] = useState(props.info);
  //  console.log(information)
  console.log(information);

  const { name, date, mail, location, description, organize, _id } =
    information;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{mail}</td>
        <td>{date}</td>
        <th>{location}</th>
        <td>{organize}</td>
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
