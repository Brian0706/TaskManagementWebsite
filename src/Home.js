import BulletinList from "./BulletinList";
import { Link } from "react-router-dom";

const Home = () => {
    const test = [
        {
            title: "Hello",
            id: "1"
        },
        {
            title: "Test",
            id: "2"
        }
    ]
    return (<div className="Home">
        <h1>Welcome!</h1>
        <BulletinList data={test} />
    </div>);
}

export default Home;