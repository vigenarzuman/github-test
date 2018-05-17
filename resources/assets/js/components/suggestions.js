import React, { Component } from 'react'
import './styles.css';

class Suggestions extends Component {

	constructor(props){
		super(props);
		this.state = {
			result: 'asadasd'
		}
	}
	


render() {
	// console.log(this.props.results.items.map(r => r));
	let options;
	if(this.props.results.length !== 0){
		options = this.props.results.items.map((r,i) => (
		<a className='info list-group-item' key={i} data-name={r.login} href='#'>
			<div className=''>
				<div className='user-avatar' style={{ backgroundImage: `url(${r.avatar_url})`}}>
				</div>
			</div>	
			<p className='login'>{r.login}</p>
		</a>
	))}
	return (
		<div className='list-group'>{options}</div>
	)
}
}

export default Suggestions