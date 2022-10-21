import Axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'; 

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('seeker');

    const [loginStatus, setLoginStatus] = useState('');

    const handleChange  = e => {
        console.log(e.target.value);
        setType(e.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password, type);
        Axios.post('http://localhost:3001/auth', {type: type, email: email, password: password}).then((response) => {
            console.log(response.data);
            if(response.data.message){
                setLoginStatus(response.data.message);
            }else{
                navigate('/');
            }
        });
    }

    return (
        <>
        <div className="d-flex align-items-center" style={{ height: '100vh' }} >
            <form className="login container text-center" style={{ maxWidth: '360px' }} id="login" onSubmit={handleSubmit}>
                <h2 className="">Login</h2>
                <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="owner" value="owner" checked={type==='owner'} onChange={handleChange}/>
                    <label className="btn btn-outline-primary" htmlFor="owner">Boarding Owner</label>
                    <input type="radio" className="btn-check" name="btnradio" id="seeker" value="seeker" checked={type==='seeker'} onChange={handleChange}/>
                    <label className="btn btn-outline-primary" htmlFor="seeker">Boarding Seeker</label>
                </div>
                <div className="form-group text-start">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" value={email} placeholder="Enter email" onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" value={password} placeholder="Enter password" onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </div>
                <p className="text-danger pt-3">{loginStatus}</p>
                <div>
                    <p>Haven't an account yet? <span className="register"><Link to="/signup">Register here</Link></span></p>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
        </>
    );
}

export default Login;