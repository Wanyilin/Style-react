import React from 'react';
import styled from 'styled-components';
import { isValidHex } from 'hex-and-rgba/esm';
import { convertCamel } from 'src/utils/formatter';
import { STYLE_VALUE_TYPE } from 'src/utils/constants'; 
import { rgbaToHexObj } from 'src/utils/utils';

import './index.scss';

const BackgroundWrapper = styled.span`
	${(props) => props.background && `
		background: ${props.background};
	`}
`;

const PaintPreview = ({
  name,
  type,
  value,
}) => {
  let displayText = value;
  let background = `url(${value})`;
  if (type === STYLE_VALUE_TYPE.GRADIENT) {
    displayText = convertCamel(name);
    const colors = value.reduce((acc, curr) => {
      acc.push(`${curr.hexText} ${curr.position}`);
      return acc;
    }, [])
    background = `linear-gradient(180deg, ${colors.join(',')})`;
  }
  if (type === STYLE_VALUE_TYPE.SOLID) {
		const { hexText } = rgbaToHexObj(value);
		background = isValidHex(value) ? value : hexText;
		displayText = isValidHex(value) ? value : hexText;;
  }
  return (
   <div className="paint-preview category-title">
      <BackgroundWrapper
        className="color-box"
				background={background}
      />
      <span className="item-content">{displayText}</span>
   </div> 
  )
};

export default PaintPreview;
