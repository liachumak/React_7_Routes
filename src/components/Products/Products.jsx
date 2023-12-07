// import BorderWrapper from './BorderWrapper';
import QueryLoader from "../QueryLoader/QueryLoader";
import UserCard from "../UserCard/UserCard";
import { useEffect, useState } from 'react';

import styles from './products.module.css';

const Products = () => {

	const [users, setUsers] = useState([]);
	const [fetching, setFetching] = useState(false);
	const [fetchError, setFetchError] = useState(null)

	useEffect(function() {
		setFetching(true);
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(resp => {
			setUsers(resp)
			setFetching(false)
		})
		.catch(err => {
			setFetching(false)
			setFetchError(err)
		});
	}, []);
	
	return (
		<div className={styles['common']}>
			<QueryLoader fetching={fetching} error={fetchError}>
				{ users.map(({ name, username, email, id }) => {
					return (
						<UserCard 
						name={name}
						surname={username}
						email={email}
						key={id}
						id={id} />			
					);
				}) }
			</QueryLoader>



			{/* <BorderWrapper >
				<div>Hello</div>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, 
					dolore minima vitae nemo alias aliquam adipisci odit explicabo.
					 Vel delectus aut sequi culpa accusamus eum sapiente. Fuga cupiditate earum dolore!</p>
			</BorderWrapper> */}
		</div>
	);
}

export default Products;