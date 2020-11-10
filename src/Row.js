import React from 'react';
import articles from './data.js';

class Row extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		var items = [];

		Object.keys(articles).map((oneKey,i)=>{
			return (
				items.push(<li key={i}>
					<a href="#">
						<h4>{articles[oneKey]}</h4>
						<p>{oneKey}</p>
						<div className="circle"></div>
					</a>
				</li>)
			)
		})

		return(
			<div className="row-container">
				<div className="row">
					<h2>{this.props.topic}</h2>

					<hr></hr>

					<ul className="articles-list">
						{items}

					</ul>

				</div>
			</div>
		)
	}
}

export default Row;