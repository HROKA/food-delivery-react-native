import { StyleSheet } from 'react-native';
import { Colors, mainStyle } from '../../Utils/Constants';

const styles = StyleSheet.create({
  span: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
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
  picker: {
    textAlign: 'center',
    backgroundColor: '#EFEFEF',
    padding: 15,
    width: '85%',
    height: 50,
    borderWidth: 0,
  },
  downIcon: {
    position: 'absolute',
    top: '10%',
    left: '5%',
  },
  container: {
    width: mainStyle.deviceWidth,
    height: mainStyle.deviceHight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  item: {
    borderTopWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    backgroundColor: '#F04700'
  },
});

export default styles;
