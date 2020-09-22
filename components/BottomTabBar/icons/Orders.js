import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { Colors, ICON_SIZE } from '../../../Utils/Constants';

//  ****    How make this   ****
/*
---1-  download the image you want with SVG type
---2-  Copy the svg code and go to this site
 https://react-svgr.com/playground/
 to convert the image to React component

*/
const Orders = ({ active }) => (

    <Svg
        width={active ? ICON_SIZE * 1.2 : ICON_SIZE} height={active ? ICON_SIZE * 1.2 : ICON_SIZE}
        stroke={active ? Colors.primaryColor : Colors.secondaryColor}
        fill='none'
        viewBox="0 0 24 24"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="prefix__feather prefix__feather-shopping-cart"
    >
        <Circle cx={9} cy={21} r={1} />
        <Circle cx={20} cy={21} r={1} />
        <Path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </Svg>
);

export default Orders;
