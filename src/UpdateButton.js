import { useState } from "react";

const UpdateButton = ({ parent, onSendSignal, possibleStates }) => {
    const [updating, setUpdating] = useState(false)
    const switchStatus = () => {
        setUpdating(!updating);
    }
    const handleSubmit = () => {
        switchStatus()
    }
    const updateTask = async (event) => {
        event.preventDefault()
        try {
            const updatedTask = {
                title: event.target[0].value,
                description: event.target[1].value,
                status: event.target[2].value
            }
            console.log(updatedTask)
            const update = await fetch(`http://localhost:8000/api/tasks/${parent._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTask)
            })
            if (!update.ok) {
                throw new Error(`Error with status: ${update.status}`);
            }
            switchStatus()
            onSendSignal()
        } catch (error) {
            console.log(error)
        }
    }
    return (<div className="Update">
        <button className="Update" onClick={switchStatus} style={{ display: updating ? 'none' : 'block' }}>Update Task</button>
        <div className="form">
            <form onSubmit={updateTask} className="createTask" style={{ display: updating ? 'block' : 'none' }}>
                <h2>New Task Description</h2>
                <label htmlFor="title">Title: </label>
                <input id="title" className="title" type="text" defaultValue={parent.title} required />
                <label htmlFor="description">Description: </label>
                <input id="description" className="newDescription" defaultValue={parent.description} type="text" required />
                <select name="states" id="states">
                    {possibleStates.map((state) => {
                        return <option value={state}>{state}</option>
                    }
                    )}
                </select>
                <input type="submit" className="submitButton" />
            </form>
        </div>
    </div>);
}

export default UpdateButton;