import { useState } from "react";

const CreateLogin = () => {
    let [err, setErr] = useState(null)
    const url = 'http://localhost:8000/api/users';
    const createUser = async (event) => {
        event.preventDefault()
        if (event.target[1].value !== event.target[2].value) {
            setErr("Passwords given are not the same")
        }
        const newUser = {
            name: event.target[0].value,
            password: event.target[1].value
        }
        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
        }
        catch (err) {
            console.log("Error message: " + err)
        }
    }

    return (<div className="Login">
        <h1 className="loginTitle">Registration</h1>
        <form onSubmit={createUser} className="loginForm">
            <label htmlFor="username">Username: </label>
            <input type="text" className="username" /> <br />
            <label htmlFor="password">Password: </label>
            <input type="text" className="password" /> <br />
            <label htmlFor="confirm">Confirm Password: </label>
            <input type="password" className="confirm" /> <br />
            <input type="submit" className="submit" /> <br />
            {err && <div className="errorMsg">{err}</div>}
        </form>
    </div>);
}

export default CreateLogin;