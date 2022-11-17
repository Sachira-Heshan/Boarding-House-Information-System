import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("seeker");

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const inputs = { type, email, password };

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center" style={{ height: "100vh" }}>
        <form
          className="login container text-center"
          style={{ maxWidth: "380px" }}
          id="login"
          onSubmit={handleSubmit}
        >
          <h2 className="">Login</h2>
          <div
            className="btn-group w-100"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="owner"
              value="owner"
              checked={type === "owner"}
              onChange={handleChange}
            />
            <label className="btn btn-outline-primary" htmlFor="owner">
              Boarding Owner
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="seeker"
              value="seeker"
              checked={type === "seeker"}
              onChange={handleChange}
            />
            <label className="btn btn-outline-primary" htmlFor="seeker">
              Boarding Seeker
            </label>
          </div>
          <div className="form-group text-start">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {error && <p className="text-danger pt-3">{error}</p>}
          <div>
            <p>
              Haven't an account yet?{" "}
              <span className="register">
                <Link to="/signup">Register here</Link>
              </span>
            </p>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
