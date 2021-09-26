import './Scouts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

const Scouts = (props) => {
    // console.log(props);
    const donate = <FontAwesomeIcon icon={faDonate} />
    const { name, email, thumbnail, designation, deonation_amount, district } = props.scout;

    return (
        <div className="scouts">
            <img src={thumbnail} className="card-img-top" alt="Scouts Profile" />
            <div>
                <h2>{name}</h2>
                <p><b>Rover Region:</b> {district}</p>
                <p><b>Designation:</b> {designation}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>Donation Amount:</b> {deonation_amount}</p>
                <button onClick={() => props.handleAddToFund(props.scout)}>{donate} Add To Fund</button>
            </div >
        </div >
    );
};

export default Scouts;