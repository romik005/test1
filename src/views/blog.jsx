import React,{ useEffect } from "react";
// import { Link } from "react-router-dom";

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
            <h1>Blog</h1>
        </>
    )
}

export default Blog