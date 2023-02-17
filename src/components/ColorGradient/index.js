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
)

const ColorGradient = ({
	item,
}) => {
	const { name, value, type } = item;
	const colorSet = convertColorSet(value);
	const paintValue = [...colorSet];
	const firstColor = colorSet.shift();
	return (
		<>
			<PaintPreview type={type} value={paintValue} name={name} />
			<div className="gradient">
				<PositionSpot
					hexText={firstColor.hexText}
					alpha={firstColor.alpha}
					position={firstColor.position}
				/>
				{colorSet.map(({ hexText, alpha, position }) => (
					<>
						<div className="line" />
						<PositionSpot hexText={hexText} alpha={alpha} position={position}/>
					</>
				))}
			</div>
		</>
	)
}

export default ColorGradient;
