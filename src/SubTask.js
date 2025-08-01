import Bulletin from "./Bulletin";
import useFetch from "./useFetch";
import '../node_modules/font-awesome/css/font-awesome.min.css';

const SubTask = ({ user, parent, id, onSendSignal }) => {
    const { data: task, isPending, error } = useFetch(`http://localhost:8000/api/tasks/${user}/${id}`);
    const removeTask = async (event) => {
        const index = parent.subTasks.indexOf(id);
        parent.subTasks.splice(index, 1)
        const updatedList = {
            subTasks: parent.subTasks
        }
        try {
            const update = await fetch(`http://localhost:8000/api/tasks/${parent.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedList)
            })
            if (!update.ok) {
                throw new Error(`Error with status: ${update.status}`);
            }
            onSendSignal()
        } catch (error) {

        }
    }
    return (<div className="subTask" >
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {task && <div className="info">
            <Bulletin bulletin={task} />
            <button className="removeButton" onClick={removeTask}>
                <i className="fa fa-remove" />
            </button>
        </div>}
    </div>);
}

export default SubTask;