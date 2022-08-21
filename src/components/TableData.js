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
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


// const onClickDelete=async(id)=>{
//   console.log(id)
//      axios.delete('http://localhost:3006/deleteActivity',id)
// }

export default function TableData(props) {
  const [information, setInformation] = useState(props.info);
  // console.log(props);
  useEffect(() => 
  {
    setInformation(props.info)
  },[props.info]);

  // console.log(information);

  const { name, date, mail,age, location, description, organize, _id, status } =
    information;

  return (
   
    <tbody >

      <tr>
        <td>{name}</td>
        <td>{mail}</td>
        <td>{date}</td>
        <td>{age}</td>
        <td>{location}</td>
        <td>{organize}</td>
        <td><Button color={status=="Waiting"?"secondary":"success"}   onClick={() => props.onClickUpdate(_id,status)}>{status}</Button></td>
        <td>
          <Button
            onClick={() => props.onClickDelete(_id)}
            className="btn btn-danger"
          >
            DELETE
          </Button>
        </td>
      </tr>
      <br/><br/>
    </tbody>

  );
}
