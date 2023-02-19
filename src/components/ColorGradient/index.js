import React, { Fragment } from 'react';
import { convertColorSet } from 'src/utils/utils';
import { STYLE_VALUE_TYPE } from 'src/utils/constants';
import PaintPreview from 'src/components/PaintPreview';

import './index.scss';

const PositionSpot = ({ position, hexText, alpha }) => (
	<div className="color-position-spot">
		<div className="circle" />
		<div className="position">{ position }</div>
		<div className="color-display">
			<PaintPreview type={STYLE_VALUE_TYPE.SOLID} value={hexText} />
			<span>{ alpha }</span>
		</div>
	</div>
);

const ColorSet = (({ hexText, alpha, position }) => (
	<Fragment key={`${hexText}-set`}>
		<div className="line" />
		<PositionSpot hexText={hexText} alpha={alpha} position={position}/>
	</Fragment>
));

const ColorGradient = ({
	name,
	value,
	type,
}) => {
	const colorsSet = convertColorSet(value);
	const paintValues = [...colorsSet];
	const firstColor = colorsSet.shift();
	return (
		<Fragment>
			<PaintPreview type={type} value={paintValues} name={name} />
			<div className="gradient">
				<PositionSpot
					hexText={firstColor.hexText}
					alpha={firstColor.alpha}
					position={firstColor.position}
				/>
				{colorsSet.map(ColorSet)}
			</div>
		</Fragment>
	)
}

export default ColorGradient;
