import {useState} from 'react';
import jwt from 'jsonwebtoken';

const Login = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [secret, setSecret] = useState<string>('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const LOGIN_URL = '/api/login';
        const loginOptions = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }
        const response = await fetch(LOGIN_URL, loginOptions).then(res => res.json());
        const token = response.token;

        const secretOptions = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        }
        const secretRes = await fetch('/api/secret', secretOptions).then(res => res.json());
        console.log("sec res", secretRes)
        if(secretRes.secretKey) {
            setSecret(secretRes.secretKey)
        } else {
            setSecret("Nothign avail")
        }
        if(!token) {
            setMessage("Something went wrong!!!")
        }
        const userDetails = jwt.decode(token) as {[key: string] : string};
        setMessage(`Hi ${userDetails.username} and you are ${userDetails.admin ? 'admin' : 'not admin'}`)
    }
    return(
        <>
        <h1>{message} </h1>
        <h1>Secret key is: {secret}</h1>
            <form onSubmit={handleSubmit}>
                UserName: <input type="text" name="username"
                 value={username} onChange={e => setUsername(e.target.value)}
                />
                <br />
                Password: <input type="password" name="password"
                    value={password} onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;