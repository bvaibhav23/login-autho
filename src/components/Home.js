import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
const Home = () => {
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    if (!user)
        return <h1 className="flexDisplay">

            Please Login to Continue <Link to="/">Log In</Link>
        </h1>
    return (
        <div className="flexDisplay">
            <h1 >Hello World</h1>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default Home;