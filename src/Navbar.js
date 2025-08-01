import { Link } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const Navbar = ({ user, setUser }) => {
    return (
        <nav className="navbar">
            <h1>Work Tracker</h1>
            <div className="links">
                <Link to="/login" className="link">
                    {setUser(null)}
                    <i className='fa fa-id-badge' />
                </Link>
                <Link to={"/" + user} className="link"><i className='	fa fa-home' /></Link>
            </div>
        </nav>
    );
}

export default Navbar;