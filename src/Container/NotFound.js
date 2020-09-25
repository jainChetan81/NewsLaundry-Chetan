import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            Error:404 Page not found
            <button>
                <Link to="/dashboard">Go To Home</Link>
            </button>
        </div>
    );
}
