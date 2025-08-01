import Bulletin from "./Bulletin";

const BulletinList = ({ data, name, statuses }) => {
    return (
        <div className="Bulletins">
            {data.map(bulletin => <Bulletin user={name} bulletin={bulletin} key={bulletin._id} />)}
        </div>);
}

export default BulletinList;