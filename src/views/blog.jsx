import React,{ useEffect } from "react";
// import { Link } from "react-router-dom";

const gitHubUrl = "https://api.github.com/users/deekshasharma";

function Blog() {
    useEffect(() => {
        document.title = 'Blog';
    });
    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>{userData.name}</h1>
        </>
    )
}

export default Blog