import React from 'react';
import ListItem from 'src/components/ListItem';
import ColorGradient from 'src/components/ColorGradient';
import PaintPreview from 'src/components/PaintPreview';
import { STYLE_VALUE_TYPE } from 'src/utils/constants';
import { mapStyleItems } from './utils';

const ItemComponent = ({ type, value, name }) => {
	switch (type) {
		case STYLE_VALUE_TYPE.GRADIENT:
			return <ColorGradient key={`${name}-${value}`} type={type} value={value} name={name} />;
		case STYLE_VALUE_TYPE.IMAGE:
		case STYLE_VALUE_TYPE.SOLID:
			return <PaintPreview key={`${name}-${value}`} type={type} value={value} name={name} />;
		default:
			return <ListItem key={`${name}-${value}`} type={type} value={value} name={name} />
	}
}

const StylesList = ({
	stylesList,
	className,
}) => {
	const mappedItems = mapStyleItems(stylesList);
	return (
		<div className={className}>
			{mappedItems.map(ItemComponent)}
		</div>
	)
};

export default StylesList;
