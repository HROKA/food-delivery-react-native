import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors, ICON_SIZE } from '../../../Utils/Constants';

//  ****    How make this   ****
/*
---1-  download the image you want with SVG type
---2-  Copy the svg code and go to this site
 https://react-svgr.com/playground/
 to convert the image to React component

*/
const Home = ({ active }) => (
    <Svg width={active ? ICON_SIZE * 1.2 : ICON_SIZE} height={active ? ICON_SIZE * 1.2 : ICON_SIZE}
        stroke={active ? Colors.primaryColor : Colors.secondaryColor}
        strokeWidth={2}
        viewBox="0 0 48 48"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <Path d="M42 48H28V35h-8v13H6V27a1 1 0 112 0v19h10V33h12v13h10V28a1 1 0 112 0v20z" />
        <Path d="M47 27a.997.997 0 01-.691-.277L24 5.384 1.691 26.723a1 1 0 01-1.383-1.445L24 2.616l23.691 22.661A1 1 0 0147 27zM39 15a1 1 0 01-1-1V8h-6a1 1 0 110-2h8v8a1 1 0 01-1 1z" />
    </Svg>
);

export default Home;
