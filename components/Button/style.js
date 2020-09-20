import { StyleSheet } from 'react-native';
import mainStyle from '../../style';

const style = StyleSheet.create({
  btnContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 5,
    borderColor: mainStyle.secondaryColor,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default style;
