import React from "react";

const Offer = ({offers}) => {
	return (
		<section className="offers">
			<div className="container">
				{offers.map((ele) => (
					<img className="offer" src={ele} />
				))}
			</div>
		</section>
	);
};

export default Offer;
