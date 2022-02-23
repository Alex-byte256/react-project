import styles from './users.module.css';

let Users = (props) => {
	if (props.users.lenght === 0){
		props.setUsers(
			[
			{
				id: 1,
				photoURL: "https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png",
				followed: true,
				fullName: "Alex",
				status: "prosto waiting",
				location: { city: "Lviv", country: "Ukraine" },
			 },
			 {
				id: 2,
				photoURL: "https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png",
				followed: false,
				fullName: "Bohdan",
				status: "I am taxi driver",
				location: { city: "Kiev", country: "Ukraine" },
			 },
			 {
				id: 3,
				photoURL: "https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png",
				followed: false,
				fullName: "Maxim",
				status: "go to trip",
				location: { city: "Krakov", country: "Poland" },
			 },
		]
		)
	}
	

	return(
		<div>
			{
				props.users.map( u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photoURL} className={styles.userPhoto}/>
						</div>
						<div>
							{u.followed?<button onClick={() => {props.unfollow(u.id)}} >Unfollow</button>
							:<button onClick={() => {props.follow(u.id)}} >Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
						<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	);
}

export default Users;