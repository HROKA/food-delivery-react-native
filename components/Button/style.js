import { StyleSheet } from 'react-native';
import { Colors } from '../../Utils/Constants';

const style = StyleSheet.create({
  btnContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 5,
    borderColor: Colors.secondaryColor,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default style;
