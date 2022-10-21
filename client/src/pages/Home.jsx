import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function Home(){
    return (
        
            <div className="home w-100" style={{height: '100vh', backgroundImage: 'url("https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div style={{height: '100vh', backgroundColor: `rgba(0, 0, 0, 0.5)`}}>
                    <div className="container">
                        <div className="d-flex row text-white" style={{height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                            
                            <div className="d-flex flex-column col-10 h-50 text-center">
                                <h1 className="text-white py-3">Looking for a Boarding House?</h1>
                                <p className="py-3"> Are you looking for a boarding house near kilinochchi university premises? Don't worry you are in the correct place to find a boarding house for your needs. Basically this is a boarding house information system which helps to boarding house seekers to find boarding houses easily. </p>
                                <div className="w-50 mx-auto d-flex justify-content-evenly">
                                    <Link to="/boardings">
                                        <Button variant="outline-light" className="rounded-pill px-4">Boardings</Button>
                                    </Link>
                                    <Link to="/owners">
                                        <Button variant="outline-light" className="rounded-pill px-4">Owners</Button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    );
}

export default Home;