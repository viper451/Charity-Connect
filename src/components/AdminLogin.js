import React,{useState} from 'react';
import "./style.css";




export default function AdminLogin() {
const account={
    email:"rosp@gmail.com",
    password:"npfp10"
}



     const [details,setDetails]=useState({email:"",password:""})
     const [error,setError]=useState("")


     const submitHandler=e=>{
       e.preventDefault();
       console.log(details)
       setDetails(details)
		
    //    const response=axios.get('http:/local:8000/api/auth/login',details)
    //    if(response!='')
    //    {
    //       alert("LOGIN SUCCESSFULLY")
    //    }
    if(details.email=='admin@gmail.com' && details.password=='admin')
    {
        window.location.href='/admin'
    }
    else{
        alert('WRONG ID AND PASSWORD')
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
{/* 
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
             <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label> 
          </div>
        </div> */}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
          Sign In!
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <Link to="#">password?</Link>
        </p> */}
      </form>
      </div>
    );
  }