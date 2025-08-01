import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import SubTask from "./SubTask";
import CreateTask from "./CreateTask";
import UpdateButton from "./UpdateButton";

const BulletinInfo = ({ allStates }) => {
    const { name, id } = useParams();
    const url = `http://localhost:8000/api/tasks/${name}/${id}`;
    let { data: task, isPending, error, setData: setTask } = useFetch(url);
    const updateTask = async () => {
        let updated = await fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                return data
            })
            .catch(err => {
                console.log(err)
            })
        setTask(updated)
    }
    return (<div className="BulletinInfo">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {task &&
            <div className="taskDetails">
                <h1 className="taskName">{task.title}</h1>
                <div className="description">
                    <h2>Some Info</h2>
                    <h3 className="subHeading">Description</h3>
                    <p>{task.description}</p>
                    <h3 className="subHeading">Status of the Task</h3>
                    <p className="statusPrompt">{task.status}</p>
                    <UpdateButton parent={task} onSendSignal={updateTask} possibleStates={allStates} />
                </div>
                <div className="subTasks">
                    <h2>What needs to be done first</h2>
                    {task.subTasks.map((id) => <SubTask className='subTask' user={name} id={id} parent={task} onSendSignal={updateTask} />)}
                </div>
                <CreateTask parent={task} />
            </div>
        }
    </div>);
}

export default BulletinInfo;