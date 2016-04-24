/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');
var AtomDisplay = require('./AtomDisplay');

function List(props) {
	return(
		<div className="atom-list">
			{props.atomList.map((item, i) => {
				return (
					<AtomDisplay
						key={i}
						atomNumber={item.atomNumber}
						atomSymbol={item.atomSymbol}
						atomName={item.atomName}
						atomWeight={item.atomWeight}
						atomColor={item.atomColor}
					/>
				)
			})}
		</div>
	)
}



module.exports = List;
