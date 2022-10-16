import Axios from 'axios';
import {Link} from 'react-router-dom';
import {useState} from 'react'; 


function SignUp(){

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('seeker');

    const handleChange = e => {
        console.log(e.target.value);
        setType(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, username, email, password, type);
        Axios.post('http://localhost:3001/register', {type: type, name: name, username: username, email: email, password: password}).then((response) => {
            console.log(response);
        });
        setEmail('');
        setPassword('');
        setName('');
        setUsername('');
    }

    return (
        <>
        <form className="login container" id="login" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="owner" value="owner" checked={type==='owner'} autoComplete="off" onChange={handleChange}/>
                <label className="btn btn-outline-primary" htmlFor="owner">Boarding Owner</label>

                <input type="radio" className="btn-check" name="btnradio" id="seeker" value="seeker" autoComplete="off" checked={type==='seeker'} onChange={handleChange}/>
                <label className="btn btn-outline-primary" htmlFor="seeker">Boarding Seeker</label>
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Tom Hardy" value={name} onChange={(e) => {
                    setName(e.target.value);
                }}/>
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="tomhardi" value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }}/>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="tomhardi22@example.com" value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="********" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
            </div>
            <div>
                <p>Already have an account? <span className="login"><Link to="/login">Login here</Link></span></p>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        </>
    );
}

export default SignUp;