import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
import { Colors, ICON_SIZE } from '../../../Utils/Constants';

//  ****    How make this   ****
/*
---1-  download the image you want with SVG type
---2-  Copy the svg code and go to this site
 https://react-svgr.com/playground/
 to convert the image to React component

*/
const Favorites = ({ active }) => (
    <View style={{ paddingBottom: '12%' }}>
        <Svg
            width={active ? ICON_SIZE * 1.6 : ICON_SIZE * 1.4}
            height={active ? ICON_SIZE * 1.6 : ICON_SIZE * 1.4}
            stroke={active ? Colors.primaryColor : Colors.secondaryColor}
            fill={active ? Colors.primaryColor : Colors.secondaryColor}
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-heart"
        >
            <Path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </Svg>
    </View>
);

export default Favorites;
