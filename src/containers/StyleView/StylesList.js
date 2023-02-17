import React from 'react';
import ListItem from 'src/components/ListItem';
import ColorGradient from 'src/components/ColorGradient';
import PaintPreview from 'src/components/PaintPreview';
import { STYLE_VALUE_TYPE } from 'src/utils/constants';
import { mapStyleItems } from './utils';

const ItemComponent = (item) => {
	const { type, value, name } = item;
	switch (type) {
		case STYLE_VALUE_TYPE.GRADIENT:
			return <ColorGradient item={item} />;
		case STYLE_VALUE_TYPE.IMAGE:
		case STYLE_VALUE_TYPE.SOLID:
			return <PaintPreview type={type} value={value} name={name} />;
		default:
			return <ListItem item={item} />
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
