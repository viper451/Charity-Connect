import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function OrganizationListRegister() {
	const history= useHistory()

	const [orgnaizationname, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3006/addOrganization', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				orgnaizationname,
				email,
				password,
			}),
		})
         
		const data = await response.json()
        console.log(data)
		if (data.success) {
			history.push('/')
		}
		else{
			alert(data.statement)
		}
	}

	return (
		<div>
			<h1>REGISTER AS ORGANIZATION</h1>
			<form onSubmit={registerUser}>
				<input
					value={orgnaizationname}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Organization Name"
				/>
				<br />
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
				<input type="submit" value="Register" />
			</form>
		</div>
	)
}

export default OrganizationListRegister
