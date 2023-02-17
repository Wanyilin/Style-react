import {
	GRADIENT_OBJ,
	GRADIENT_TYPE,
	STYLE_VALUE_TYPE,
	FONT_OBJ,
	EXCLUD_LIST,
} from 'src/utils/constants';


const mapStyleItems = (list) => {
	const mapStyles = Object.keys(list).map(styleName => {
		switch (list[styleName]) {
			case STYLE_VALUE_TYPE.GRADIENT:
				return ({
					name: GRADIENT_TYPE[list[GRADIENT_OBJ.GradientType]],
					value: list[GRADIENT_OBJ.GradientSpots],
					type: STYLE_VALUE_TYPE.GRADIENT,
				})
			case STYLE_VALUE_TYPE.IMAGE:
				return ({
					name: list[styleName],
					value: list?.url,
					type: STYLE_VALUE_TYPE.IMAGE,
				})
			case STYLE_VALUE_TYPE.SOLID:
				return ({
					name: '',
					value: list.color,
					type: STYLE_VALUE_TYPE.SOLID,
				})
			case FONT_OBJ.FONT_SIZE:
				return ({
					name: styleName,
					value: list[styleName],
					unit: list[FONT_OBJ.FONT_UNIT],
					tyep: STYLE_VALUE_TYPE.STRING,
				})
			default:
				return ({
					name: styleName,
					value: list[styleName],
					type: STYLE_VALUE_TYPE.STRING,
				})
		}
	});
	const filterItems = mapStyles.filter(({ name }) => (
		!EXCLUD_LIST.includes(name)
	))
	return filterItems;
};

export { mapStyleItems };
