import * as React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';
import { Colors, ICON_SIZE } from '../../../Utils/Constants';

//  ****    How make this   ****
/*
---1-  download the image you want with SVG type
---2-  Copy the svg code and go to this site
 https://react-svgr.com/playground/
 to convert the image to React component

*/
const Profile = ({ active }) => (
  <Svg width={active ? ICON_SIZE * 1.2 : ICON_SIZE} height={active ? ICON_SIZE * 1.2 : ICON_SIZE} viewBox="0 0 18 20">
    <G
      transform="translate(1 1)"
      stroke={active ? Colors.primaryColor : Colors.secondaryColor}
      fill='none'
      strokeWidth={2}
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M16 18v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2" />
      <Circle cx={8} cy={4} r={4} />
    </G>
  </Svg>
);

export default Profile;
