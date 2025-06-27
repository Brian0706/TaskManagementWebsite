import { Link } from "react-router-dom";

const Bulletin = ({ bulletin }) => {
    return (<div className="Bulletin">
        <Link to={`/tasks/${bulletin.id}`} className="title">
            <h2>{bulletin.title}</h2>
        </Link>
    </div>);
}

export default Bulletin;