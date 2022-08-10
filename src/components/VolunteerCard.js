import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
const VolunteerCard = (props) => {
  
    const {_id,name,date,mail,organize, description}=props.datas;
    console.log(props.datas)
    
     
    
    return (
        <Card className="m-3" style={{maxWidth:"20rem", minHeight:"22rem"}}>
          <CardImg top width="100%" src="https://i.ibb.co/dBHb2dp/880681.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{organize} : {name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Date : {date}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button onClick={()=>props.removeWork(_id)} className="btn btn-danger">Cancel</Button>
          </CardBody>
        </Card>
      
    );
};

export default VolunteerCard;