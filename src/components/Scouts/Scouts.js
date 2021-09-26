import './Scouts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

const Scouts = (props) => {
    const donate = <FontAwesomeIcon icon={faDonate} />
    const { name, email, thumbnail, designation, deonation_amount, district } = props.scout;

    return (
        <div className="scouts">
            <img src={thumbnail} className="card-img-top" alt="Scouts Profile" />
            <div className="card-body">
                <h2>{name}</h2>
                <p>From: {district}</p>
                <p>Designation: {designation}</p>
                <p>Email: {email}</p>
                <p>Donation Amount: {deonation_amount}</p>
                <button>{donate} Add To Donate List</button>
            </div>
        </div>
    );
};

export default Scouts;