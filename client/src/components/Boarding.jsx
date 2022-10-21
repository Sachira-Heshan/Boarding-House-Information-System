import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Boarding(props){
    return (
        <>
            <div className="container my-4">
                <div className="d-flex row w-100">
                    <div className="col-5" >
                        <img src={props.img} alt="" className="w-100 h-100" style={{maxWidth: '100%', objectFit: 'cover'}} />
                    </div>
                    <div className="col-7 px-5">
                        <h3>{props.title}</h3>
                        <p> {props.description} </p>
                        <Link to='/boading?show=3'>
                            <Button variant="outline-primary">Show Details</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Boarding;