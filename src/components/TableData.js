import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Verification from "./Verification";





// const onClickDelete=async(id)=>{
//   console.log(id)
//      axios.delete('http://localhost:3006/deleteActivity',id)
// }

export default function TableData(props) {
  const [information, setInformation] = useState(props.info);
  // console.log(props);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image,setimage]=useState((props.info.fileName?.path))
  //  console.log(image)
  

  // console.log(information);

 
useEffect(() => 
{
  setInformation(props.info)
},[props.info]);


const { name, date, mail,age, location, description, organize, _id, status,fileName} =
information;




// console.log(fileName)

 let [finalimage,setfinalImage]=useState(fileName?.path);
 let [tempfinalimage,settempfinalImage]=useState();
    
 if(finalimage!==undefined)
 {
tempfinalimage=String(finalimage.substring(10))
 }


 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:420,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

//   const str=fileName?.path
//   let finalpath=fileName?.path!==undefined?String(str.substring(10)):'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets-global.website-files.com%2F5f689f82910c6b4f1ffb855b%2F613b1f91b195318100f7d27e_aadhar%2520card%25402x-min.jpg&imgrefurl=https%3A%2F%2Fdocsumo.com%2Fuse-cases%2Faadhar-card-verification-api&tbnid=tSN7d3aBXJblQM&vet=12ahUKEwjZltbq8vX5AhWTyqACHd29De0QMygBegUIARDfAQ..i&docid=wRC_wVljd7BRAM&w=2880&h=1920&q=aadhar%20card&ved=2ahUKEwjZltbq8vX5AhWTyqACHd29De0QMygBegUIARDfAQ'
// finalimage=require(finalpath)


// console.log(finalimage)
// const finalimage = require(fileName.path)


  return (
   
    <tbody >

      <tr>
        <td>{name}</td>
        <td>{mail}</td>
        <td>{date}</td>
        <td>{age}</td>
        <td>{location}</td>
        <td>{organize}</td>
   
        <td>     <Button  color="primary" onClick={handleOpen}>Link</Button></td>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Document Verification  (Any one)
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     1.Aadhar Card <br/>2.Pan Card  <br/>      
     3.Passport


      {finalimage && <img src={tempfinalimage} style={{ width: "100%"}}  />} 
      {/* hello */}
    </Typography>
  </Box>
</Modal>






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
