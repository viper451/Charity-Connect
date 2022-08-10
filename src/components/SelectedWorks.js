import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const SelectedWorks = () => {
    const img="https://i.ibb.co/dBHb2dp/880681.jpg";
    return (
        <div className="container">
             
                <Card style={{maxWidth:"280px"}}>
                    <CardImg  top width="100%" src={img} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">Humanity More</CardTitle>
                     
                    <CardText>29 September, 2020</CardText>
                    <Button>Cancel</Button>
                    </CardBody>
                </Card>
             
        </div>
    );
};

export default SelectedWorks;