import React from 'react';
import { convertCamel } from 'src/utils/formatter';
import StylesList from './StylesList';
import { stylesList } from './mock';
import './index.scss';

const stylesListGroup = groups => (
	groups.map(stylesList => (
		<StylesList
			className="style-list-group"
			key={stylesList}
			stylesList={stylesList}
		/>
	))
);

const StyleView = () => {
	const categoriesList = Object.keys(stylesList);
	return (
		<div  className="style-view">
			{
				categoriesList.map(cat => (
					<div key={cat} className="style-list">
						<div className="category-title">{convertCamel(cat)}</div>
						{Array.isArray(stylesList[cat]) ? (
							stylesListGroup(stylesList[cat])
						) : (
							<StylesList stylesList={stylesList[cat]}/>
						)}
					</div>
				))
			}
		</div>
	)
}

export default StyleView;
