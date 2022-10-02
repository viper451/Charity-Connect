import React,{useState} from 'react';
import "./style.css";
import swal from 'sweetalert';




export default function AdminLogin() {
const account={
    email:"rosp@gmail.com",
    password:"npfp10"
}



     const [details,setDetails]=useState({email:"",password:""})



     const submitHandler=e=>{
       e.preventDefault();
       console.log(details)
       setDetails(details)

    if(details.email===account.email && details.password===account.password)
    {
      swal({
				title: "LOGIN Admin!",
				text: "Login Successfully!",
				icon:  "success",
				dangerMode: true,
				button: false,
				timer: 900,
			  });
        window.location.href='/admin'
    }
    else{
        alert('WRONG ID AND PASSWORD')
        setDetails({email:'',password:''})
    }

  
     }


  return (
            
    <div className='user_card'>
      <form onSubmit={submitHandler}>
        <h3>LOGIN AS ADMIN</h3>

        <div className="mb-3">
          <label>Email ADDRESS</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            id="email"
            onChange={e=>setDetails({...details,email:e.target.value})}
            value={details.email}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            id="password"
            onChange={e=>setDetails({...details,password:e.target.value})}
            value={details.password}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
          Sign In!
          </button>
        </div>

      </form>
      </div>
    );
  }