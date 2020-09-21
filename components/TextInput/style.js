import { StyleSheet } from 'react-native';
import { Colors } from '../../Utils/Constants';

const styles = StyleSheet.create({
  span: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  spanImg: {
    height: '100%',
    width: '18%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  },
  textField: {
    backgroundColor: '#EFEFEF',
    padding: 10,
    width: '85%',
    height: 50,
    borderWidth: 0,
  },
  eye: {
    position: 'absolute',
    top: '30%',
    right: '1%',
  },
});

export default styles;
