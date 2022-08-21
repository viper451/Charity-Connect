import React,{useState,useEffect} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
 import Badge from 'react-bootstrap/Badge';
const VolunteerCard = (props) => {
    const {_id,name,date,mail,organize, description,status}=props.datas;
    // const [waiting, setwaiting] = useState(props.datas.status)
    // setwaiting(props.datas.status)
    // console.log(JSON.stringify({}))
    // console.log(JSON.stringify({status}) === JSON.stringify("Accepted"));
 
    
     
    
    return (
        <Card className="m-3" style={{maxWidth:"20rem", minHeight:"22rem"}}>
          <CardImg top width="100%" src="https://sccnhub.com/images/2018/11/29/istock-490453735-2-copy.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{organize} : {name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Date : {date}</CardSubtitle>
            <CardText>{description}</CardText>
            
            <Button onClick={()=>props.removeWork(_id)  } className="btn btn-danger">Cancel</Button>
            <h3>
            <Badge bg={status=="Accepted"?"success":"secondary"}  text= "dark" >{status}</Badge>{' '}</h3>
        
          </CardBody>
        </Card>
      
    );
};

export default VolunteerCard;