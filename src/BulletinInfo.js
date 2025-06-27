import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BulletinInfo = ({ }) => {
    const { id } = useParams();
    return (<div className="BulletinInfo">
        <h1 className="TaskName">{id}</h1>
        <Link to={`/`} className="back">
            <h2>Back</h2>
        </Link>
    </div>);
}

export default BulletinInfo;