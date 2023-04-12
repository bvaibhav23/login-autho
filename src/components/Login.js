import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="box flexDisplay">
                <h2>Login</h2>
                {error && <h6>{error}</h6>}
                <form className="flexDisplay" onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label>
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <button type="Submit">Log In</button>
                </form>
                <button style={{ marginBottom: "1rem" }} onClick={handleGoogleSignIn}>Login With Google</button>
                <div>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </>
    );
};

export default Login;