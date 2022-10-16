import {Link} from 'react-router-dom';

function SignUp(){
    return (
        <>
        <form className="login container" id="login">
            <h2>Sign Up</h2>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="owner" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="owner">Boarding Owner</label>

                <input type="radio" className="btn-check" name="btnradio" id="seeker" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="seeker">Boarding Seeker</label>
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Tom Hardy" />
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="tomhardi" />
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="tomhardi22@example.com" />
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="********" />
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