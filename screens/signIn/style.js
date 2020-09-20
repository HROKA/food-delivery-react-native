import { StyleSheet } from 'react-native';
import mainStyle from '../../style';

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerImg: {
    width: '100%',
    flex: 0.4,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    // borderColor: 'black',
    // borderRadius: 50,
    // borderWidth: 0.2,
  },
});
