import BulletinList from "./BulletinList";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch.js";
import CreateTask from "./CreateTask.js";

const Home = ({ allStatuses }) => {
    const { name } = useParams();
    const url = `http://localhost:8000/api/tasks/${name}`
    const { data: tasks, isPending, error } = useFetch(url);
    return (<div className="Home">
        <h1>Welcome!</h1>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {tasks &&
            <BulletinList data={tasks} name={name} />
        }
        <CreateTask />
    </div>);
}

export default Home;