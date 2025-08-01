import { Link } from "react-router-dom";

const Bulletin = ({ user, bulletin }) => {
    return (<div className="Bulletin">
        <Link to={`/tasks/${user}/${bulletin._id}`} className="title">
            <h2>{bulletin.title}</h2>
        </Link>
    </div>);
}

export default Bulletin;