import React from 'react';
import { convertCamel, formatter } from 'src/utils/formatter';

import './index.scss';

const ListItem = ({
	item
}) => {
	const { name } = item;
	const title = convertCamel(name);
	const content = formatter(item);
	return (
		<div className="list-item">
			<span className="item-title">{title}</span>
			<span className="item-content">{content}</span>
		</div>
	)
};

export default ListItem;
