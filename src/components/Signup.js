import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className="box flexDisplay">
                <h2 >Signup</h2>
                {error && <h6>{error}</h6>}
                <form className="flexDisplay" onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label >
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <button type="Submit">
                        Sign up
                    </button>
                </form>
                <div>
                    Already have an account? <Link to="/">Log In</Link>
                </div>
            </div>
        </>
    );
};

export default Signup;