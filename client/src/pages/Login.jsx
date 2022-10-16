import {Link} from 'react-router-dom';

function Login(){
    return (
        <>
        <form className="login container" id="login">
            <h2>Login</h2>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="owner" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="owner">Boarding Owner</label>

                <input type="radio" className="btn-check" name="btnradio" id="seeker" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="seeker">Boarding Seeker</label>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" />
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>
            <div>
                <p>Haven't an account yet? <span className="register"><Link to="/signup">Register here</Link></span></p>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </>
    );
}

export default Login;