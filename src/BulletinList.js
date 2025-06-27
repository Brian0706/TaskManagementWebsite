import Bulletin from "./Bulletin";

const BulletinList = ({ data }) => {
    return (
        <div className="Bulletins">
            {data.map(bulletin => <Bulletin bulletin={bulletin} />)}
        </div>);
}

export default BulletinList;