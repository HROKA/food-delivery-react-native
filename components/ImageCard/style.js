import { StyleSheet } from 'react-native';
import mainStyle from '../../style';

const styles = StyleSheet.create({
  element: {
    width: mainStyle.deviceHight / 6,
    height: mainStyle.deviceHight / 6,
    marginEnd: 15,
    marginStart: 15,
  },
  imageBackground: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
  },
  title: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 12,
    height: '100%',
    width: '100%',
    backgroundColor:
      'linear-gradient(   rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
    position: 'absolute',
    bottom: 0,
  },
  titleText: {
    color: 'white',
    margin: 5,
  },
  VerticalSlider: {
    height: mainStyle.deviceHight / 6,
  },
});

export default styles;
