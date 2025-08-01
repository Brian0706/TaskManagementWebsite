import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

const Login = ({ setUser }) => {
    let [msg, setMsg] = useState(null)
    const url = `http://localhost:8000/api/users/`;
    const navigate = useNavigate()
    const confirmLogin = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch(url + `${event.target[0].value}/${event.target[1].value}`)
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Could not find the user');
                    }
                    console.log(res)
                    return res.json()
                }).then(async (data) => {
                    setMsg(data.msg)
                    if (data.msg === 'The user has given the correct password') {
                        //Move to home page with name
                        setUser(event.target[0].value)
                        navigate(`/${event.target[0].value}`)
                    }
                })
        }
        catch (err) {
            console.log("Error message: " + err)
        }
    }

    return (<div className="Login">
        <h1 className="loginTitle">Login</h1>
        <form onSubmit={confirmLogin} className="loginForm">
            <label htmlFor="username">Username: </label>
            <input type="text" className="username" /> <br />
            <label htmlFor="password">Password: </label>
            <input type="text" className="password" /> <br />
            <input type="submit" className="submit" /> <br />
        </form>
        {msg && <div className="resMsg">{msg}</div>}
        <Link to="/create-login">New User?</Link>
    </div>);
}

export default Login;