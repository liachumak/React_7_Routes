import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./singleUserPage.module.css";

const SingleUserPage = () => {

    const { id } = useParams()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});

   useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(resp => {
        setUser(resp);
        setLoading(false);
    })
    .catch(error => {
        setError(error);
        setLoading(false);
    })
    }, []);

    console.log(user)
    return <div className={styles['common']}> 
            <h3>User Information</h3>
            <p>Name: {user.name}</p>
            <p>ID: {id}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p> 
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            </div>
};

export default SingleUserPage;