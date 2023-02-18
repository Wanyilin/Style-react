import React from 'react';
import { convertColorSet } from 'src/utils/utils';
import PaintPreview from 'src/components/PaintPreview';

import './index.scss';

const PositionSpot = ({ hexText, alpha, position }) => (
	<div className="color-position">
		<div className="circle" />
		<div className="position">{ position }</div>
		<div className="color-display">
			<span className="color-box" style={{ background: `${hexText}` }} />
			<span className="hex-text">{ hexText }</span>
			<span>{ alpha }</span>
		</div>
	</div>
);

const ColorGradient = ({
	name,
	value,
	type,
}) => {
	const colorsSet = convertColorSet(value);
	const paintValue = [...colorsSet];
	const firstColor = colorsSet.shift();
	return (
		<>
			<PaintPreview type={type} value={paintValue} name={name} />
			<div className="gradient">
				<PositionSpot
					hexText={firstColor.hexText}
					alpha={firstColor.alpha}
					position={firstColor.position}
				/>
				{colorsSet.map((colorSet) => (
					<div key={`${colorSet.hexText}-set`}>
						<div className="line" />
						<PositionSpot hexText={colorSet.hexText} alpha={colorSet.alpha} position={colorSet.position}/>
					</div>
				))}
			</div>
		</>
	)
}

export default ColorGradient;
