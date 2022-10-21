import Axios from 'axios';
import {Link} from 'react-router-dom';
import {useState} from 'react'; 


function SignUp(){

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [telephone, setTelephone] = useState('');
    const [type, setType] = useState('seeker');

    const handleChange = e => {
        console.log(e.target.value);
        setType(e.target.value);
    }

    const handleGender = e => {
        console.log(e.target.value);
        setGender(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, username, email, password, type);
        Axios.post('http://localhost:3001/register', {type: type, name: name, username: username, email: email, password: password, address: address, gender: gender, telephone: telephone}).then((response) => {
            console.log(response.data);
            alert("Successfully Registered!");
        });
        setEmail('');
        setPassword('');
        setName('');
        setUsername('');
        setAddress('');
        setTelephone('');
    }

    return (
        <>
        <div className="container text-center d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <form className="login" style={{ minWidth: '380px' }} id="login" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="owner" value="owner" checked={type==='owner'} autoComplete="off" onChange={handleChange}/>
                    <label className="btn btn-outline-primary" htmlFor="owner">Boarding Owner</label>
                    <input type="radio" className="btn-check" name="btnradio" id="seeker" value="seeker" autoComplete="off" checked={type==='seeker'} onChange={handleChange}/>
                    <label className="btn btn-outline-primary" htmlFor="seeker">Boarding Seeker</label>
                </div>
                <div className="form-group text-start">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Tom Hardy" required value={name} onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                    <div className="py-3 d-flex justify-content-center" >
                        <label className="px-2 form-check-label" htmlFor="male">Male</label>
                        <input className="form-check-input" type="radio" value="M" id="male" checked={gender === 'M'} onChange={handleGender} name="gender"/> 
                        <label className="px-2 form-check-label" htmlFor="female">Female</label>
                        <input className="form-check-input" type="radio" value="F" id="female" checked={gender === 'F'} onChange={handleGender} name="gender"/>
                    </div>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="tomhardi" required value={username} onChange={(e) => {
                        setUsername(e.target.value);
                    }}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="tomhardi22@example.com" required value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="********" required value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="No.03, Ariviyal Nagar, Kilinochchi" required value={address} onChange={(e) => {
                        setAddress(e.target.value);
                    }}/>
                    <label htmlFor="telephone">Tele. No.</label>
                    <input type="tel" className="form-control" id="telephone" placeholder="0774123541" required value={telephone} onChange={(e) => {
                        setTelephone(e.target.value);
                    }}/>
                </div>
                <div>
                    <p>Already have an account? <span className="login"><Link to="/login">Login here</Link></span></p>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
        </div>
        </>
    );
}

export default SignUp;