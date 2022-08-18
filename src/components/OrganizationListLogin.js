import { useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';
import swal from "sweetalert";

function Organizationlistlogin() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3006/loginOrganization', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
		console.log(response)
		const data = await response.json()
		console.log(data)
    

		if (data.success) {
	
            localStorage.setItem('token',data.info._id)
			localStorage.setItem('email', data.info.email)
		 localStorage.setItem('name',data.info.orgnaizationname)
			// alert('Login successful')
			swal({
				title: "LOGIN ORGNAIZATION!",
				text: "Login Successfully!",
				icon:  "success",
				dangerMode: true,
				button: false,
				timer: 850,
			  });
			  window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<>
		<div className="classfontfamily">
		<h1>LOGIN AS ORGANIZATION</h1>
		</div>
		<div className='user_card'>
		
			<form onSubmit={loginUser}>
			<AccountBoxIcon/> 
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
		   
				<br />
				<LockIcon/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<button type="submit"  value="login"className="btn btn-primary">
          Sign In!
          </button>
			</form>
		</div>
		</>
	)
}

export default Organizationlistlogin
