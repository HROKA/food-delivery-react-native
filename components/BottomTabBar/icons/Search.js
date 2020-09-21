import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { Colors, ICON_SIZE } from '../../../Utils/Constants';

//  ****    How make this   ****
/*
---1-  download the image you want with SVG type
---2-  Copy the svg code and go to this site
 https://react-svgr.com/playground/
 to convert the image to React component

*/
const Search = ({ active }) => (
  <Svg
    width={active ? ICON_SIZE * 1.3 : ICON_SIZE} height={active ? ICON_SIZE * 1.3 : ICON_SIZE}
    viewBox="0 0 24 24"
    fill='none'
    stroke={active ? Colors.primaryColor : Colors.secondaryColor}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="prefix__feather prefix__feather-search"
  >
    <Circle cx={10} cy={10} r={8} />
    <Path d="M21 21l-4.35-4.35" />
  </Svg>
);

export default Search;
