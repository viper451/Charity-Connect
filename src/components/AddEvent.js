import React,{useState,useEffect} from "react";
import "./style.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";




const AddEvent = () => {
  const [newUser,setNewAuthor]=useState(
  {
    title:"",
    orgnaizationname:"",
    description:"",
    photo:"",
  }
  )
  // const [title,setTitle]=useState("")
  // const [orgnaizationname,setOrganizationname]=useState("")
  // const [description,setDescription]=useState("")
  // const [fileName,setFileName]=useState("")
  const history=useHistory()


  const  onChangeFile=(e)=>{

    e.preventDefault()
    // setFileName(e.target.files[0])
    setNewAuthor({...newUser,photo:(e.target.files[0])});
   console.log(newUser.photo)
  }

  const  handleChange=(e)=>{
   
    setNewAuthor({...newUser,[e.target.name]:e.target.value});
  }


  const changeonClick=(e)=>{
    e.preventDefault();

      console.log(newUser)
      const formData=new FormData();
      formData.append('title',newUser.title);
      formData.append('orgnaizationname',newUser.orgnaizationname);
      formData.append('description',newUser.description);
      formData.append('photo',newUser.photo);
       
      console.log(newUser.photo)

     
    // formData.append("title",title);
    // formData.append("orgnaizationname",orgnaizationname);
    // formData.append("description",description);
    // formData.append("fileName",fileName);
    // console.log(formData)
    // console.log(title+" "+orgnaizationname+" "+description+" "+fileName)
   const response=axios.post("http://localhost:3006/eventadd",formData) 
   .then(res=>{
    console.log(res)
   })
   .catch(err=>{
    console.log(err)
   })

      console.log(response)
  }

  return (
    <div className="container">
      <div className="container">
        <h5 className="my-4 text-center">Add Event</h5>
        <div className="event-box mx-auto">
          <Form onSubmit={changeonClick} encType="multipart/form-data">
            <FormGroup>
              <Label for="eventName">Event Title</Label>
              <Input
                type="text"
        
                onChange={handleChange}
                name="title"
                id="title"
                placeholder="Enter Event Name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">Organization Name</Label>
              <Input
                type="text"
            
                onChange={handleChange}
                name="orgnaizationname"
                id="orgnaizationname"
                placeholder="Enter Orgnaization Name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                      
                name="description"
                onChange={handleChange}
                id="description"
                placeholder="Enter Description"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="banner">Banner</Label>
              <Input type="file" 
                     name="photo"
                     accept=".png,.jpg,.jpeg"
                     className="form-control-file"
                     onChange={onChangeFile} 
                     id="banner" 
                     required
                      />
            </FormGroup>

            <button className="btn btn-primary btn-custom-2" onClick={changeonClick}>Add Event</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
