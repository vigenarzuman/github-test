import React, { Component } from 'react'
import './styles.css';

class Suggestions extends Component {

	constructor(props){
		super(props);
		this.state = {
			page: 1,
			count: 20,
			followers_list: [],
			login: '',
		}
		this.getFollowers = this.getFollowers.bind(this);
		this.showUsers = this.showUsers.bind(this);
		this.showFollowers = this.showFollowers.bind(this);
	}
	getFollowers(login) {
		axios.get(`/api/follower/${login}/${this.state.page}/${this.state.count}`)
		.then(({ data }) => {
			this.setState({
				followers_list: data,
				login: login
			})
		})
	}
	showFollowers() {
		let options = this.state.followers_list.map((r, i) => (
			<a className='info list-group-item' key={i} data-name={r.login} /* onClick={() => this.getFollowers(r.login)} */>
				<div className=''>
					<div className='user-avatar' style={{ backgroundImage: `url(${r.avatar_url})` }}>
					</div>
				</div>
				<p className='login'>{r.login}</p>
			</a>
		))
		return options;
	}	
	showUsers() {
		let button;
		let options;
		if (this.props.results) {
			options = this.props.results.map((r, i) => (
				<div style={{
					display: 'flex',

				}}>
				<div style={{
					position: 'relative',
					display: 'inline-block'
				}}>
				<a className='info list-group-item' key={i} data-name={r.login} onClick={() => this.getFollowers(r.login)}>
					<div className=''>
						<div className='user-avatar' style={{ backgroundImage: `url(${r.avatar_url})` }}>
						</div>
					</div>
					<p className='login'>{r.login}</p>
				</a>
				<div style={{
					position: 'absolute',
					top: 0,
					left: '110%'
				}}>
					{this.state.login === r.login && (
						<div>
							{this.state.followers_list.length === 0 && (
										<a className='info list-group-item' key={i} data-name={r.login} /* onClick={() => this.getFollowers(r.login)} */>
											<p className='login'>Count of followers: 0</p>
										</a>
							)}
							{this.state.followers_list.map((r, i) => (
								<a className='info list-group-item' key={i} data-name={r.login} /* onClick={() => this.getFollowers(r.login)} */>
									<div className=''>
										<div className='user-avatar' style={{ backgroundImage: `url(${r.avatar_url})` }}>
										</div>
									</div>
									<p className='login'>{r.login}</p>
								</a>
							))}
						</div>
					)}
				</div>
				</div>
				</div>
			))
			if (this.props.results.length >= this.state.count) {
				button = <button className='load-more btn btn-default' onClick={this.props.loadMore}>Load more</button>
			}
		}
		return {button,options};	
	}

	// handleFollowersList() {
	// 	this.setState({
	// 		query: this.search.value
	// 	}, () => {
	// 		if (this.state.query.length > 4)
	// 			this.getFollowers()
	// 	})
	// }
	render() {
	let {button, options} = this.showUsers();
	let showFollowers = this.showFollowers();
	return (
		<div>
			<div className='list-group'>
				{options}			
				{button}
			</div>
			<div className='asd'>
				{showFollowers}
			</div>
		</div>
	)
	}
}

export default Suggestions