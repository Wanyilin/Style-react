import React from 'react';
import { convertCamel, formatter } from 'src/utils/formatter';

import './index.scss';

const ListItem = ({
	type,
	value,
	name,
}) => {
	const title = convertCamel(name);
	const content = formatter({ type, value, name });
	return (
		<div className="list-item">
			<span className="item-title">{title}</span>
			<span className="item-content">{content}</span>
		</div>
	)
};

export default ListItem;
