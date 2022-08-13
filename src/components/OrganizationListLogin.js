import { useState } from 'react'

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
			alert('Login successful')
			  window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div className='user_card'>
			<h1>LOGIN AS ORGANIZATION</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	)
}

export default Organizationlistlogin
