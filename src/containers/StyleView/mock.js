const stylesList = {
	font: {
		fontFamily: 'Inter',
		fontStyle: 'Medium',
		fontSize: 24,
		fontSizeUnit: 'px',
		horizontalAlignment: 'LEFT',
		verticalAlignment: 'TOP',
		lineHeight: 1,
		paragraphSpacing: 0.2,
		characterSpacing: 0.01,
		wordSpacing: 0.01,
		paragraphIndent: 0.1,
		textDecoration: 'UNDERLINE',
		textCases: 'UPPERCASE',
		textDirection: 'RTL'
	},
	fills: [
		{
			paintType: 'SOLID',
			color: [1, 0.86, 0.15, 0.2],
			opacity: 0.2,
			blendMode: 'PASS_THROUGH'
		},
		{
			paintType: 'GRADIENT',
			gradientType: 'LINEAR',
			gradientStops: [
					{ color: [0.9961, 0.5059, 0.5059, 1], position: 0 },
					{ color: [1, 0.6941, 0.4118, 1], position: 0.3 },
					{ color: [1, 0.9412, 0.4118, 0.7], position: 1 }
			],
			opacity: 1,
			blendMode: 'LIGHTBURN'
		},
		{
			paintType: 'IMAGE',
			blendMode: 'PASS_THROUGH',
			fillType: 'FIT',
			x: 9,
			y: 0,
			width: 240,
			height: 890,
			rotation: 0.08726646259971647,
			opacity: 1
		}
	],
	strokes: [
			{
				paintType: 'SOLID',
				color: [0.149, 0.6941, 1, 1],
				opacity: 1,
				blendMode: 'OVERLAY',
				width: 1,
				offset: -0.5
			},
			{
				paintType: 'GRADIENT',
				gradientType: 'LINEAR',
				gradientStops: [
					{ color: [0.9961, 0.5059, 0.5059, 1], position: 0 },
					{ color: [1, 0.6941, 0.4118, 1], position: 0.3 },
					{ color: [1, 0.9412, 0.4118, 0.7], position: 1 }
				],
				opacity: 1,
				blendMode: 'NORMAL',
				width: 2,
				offset: 0
			}
	]
};

export { stylesList };