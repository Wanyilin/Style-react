import { rgbaToHex } from 'hex-and-rgba/esm';
import { toPercentage } from 'src/utils/formatter';

const rgbaToHexObj = (rgba, position) => {
	const toRgbNum = num => Math.round(num * 255);
	const rgbColor = [];
		// convert float to rgb number
		for (let i = 0; i < 3; i++) {
			rgbColor[i] = toRgbNum(rgba[i]);
		}
		const hexColor = rgbaToHex(rgbColor);
		const positionText = toPercentage(position);
		const alpha = toPercentage(rgba[3]);
		return {
			position: positionText,
			hexText: hexColor.toUpperCase(),
			alpha: alpha,
		}
}

const convertColorSet = value => {
	const colorSet = value.map(item => {
		const { color, position } = item;
		const hexObj = rgbaToHexObj(color, position);
		return {
			...item,
			...hexObj,
		}
	});
	return colorSet;
};

export { convertColorSet, rgbaToHexObj };