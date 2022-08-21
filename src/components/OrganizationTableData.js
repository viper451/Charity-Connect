import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

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
  const [information, setInformation] = useState(props.info);
  useEffect(() => 
             setInformation(props.info)
   
  , [props.info]);
 
  //  console.log(information)
  console.log(information);

  const { name, date, mail, location,volnumber, description, organize, _id } =
    information;

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{mail}</td>
        <td>{date}</td>
        <td>{volnumber}</td>
        <td>{location}</td>
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
