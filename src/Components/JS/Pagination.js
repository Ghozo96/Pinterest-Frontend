import React, {Component} from 'react';

class Pagination extends Component {
	handleClick = (e) => {
		this.props.fetchingNextOrPrevPins(e.target.innerText);
	};

	render() {
		const {currentPage, maxPageNum} = this.props;
		return (
			<div>
				<nav aria-label='Page navigation example'>
					<ul class='pagination justify-content-center'>
						{currentPage > 1 && (
							<li class='page-item'>
								<button
									class='page-link text-danger'
									tabindex='-1'
									onClick={this.handleClick}>
									Previous
								</button>
							</li>
						)}
						<li class='page-item disabled'>
							<button class='page-link text-danger'>
								{currentPage}
							</button>
						</li>
						{currentPage < maxPageNum && (
							<li class='page-item'>
								<button
									class='page-link text-danger'
									onClick={this.handleClick}>
									Next
								</button>
							</li>
						)}
					</ul>
				</nav>
			</div>
		);
	}
}

export default Pagination;
