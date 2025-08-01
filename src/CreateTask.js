import { useState } from "react";

const CreateTask = ({ parent }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        let subTaskList = event.target[2].value.split(/\s+/)
        if (subTaskList[0] === "") {
            subTaskList = []
        }
        const newTask = {
            title: event.target[0].value,
            description: event.target[1].value,
            status: "Not Started",
            subTasks: subTaskList
        }
        try {
            const response = await fetch('http://localhost:8000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask)
            }).then((response) => {
                if (!response.ok) {
                    throw new Error(`Error with status: ${response.status}`);
                }
                console.log('Task was successfully added')
                return response.json()
            }).then(async (response) => {
                if (parent != null) {
                    const newSubTasks = parent.subTasks.push(response.id)
                    const updatedSubTask = {
                        subTasks: parent.subTasks
                    }
                    console.log(updatedSubTask)
                    const update = await fetch(`http://localhost:8000/api/tasks/${parent.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(updatedSubTask)
                    })
                    if (!update.ok) {
                        throw new Error(`Error with status: ${response.status}`);
                    }
                }
                changeTaskStatus()
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    const changeTaskStatus = () => {
        setCreateTask(!createTask)
    }
    const [createTask, setCreateTask] = useState(false)

    return (
        <div className="taskHandler">
            <button className="startCreation" onClick={changeTaskStatus} style={{ display: createTask ? 'none' : 'block' }}>Add Task</button>
            <div className="form">
                <form onSubmit={handleSubmit} className="createTask" style={{ display: createTask ? 'block' : 'none' }}>
                    <h2>New Task Description</h2>
                    <label htmlFor="title">Title: </label>
                    <input id="title" className="title" type="text" required />
                    <label htmlFor="description">Description: </label>
                    <input id="description" className="newDescription" type="text" required />
                    <label htmlFor="subTasks">SubTasks(By id): </label>
                    <input id="subTasks" className="subTasks" type="text" />
                    <input type="submit" className="submitButton" />
                </form>
            </div>
        </div>);
}

export default CreateTask;