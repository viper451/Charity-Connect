import React from "react";
import "./style.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
const AddEvent = () => {
  return (
    <div className="container">
      <div className="container">
        <h5 className="my-4 text-center">Add Event</h5>
        <div className="event-box mx-auto">
          <Form>
            <FormGroup>
              <Label for="eventName">Event Title</Label>
              <Input
                type="text"
                name="eventName"
                id="eventName"
                placeholder="Enter Event Name"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">Event Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="Enter Date"
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Enter Description"
              />
            </FormGroup>

            <FormGroup>
              <Label for="banner">Banner</Label>
              <Input type="file" name="file" id="banner" />
            </FormGroup>

            <button className="btn btn-primary btn-custom-2">Add Event</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
